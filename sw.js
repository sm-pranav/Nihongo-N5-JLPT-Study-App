/* ===========================================================================
   Service worker — ONLY needed when Nihongo-N5.html is served from a web
   address (GitHub Pages, Netlify, any host). It does two things:

     1. makes the hosted app work with no internet after the first visit
     2. satisfies the browser's install rules, so Android Chrome offers a real
        "Install app" instead of a plain bookmark shortcut

   The app itself does not need this file. Opened by double-clicking the HTML,
   nothing here ever runs. Cache-first, with a quiet refresh in the background
   so a new version is picked up on the visit after it is published.
   =========================================================================== */
var CACHE = 'nihongo-n5-v1';

self.addEventListener('install', function(){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.open(CACHE).then(function(cache){
      return cache.match(e.request, { ignoreSearch: true }).then(function(hit){
        if (hit){
          /* serve instantly, then quietly update the copy for next time */
          fetch(e.request).then(function(res){
            if (res && res.ok) cache.put(e.request, res.clone());
          }).catch(function(){});
          return hit;
        }
        return fetch(e.request).then(function(res){
          if (res && res.ok) cache.put(e.request, res.clone());
          return res;
        }).catch(function(){
          /* offline and never cached: fall back to whatever page we have */
          return cache.match('./') ||
                 cache.match('index.html') ||
                 cache.match('Nihongo-N5.html') ||
                 Response.error();
        });
      });
    })
  );
});
