# Editing Guide

Use this guide for safe future edits.

## Run Locally

PowerShell-safe command:

```powershell
npm.cmd run dev -- -H 127.0.0.1
```

Local preview:

```txt
http://127.0.0.1:3002
```

If `3000` is occupied, Next may choose a fallback port such as `3002`.

Avoid running `next build` while a dev server is actively serving the site. If you do, restart the dev server afterward so the `.next` cache and CSS assets are clean.

## Build

```bash
npm.cmd run build
```

Run this after meaningful content, image, or layout changes.

## Preserve Current Positioning

The site should read as:

```txt
MBA graduate with cross-functional experience across operations, analytics, marketing execution, reporting, leadership, and business communication, able to turn ambiguous problems into clear recommendations and coordinated action.
```

Keep operations as the anchor.

Use these role buckets:

- Strategy & Operations
- Business Operations
- Marketing Operations
- Business Analytics
- Project / Program Coordination

Marketing should stay framed as marketing operations, campaign insights, growth coordination, and content/program execution.

Analytics should stay framed as business reporting, decision support, dashboards, and structured problem solving.

## Change Section Copy

Most copy lives in:

```txt
src/content/siteContent.ts
```

Edit the relevant object:

- `site`
- `navItems`
- `hero`
- `valueSnapshot`
- `about`
- `recognition`
- `impact`
- `projects`
- `leadership`
- `howIWork`
- `skillsSection`
- `contact`

Avoid adding copy directly inside component files unless it is truly layout-only text.

## Update Links

Current live links are centralized in `site`:

```txt
linkedinUrl: https://www.linkedin.com/in/shrujalagarwal
requestResumeUrl: https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Resume%20Request
emailUrl: https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Portfolio%20Inquiry
email: shrujalag.gms@gmail.com
```

Do not restore a fixed resume download CTA unless a real PDF exists and the link is verified. Gmail compose URLs are used because they are more reliable in browser previews than bare `mailto:` links.

## Update Image Mappings

Image mappings live in:

```txt
src/content/imageManifest.ts
```

Update:

- `fileName`
- `src`
- `alt`
- `role`
- `cropHint`

Never use or reference images from:

```txt
Images/not priority/
```

Current page uses 6 rendered images. Keep future image additions selective and recruiter-relevant.

## Current Section/Image Rules

- Hero: `Professional_Summit_Picture`
- About: no standalone image currently rendered
- Recognition: `BGS_Award_Collection`, `Professional_lead_Certificates`
- Impact: no image currently rendered
- Projects: `Hyundai_Rotem_Class_presentation`, `Case_Study_Competition`, `Podcast_Shoot_Picture`
- Leadership: no image currently rendered
- Gallery mosaic: removed from the rendered page

Do not repeat the same key image across sections.

## Add Or Remove A Project

1. Open:

```txt
src/content/siteContent.ts
```

2. Edit `projects.items`.

3. If adding/removing project images, also update `projectImageSlots` in:

```txt
src/components/Projects.tsx
```

4. Make sure each project image matches the project story.

## Gallery

The gallery mosaic has been removed entirely from the rendered page. Do not reintroduce it unless the user specifically asks.

## Adjust Spacing

Global section spacing is in:

```txt
src/app/globals.css
```

Look for:

```css
.section-shell
```

The current version is intentionally shorter. Avoid reintroducing oversized image stacks, very large card padding, or repeated blank space.

## Modify Ribbon Motif

Open:

```txt
src/components/RibbonBackground.tsx
```

Keep the ribbon:

- Subtle
- Low opacity
- Muted terracotta/sage/gold
- Editorial
- Non-distracting

## Deploy Publicly

Recommended deployment: Vercel.

1. Push `D:\website` to GitHub.
2. Import the repo into Vercel.
3. Use default Next.js settings.
4. Deploy.
5. Add the live URL to resume and LinkedIn.

## Before Ending Any Future Edit Session

1. Run:

```bash
npm.cmd run build
```

2. Restart the local dev server if it was running during the build.
3. Check the local preview.
4. Confirm all CTAs and images work.
5. Update `project-notes/CHANGELOG.md` with what changed.
