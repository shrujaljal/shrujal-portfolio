# Current Site State

Last documented state: July 6, 2026.

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
2. About / Positioning
3. Recognition
4. Impact
5. Projects
6. Leadership + Gallery
7. How I Work / Skills
8. Contact

The old standalone `ValueSnapshot` and `Gallery` sections were removed. Recruiter snapshot cards now live inside About. Gallery is now a compact mosaic inside Leadership.

## Current Hero

- Hero image uses `Professional_Summit_Picture`.
- Hero headline:

```txt
Curiosity into clarity.
Ideas into impact.
```

- Hero label:

```txt
MBA Graduate | Strategy & Operations, Business Analytics, Marketing Operations
```

- Hero copy explains that Shrujal turns ambiguous business problems into clear recommendations, useful reporting, coordinated execution, and communication people can act on.
- Hero CTAs are live:
  - Request Resume
  - LinkedIn
  - Email Me

## Current Links

- LinkedIn: `https://www.linkedin.com/in/shrujalagarwal`
- Email: `https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Portfolio%20Inquiry`
- Resume request: `https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Resume%20Request`

There is no dependency on a fixed resume PDF because Shrujal tailors resumes by role.

## Current Image Strategy

The rendered page uses 16 images total. Hero is eager-loaded; all other images are lazy-loaded.

Images currently rendered:

- Hero: `Professional_Summit_Picture`
- About: `ucr_Solo`
- Recognition: `BGs_Ceremony_Picture`, `BGS_Award_Collection`, `Professional_lead_Certificates`
- Impact: `Hyundai_Rotem_Visit`
- Projects: `Hyundai_Rotem_Class_presentation`, `Case_Study_Competition`, `Podcast_Shoot_Picture`
- Leadership: `Moderator_Summit_Picture`, `Professional_Lead_team`
- Gallery mosaic: `Graduation_Radiant-Picture`, `Solo_goal_Digger`, `WIB_Group_Picture`, `Student_association_group`, `UCR_Banner_Solo`

Do not use images from `Images\not priority`. Current source avoids `Google_Site_Visit`, `Professional_picture`, and `BGS_Certificates`.

## Current Verification

Latest production build passed with:

```bash
npm.cmd run build
```

Local preview runs at:

```txt
http://127.0.0.1:3000
```

Use this PowerShell-safe dev command:

```powershell
npm.cmd run dev -- -H 127.0.0.1
```
