# focusd

A study companion built around how ADHD, autistic, dyslexic, and other neurodivergent brains actually focus — instead of asking people to fit a one-size-fits-all study app.

## The problem

Most study apps assume one "normal" way of concentrating: rigid countdown timers, dense pages, loud gamification, no control over sensory load. For a lot of people that's not neutral — it's actively harder to use. focusd starts from the opposite direction: the interface adapts to the person, not the other way round.

## What it does

- **Sensory Dial** — a single control (top right, and full-size in Settings) that live-adjusts type size, spacing, motion, and color intensity across the whole app, from *Calm* to *Vivid*. Nothing is hidden in a submenu.
- **Flexible focus sessions** — pick a rough length, watch a calm progress ring, and end early with no guilt framing. Ending a 25-minute session at minute 8 still logs as a win.
- **Chunked flashcards** — one idea per card, spaced-repetition-style confidence buttons (Again / Good / Easy), and a manual or automatic "read aloud" option for anyone who processes better by ear.
- **Profile-based starting points** — ADHD, Autistic, Dyslexic, or General presets set sensible defaults (e.g. read-aloud on, motion off, dyslexia-friendly type) — all fully overridable afterwards.
- **Non-punitive progress** — streaks and card mastery, but a quiet day never resets or shames.

## Why these subjects

The sample decks (Biology, Maths, Economics) are real A-level content — this reuses and generalises groundwork from an earlier project of mine (Northstar), rebuilt from scratch here as a fresh app aimed at neurodivergent learners specifically, rather than one exam board.

## Stack

React 19 + Vite, React Router, plain CSS with a token-based design system (no CSS framework — every color/spacing/motion value is a variable so the Sensory Dial can move all of them at once). No backend: progress is stored in `localStorage`.

Palette is a nature theme — jade green and light blue on a cream ground, matching the leaf mark in `public/favicon.svg` — still run through the Sensory Dial's saturation control so anyone in Calm mode gets it desaturated automatically.

Fonts: [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) (designed for readability by the Braille Institute) and [Lexend](https://www.lexend.com/) (designed to improve reading proficiency) — chosen deliberately, not defaults.

## Running it

```bash
npm install
npm run dev
```

## Structure

```
src/
  context/       AccessibilityContext (sensory dial + toggles), StudyContext (progress)
  components/    Shell (nav), SensoryDial (signature control)
  pages/         Onboarding, Dashboard, FocusSession, Flashcards, Settings, Progress
  data/          Sample decks
```
