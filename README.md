# Pavan Singh — Developer Portfolio

A production-ready, animated developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. Every section is populated from real resume content — no lorem ipsum, no placeholder screenshots except the testimonials block, which is explicitly marked and easy to swap.

---

## Features

- **Dark, glassmorphic UI** in the Apple / Linear / Vercel register — blue-purple gradient primaries, cyan accent, glass cards, subtle noise texture.
- **Three.js particle hero background** — a lightweight point-cloud with a few connective "route" arcs, lazy-loaded off the main bundle.
- **Signature "Journey Path"** — a scroll-linked vertical waypoint rail (desktop) / progress bar (mobile) that doubles as section navigation, styled around the travel/journey narrative of the AI trip-planner project.
- **Framer Motion throughout** — scroll reveals, staggered entrances, animated skill bars, animated stat counters, hover micro-interactions, a project case-study modal, and a certificate lightbox.
- **Typing effect hero** that cycles through role titles.
- **Custom cursor** (desktop, pointer-fine only, respects `prefers-reduced-motion`).
- **Fully responsive**, down to small mobile.
- **Accessible**: visible focus rings, semantic landmarks, `alt` text, reduced-motion support.
- **SEO-ready**: meta tags, Open Graph/Twitter cards, JSON-LD `Person` schema, `robots.txt`, `sitemap.xml`, SVG favicon.
- **Zero hardcoded content** — every section reads from `src/data/profile.ts`.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Animation | Framer Motion |
| 3D | Three.js (hero background only, lazy-loaded) |
| Icons | react-icons (Feather set) |
| Routing | react-router-dom (installed, single-page by default — see note below) |

> **Note on routing:** the site ships as a fast single-page scroll experience, which is the stronger choice for a portfolio (one shareable URL, instant section jumps via the Journey Path). `react-router-dom` is installed and ready if you want to split out `/projects/:slug` case-study pages later.

## Folder Structure

```
src/
  assets/
    images/          → profile photo
    certs/            → certificate images
  components/
    sections/         → one file per page section (Hero, About, Skills, ...)
    ui/                → shared primitives (Reveal, SectionHeading, Counter, JourneyPath, ...)
  data/
    profile.ts         → ALL site content lives here
  hooks/
    useTypewriter.ts
  App.tsx
  main.tsx
  index.css            → design tokens (@theme) + global styles
public/
  Pavan_Singh_Resume.pdf
  robots.txt
  sitemap.xml
  favicon.svg
```

## Installation

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build     # type-checks with tsc, then builds to dist/
npm run preview   # serve the production build locally
```

The build has been verified to complete with **zero TypeScript errors** and **zero lint errors** (`npm run lint`, powered by oxlint).

## Environment Variables

None required. The contact form opens the visitor's email client via a `mailto:` link — no backend or API keys needed. If you later want a real backend-submitted form, add a `VITE_FORM_ENDPOINT` variable and wire it into `src/components/sections/Contact.tsx`.

## Customization

Everything content-related lives in **`src/data/profile.ts`**:

- `profile` — name, roles, contact info, summary, resume path
- `stats` — the animated counters in About
- `skills` — grouped skill bars
- `experience` — timeline entries
- `education`
- `projects` — powers both the project cards and the case-study modal
- `aiExpertise`
- `certifications` — title/org/date/image filename/verify link
- `testimonials` — **placeholder copy, clearly marked** — replace with real quotes when you have them

To swap the profile photo or certificate images, replace the files in `src/assets/images` / `src/assets/certs` (keep the same filenames referenced in `profile.ts`, or update the filenames there).

To change the color palette or fonts, edit the `@theme` block at the top of `src/index.css`.

## Performance

- Three.js is dynamically imported (`React.lazy`) so it never blocks the initial render.
- Images are served at their natural resolution; for a production deploy, consider running certificate/profile images through an image CDN (Vercel/Cloudinary) for automatic AVIF/WebP + responsive sizing.
- Fonts are loaded via `@import` with `display=swap` to avoid layout-blocking font loads.
- Scroll animations use `whileInView` with `once: true` so they don't re-trigger cost on every scroll.

## Deployment

### Vercel (recommended)

```bash
npm install -g vercel
vercel
```

Or via the dashboard: import the GitHub repo, framework preset **Vite**, build command `npm run build`, output directory `dist`.

### GitHub Pages / any static host

```bash
npm run build
```

Upload the contents of `dist/` to your host. If deploying to a sub-path (e.g. a GitHub Pages project site), set `base` in `vite.config.ts` accordingly.

## Future Improvements

- Wire the contact form to a real backend (Formspree, Resend, or a small serverless function) instead of `mailto:`.
- Add `/projects/:slug` deep-linkable case-study routes using the already-installed `react-router-dom`.
- Add a light theme toggle (dark-first was the brief; tokens are centralized in `index.css` so this is mostly a `prefers-color-scheme` + token-swap exercise).
- Swap placeholder testimonials for real ones as they're collected.
- Add real GitHub/live-demo links to `projects[].links` in `profile.ts` (currently `#` placeholders since repos weren't provided).

---

Built for Pavan Singh — Full-Stack MERN Developer & AI/ML Engineer, Hyderabad.
