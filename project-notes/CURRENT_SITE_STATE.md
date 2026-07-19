# Current Site State

Last documented state: July 19, 2026.

## Current Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Local working project path: `D:\website`

## Current Direction

The site is a tighter Radiant Editorial Portfolio for Shrujal Agarwal. It preserves the warm ivory/beige editorial design, premium serif typography, soft ribbon motif, and recruiter-friendly flow.

The positioning is now more defined:

```txt
MBA graduate who brings clarity to business problems through strategy, operations, analytics, marketing execution, and cross-functional communication.
```

Operations is the strongest anchor. Marketing is framed as marketing operations, campaign insights, growth coordination, and content/program execution. Analytics is framed as reporting, decision support, dashboards, and structured problem solving.

Primary role fit:

- Strategy & Operations
- Business Operations
- Marketing Operations
- Business Analytics
- Project / Program Coordination

## Current Structure

The page was shortened by removing standalone repeated sections and combining related material.

Current rendered order:

1. Hero
2. About
3. Recognition
4. Impact
5. Skills
6. Projects
7. Leadership
8. Contact

The old standalone `ValueSnapshot`, `Gallery`, and `How I Work / Process` sections are not rendered. Recruiter snapshot cards live inside About. The gallery mosaic has now been removed entirely so the page stays recruiter-focused and avoids mobile image-crop issues.

## Current Hero

- Hero image uses `Professional_Summit_Picture`.
- Hero image overlay shows only `Shrujal Agarwal`; the extra role line has been removed for a cleaner first impression.
- Hero headline:

```txt
Curiosity into clarity.
Ideas into impact.
```

- Hero label:

```txt
MBA Graduate | Strategy & Operations, Business Analytics
```

- Hero copy explains that Shrujal turns ambiguous business problems into clear recommendations, useful reporting, coordinated execution, and communication people can act on.
- Hero proof row intentionally excludes `Beta Gamma Sigma` to keep the opening section cleaner; Beta Gamma Sigma remains in Recognition.
- Hero intentionally avoids repeated role chips and metric cards. The primary hero CTA now points to Projects; Request Resume remains available in the nav/contact areas.
- Hero CTAs are live:
  - View Projects
  - LinkedIn
  - Email Me

## Current Links

- LinkedIn: `https://www.linkedin.com/in/shrujalagarwal`
- Email: `https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Portfolio%20Inquiry`
- Resume request: `https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Resume%20Request`

There is no dependency on a fixed resume PDF because Shrujal tailors resumes by role.

## Current Image Strategy

The rendered page uses 6 images total. Hero is eager-loaded; all other images are lazy-loaded.

Images currently rendered:

- Hero: `Professional_Summit_Picture`
- Recognition: `BGS_Award_Collection`, `Professional_lead_Certificates`
- Impact: no image currently rendered
- Projects: `Hyundai_Rotem_Class_presentation`, `Case_Study_Competition`, `Podcast_Shoot_Picture`
- Leadership: no images currently rendered

The gallery mosaic is intentionally removed from the rendered page.

Do not use images from `Images\not priority`. Current source avoids `Google_Site_Visit`, `Professional_picture`, and `BGS_Certificates`.

Current layout refinements:

- About eyebrow is simply `About`, and the About heading uses a smaller section-specific scale.
- Section headings render before section content, with a wider heading container so titles can stretch horizontally.
- Recognition uses cards on the left and two supporting images stacked one below the other on the right.
- The supporting BGS image label is `Beta Gamma Sigma Honor Society`.
- Impact is now a cards-only section; the Hyundai Rotem image is no longer rendered there.
- Project cards render image, title, business question, approach, and tags; extra detail bullets are preserved in content but not currently rendered.
- Leadership is currently cards-only, with no image row rendered.
- Leadership descriptions were made more specific and recruiter-readable.

## Current Verification

Latest production build passed with:

```bash
npm.cmd run build
```

Local preview runs at:

```txt
http://127.0.0.1:3002
```

Use this PowerShell-safe dev command:

```powershell
npm.cmd run dev -- -H 127.0.0.1
```

If port `3000` is occupied, Next may choose a fallback port such as `3002`.
