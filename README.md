# Cinematic Portfolio

A dark, minimal, editorial portfolio for a video editor / videographer. Built with
Next.js 14 (App Router), TypeScript, Tailwind, and Framer Motion.

## Design system

- **Colors** — `#050505` ink, `#F5F3EF` paper, `#8C8B87` fog, `#E9312F` "tally red" accent
  (a nod to a camera's recording light — used sparingly, only for the one signature moment
  on screen at a time).
- **Type** — Fraunces (display), Inter (body), IBM Plex Mono (labels/timecodes).
- **Signature device** — timecodes (`00:00:12:04`) replace generic numbered steps
  everywhere in the UI (hero HUD, process section, project cards on hover).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content — no code required

Everything you'll want to change day-to-day lives in `/content`:

- **`content/site.config.ts`** — your name, tagline, bio, stats, process steps,
  services list, and contact links.
- **`content/projects.ts`** — every project + case study. Add a project by adding
  one object to the array; the URL (`/work/your-slug`) and case study page are
  generated automatically. No other file needs to change.
- **`content/testimonials.ts`** — testimonials and client logos.

### Adding a new project

```ts
{
  slug: "my-new-project",       // becomes /work/my-new-project
  title: "My New Project",
  client: "Client Name",
  category: "Commercial",       // must match one of the Category types
  software: ["Premiere Pro"],
  thumbnail: "/images/projects/my-thumb.jpg",
  heroVideo: "/videos/projects/my-hero.mp4",
  finalVideo: "/videos/projects/my-final.mp4",
  description: "...",
  overview: "...",
  challenge: "...",
  solution: "...",
  process: "...",
  deliverables: ["..."],
  duration: "00:01:20"
}
```

Drop the matching thumbnail/video files into `/public/images/projects` and
`/public/videos/projects`.

### Going further with a real CMS

This setup is intentionally file-based so you can edit content by hand with zero
build tooling. If you outgrow that (e.g. a non-technical collaborator needs to add
projects from a browser), the next step is swapping `content/projects.ts` and
`content/testimonials.ts` for a headless CMS like **Sanity**, **Contentful**, or
**Payload** — the page components already read from typed arrays, so only the data
source changes, not the UI.

## Assets you need to supply

Placeholders are referenced but not included:

- `/public/videos/hero-loop.mp4` — hero background loop
- `/public/videos/projects/*.mp4` — per-project hero + final videos
- `/public/images/projects/*.jpg` — project thumbnails + before/after stills
- `/public/images/portrait.jpg` — About page portrait
- `/public/images/testimonials/*.jpg` — client avatars
- `/public/images/logos/*.svg` — client logo marquee
- `/public/resume.pdf` — downloadable resume

## Performance notes

- Videos use `preload` defaults from the browser; for production, compress hero
  loops to under ~3MB (H.264, no audio track) and keep them under 15s.
- All images should go through `next/image` (already wired) for automatic
  optimization and lazy loading.
- Fonts load via `next/font/google`, which self-hosts and avoids layout shift.
- Reduced-motion is respected globally via `globals.css`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, featured work, stats, process, testimonial preview |
| `/work` | Full project archive with category filters + search |
| `/work/[slug]` | Case study: overview, challenge, solution, process, deliverables, before/after, final video |
| `/about` | Bio, portrait, software |
| `/services` | Service list |
| `/testimonials` | Full testimonial wall + client logo marquee |
| `/contact` | Email, WhatsApp, Instagram, LinkedIn, resume download |
# realportfo
