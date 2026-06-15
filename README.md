# Considered — MVP

An elegant impulse-spending pause app that helps you track purchases you almost made and visualises avoided spend as progress toward a goal.

What this is
- A local-only Next.js (App Router) + TypeScript + Tailwind web app.
- Tracks "avoided spend" in localStorage and shows progress toward a goal.

What this is not
- Not a bank; it does not move money or access bank accounts.
- Not a budgeting ledger — it's a behavioural tracker for pauses.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Open http://localhost:3000

Core MVP features
- Landing page with clear positioning and CTA.
- Onboarding flow to set a goal.
- Dashboard with goal progress and avoided spend.
- Pause flow: enter a considered purchase, get a deterministic reflection, and mark as avoided/bought/waiting.
- Waiting list for items you saved for later with actions.
- Local persistence via localStorage and demo data loader.

Development notes
- Data models: see `lib/types.ts` for `UserProfile` and `Purchase`.
- Local persistence helpers: `lib/storage.ts`.
- Reflection logic (deterministic): `lib/reflection.ts`.

Future features (nice-to-have)
- Optional AI API for richer reflections.
- Browser extension / share sheet to capture products from shopping sites.
- Alternative suggestions (charity, secondhand, or local small business recommendations).
- Social accountability circles and weekly reflections.
- Private account syncing and optional bank integration (clearly separated).

Design
- Soft luxury editorial aesthetic: warm ivory, oat, taupe, sage, dusty rose, espresso.
- Serif headings + clean sans body fonts.

Notes
- All data is stored locally in the browser. No network connections required.
