# Abhayjeet Sharma — Developer Portfolio

A cinematic, Matrix-inspired portfolio built with Next.js 14 (App Router),
TypeScript, and CSS Modules. Five photographic scenes act as the visual
backdrop for each page, with real HTML/CSS/React UI layered on top.

## Getting started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build and run the production version:

```bash
npm run build
npm start
```

Lint:

```bash
npm run lint
```

## Project structure

```
public/images/            the five source photos (do not regenerate/redesign)
  home-tv-room.png          → home page background
  about-surveillance.png    → about page background
  projects-cctv.png         → projects page background
  skills-tvs.png            → skills page background
  contact-terminal.png      → contact page background

src/app/
  layout.tsx               root layout (fonts, CRT atmosphere, skip link)
  globals.css               design tokens, CRT scanline/grain, base styles
  page.tsx / home.module.css                    home route ("/")
  about/page.tsx / about.module.css             about route
  projects/page.tsx, ProjectsView.tsx,
    projects.module.css                          projects route
  skills/page.tsx / skills.module.css           skills route
  contact/page.tsx / contact.module.css         contact route

src/components/
  Scene.tsx                 aspect-ratio-locked background image wrapper
                             (keeps hotspots aligned with the photo at any
                             viewport width — never crops)
  NavigationContext.tsx      client-side navigation + Matrix transition state
  MatrixTransition.tsx       the digital-rain transition overlay (canvas)
  NavLink.tsx                drop-in <a> replacement that triggers the
                              transition before changing routes
  BackButton.tsx             the persistent top-left back arrow
  TvHotspot.tsx               clickable/keyboard TV screen on the home page
  SkillTicker.tsx             the news-ticker skill marquee (CSS-only,
                                pauses on hover/focus, static under
                                prefers-reduced-motion)

src/data/                  <- EDIT YOUR CONTENT HERE
  hotspots.ts                home page TV positions + destinations
  about.ts                    About page copy (name, bio, education…)
  projects.ts                  Projects list (summary, tech, links…)
  skills.ts                     Skill tickers, one entry per screen
  contact.ts                    Contact links + the CRT screen's position
```

## Where to change things

- **Your bio, education, interests, resume link** → `src/data/about.ts`
- **Your projects** (add/remove/edit; GitHub and Live Demo buttons only
  appear when you fill in a URL) → `src/data/projects.ts`
- **Your skills, grouped per TV screen** → `src/data/skills.ts`
- **Your email / GitHub / LinkedIn / resume links** → `src/data/contact.ts`
  (an empty string shows that icon in a clearly disabled state instead of
  linking to "#")
- **Home page hotspot positions** (which TV screen links where, and its
  exact box on the photo) → `src/data/hotspots.ts`. Coordinates are
  percentages of the image, so they stay aligned at any screen size. If
  you ever swap in a re-cropped image, nudge the `left/top/width/height`
  numbers to match — a quick way to find them is to open the image in any
  editor that shows pixel coordinates and divide by the image's full width
  (1672) or height (941), then multiply by 100.
- **Skill-screen and contact-screen positions** work the same way, in
  `skills.ts` and `contact.ts`.

## Notes

- Desktop layouts are tuned for ~1366×768 through 2560×1440. Below 720px
  wide, every page swaps to a simplified, image-free mobile layout (a card
  grid on the home page, plain readable panels elsewhere) — no tiny image
  hotspots on phones.
- The Matrix-rain transition plays on every internal navigation (TV
  clicks, the back arrow, in-page links), is capped at ~700ms, can't stack
  from repeated clicks, and is replaced with a short plain fade when the
  visitor has `prefers-reduced-motion` enabled.
- No backend, database, auth, or contact form — this is a fully static
  site with no environment variables to configure.
- `npm run build` and `npm run lint` both pass cleanly as of this writing.
