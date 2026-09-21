# 日本語マスター — JLPT N5

A single-file, offline study app for the JLPT N5, written for a complete beginner who
cannot read any Japanese yet. No dependencies, no build step, no network.

**[Open the app](Nihongo-N5.html)** — or download `Nihongo-N5.html` and double-click it.

## What is in it

| | |
|---|---|
| Kana | 222 — both scripts, including dakuten, yōon and extended katakana |
| Kanji | 99 — meaning, on'yomi, kun'yomi, stroke count, common words |
| Vocabulary | 729 words in 23 themes |
| Grammar | 96 points, each with formation rules, examples and a drill |
| Mock exam | Full N5 paper, 43 questions, generated fresh every time |

- **Spaced repetition** (simplified SM-2) with daily limits, so a session is always finishable.
- **Drills** for recognition, production, typing and tracing; a look-alike drill for the
  kana everyone confuses; a conjugation drill that shows the rule on every mistake.
- **Mock exam** in the real N5 format with per-section timers, two-section scoring, and
  every question you miss pushed straight back into your review queue.
- **Progress screen** with kana and kanji heatmaps, streak, accuracy and an estimated
  N5 readiness percentage.

## Running it

**On a computer** — download `Nihongo-N5.html` and double-click. That is the whole
installation. It works with no internet, forever. Progress is saved in that browser's
local storage, so keep using the same browser and do not clear site data.

**On a phone, or to install it as an app** — it has to be served from a web address,
because browsers will not install a local file. Host it (GitHub Pages, or drag the file
onto [Netlify Drop](https://app.netlify.com/drop)), open the address on your phone, then
use **Add to Home Screen**. You get an app icon, no browser bars, and it keeps working
offline.

**Audio** is optional and needs a Japanese voice installed on the device. If there is
none, every audio control hides itself rather than showing a broken button.

## Files

| File | What it is |
|---|---|
| `Nihongo-N5.html` | the entire app — data, styling, logic, in one file |
| `index.html` | a redirect, so a hosted copy works from the bare address |
| `sw.js` | optional service worker: offline support for hosted copies only |
| `HANDOFF.md` | status, code map, data formats, decisions, known gaps |
| `BUILD-PROMPT.md` | the original specification |

## Checking that it is healthy

Open the app, press F12, and run:

```js
NM.selfTest()   // -> {pass: true, …}  39 checks
NM.stats()
```

The self test verifies, among other things, that every kanji on screen is one the app
teaches, that every example sentence is built only from its own vocabulary, that the
conjugation engine matches hand-written answers, and that the mock exam's question
counts match its specification. There is also a "Run self test" button on the Settings
screen.

## Honest limits

No listening section — browser speech synthesis is not close enough to real recorded
Japanese to practise against, so the exam's 180-point total cannot be completed and the
result screen says so explicitly. Tracing is self-marked; the app cannot check stroke
order. The full list of deliberate omissions is in the app itself under Settings, and in
`HANDOFF.md`.
