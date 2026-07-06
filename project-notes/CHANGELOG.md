# Changelog

## 2026-07-06 - Shorter Recruiter-Focused Portfolio Refinement

### Changed

- Shortened the page by removing standalone `ValueSnapshot` and `Gallery` sections.
- Folded recruiter snapshot cards into About / Positioning.
- Folded Gallery into Leadership as a compact editorial mosaic with hover captions.
- Reduced global section spacing, section heading scale, image/card density, and large repeated visual blocks.
- Reframed the positioning around operations-led business clarity:
  - Strategy & Operations
  - Business Operations
  - Marketing Operations
  - Business Analytics
  - Project / Program Coordination
- Clarified marketing as marketing operations, campaign insights, growth coordination, and content/program execution.
- Clarified analytics as reporting, decision support, dashboards, and structured problem solving.
- Updated Hero copy to emphasize clear recommendations, useful reporting, coordinated execution, and communication people can act on.
- Reworked Projects into compact horizontal story cards.
- Reworked Impact into a tighter proof grid.
- Reworked How I Work into a compact process + skills section.
- Polished navigation into a floating ivory/glass pill with active section indicator and refined hover behavior.

### Links Fixed

- LinkedIn now points to:

```txt
https://www.linkedin.com/in/shrujalagarwal/
```

- Email now points to:

```txt
mailto:shrujalag.gms@gmail.com
```

- Resume CTA now uses:

```txt
mailto:shrujalag.gms@gmail.com?subject=Resume%20Request
```

- Removed dependency on a fixed resume PDF because Shrujal tailors resumes by role.

### Images Updated

Current rendered image set uses 15 images total:

- Hero: `Professional_Summit_Picture`
- About: `UCR_Banner_Solo`
- Recognition: `BGs_Ceremony_Picture`, `BGS_Award_Collection`, `Professional_lead_Certificates`
- Impact: `Hyundai_Rotem_Visit`
- Projects: `Hyundai_Rotem_Class_presentation`, `Case_Study_Competition`, `Podcast_Shoot_Picture`
- Leadership: `Moderator_Summit_Picture`, `Professional_Lead_team`
- Gallery mosaic: `Graduation_Radiant-Picture`, `Solo_goal_Digger`, `WIB_Group_Picture`, `Student_association_group`

Image rules preserved:

- `Hyundai_Rotem_Visit` appears only in Impact and keeps the Hyundai Rotem banner visible.
- `Hyundai_Rotem_Class_presentation` appears in Projects.
- Professional Development uses `Podcast_Shoot_Picture` / `Professional_Lead_team` context only.
- BGS images are split between main recognition and supporting proof.
- No images from `Images/not priority/` are used or referenced in source.

### Removed

- `src/components/ValueSnapshot.tsx`
- `src/components/Gallery.tsx`
- Stale optional image slots that repeated key images.
- Broken fixed resume download path.

### Verification

- Production build passes:

```bash
npm.cmd run build
```

- All 15 rendered image paths returned `200`.
- Rendered page uses 15 images total.
- Hero image is eager-loaded; non-hero images are lazy-loaded.
- LinkedIn, Email Me, and Request Resume CTAs have valid hrefs.
- Local preview:

```txt
http://127.0.0.1:3000
```

Use PowerShell-safe dev command:

```powershell
npm.cmd run dev -- -H 127.0.0.1
```

### Future Codex Preservation Notes

Do not redesign from scratch. Preserve the Radiant Editorial Portfolio direction, warm ivory/beige editorial design, premium serif typography, soft flowing ribbon motif, and recruiter-readable one-page structure.

Do not re-expand the site into a long school portfolio. Keep the shorter structure:

1. Hero
2. About / Positioning
3. Recognition
4. Impact
5. Projects
6. Leadership + Gallery
7. How I Work / Skills
8. Contact

Future edits should keep operations as the anchor and keep marketing/analytics framed as business execution and decision support, not separate career directions.

## 2026-07-06 - UCR Image, CTA, And Spacing Fixes

Purpose: address the user's latest visual/link feedback without redesigning the site.

### Changed

- Converted `Images/ucr_Solo.HEIC` into `public/images/custom/ucr_Solo.jpg`.
- Optimized `ucr_Solo.jpg` for web use.
- Swapped About / Positioning image from `UCR_Banner_Solo` to `ucr_Solo`.
- Added `UCR_Banner_Solo` into the gallery as a small contained tile so the full image remains visible.
- Reworked Projects to remove the blank right-side column by turning the project lens into a compact strip above the cards.
- Reworked Leadership to reduce blank left-side space by making images and cards share the layout more tightly.
- Updated Request Resume and Email Me CTAs to open Gmail compose URLs in a new tab instead of relying on `mailto:`.
- Updated LinkedIn URL to the exact profile path without a trailing slash.

### Files / Components Changed

- `src/content/siteContent.ts`: updated LinkedIn, Request Resume, and Email Me URLs.
- `src/content/imageManifest.ts`: changed About image to `ucr_Solo` and added `galleryUcrBanner`.
- `src/components/Hero.tsx`: updated CTA links to open in new tabs.
- `src/components/Navbar.tsx`: updated Request Resume CTA behavior.
- `src/components/Contact.tsx`: updated Request Resume and Email Me CTA behavior.
- `src/components/Projects.tsx`: changed the project lens from a side panel to a compact top strip.
- `src/components/Leadership.tsx`: tightened leadership layout and added the contained UCR banner gallery tile.
- `public/images/custom/ucr_Solo.jpg`: new optimized web image generated from `Images/ucr_Solo.HEIC`.
- `project-notes/*`: updated memory files to preserve this state.

### Why

- The About section needed the new `ucr_Solo` image.
- The UCR banner image needed to remain visible in full, so it moved into the gallery as a contained small tile.
- Projects and Leadership had noticeable blank space at desktop widths.
- `mailto:` links were unreliable in the browser preview, so Gmail compose URLs are now used for Request Resume and Email Me.

### Current Link Behavior

- Request Resume opens Gmail compose to `shrujalag.gms@gmail.com` with subject `Resume Request`.
- Email Me opens Gmail compose to `shrujalag.gms@gmail.com` with subject `Portfolio Inquiry`.
- LinkedIn points to `https://www.linkedin.com/in/shrujalagarwal`.

Note: LinkedIn may still show a login/auth page in browsers where the viewer is not signed into LinkedIn; the website link itself points to the profile path.

### Future Codex Preservation Notes

- Preserve the Radiant Editorial Portfolio direction and the throughline: `Curiosity into clarity. Ideas into impact.`
- Do not re-expand Projects into a layout with a large blank side column.
- Keep `ucr_Solo` in About / Positioning.
- Keep `UCR_Banner_Solo` in the gallery as a contained tile unless the user asks otherwise.
- Keep Request Resume and Email Me as Gmail compose links unless a better contact flow is intentionally added.
