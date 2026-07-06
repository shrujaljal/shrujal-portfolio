# Component Map

## Main App Files

### `src/app/page.tsx`

Assembles the one-page site in order:

- RibbonBackground
- Navbar
- Hero
- About
- Recognition
- Impact
- Projects
- Leadership
- HowIWork
- Contact
- Footer

Standalone `ValueSnapshot` and `Gallery` components were removed. Their content now lives inside About and Leadership respectively.

### `src/app/layout.tsx`

Defines metadata and global layout shell.

### `src/app/globals.css`

Global CSS, Tailwind imports, background treatment, reusable component classes, typography defaults, paper texture, nav scrollbar hiding, and reduced-motion behavior.

Global section spacing is intentionally tighter than the previous version.

## Navigation

### `src/components/Navbar.tsx`

Controls the fixed floating pill navigation, active section indicator, desktop links, mobile menu, and Request Resume CTA.

Navigation items come from `navItems` in `src/content/siteContent.ts`.

Current nav links:

- About
- Recognition
- Impact
- Projects
- Leadership
- Skills
- Contact

## Hero

### `src/components/Hero.tsx`

Controls first-screen positioning copy, role chips, proof signals, CTAs, and hero image.

Uses:

- `hero` and `site` from `src/content/siteContent.ts`
- `heroPhoto` from `src/content/imageManifest.ts`

Hero CTAs:

- Request Resume
- LinkedIn
- Email Me

## About / Positioning

### `src/components/About.tsx`

Controls About copy, positioning notes, recruiter snapshot cards, and About image.

Uses:

- `about` and `valueSnapshot` from `src/content/siteContent.ts`
- `aboutPhoto` from `src/content/imageManifest.ts`

## Recognition

### `src/components/Recognition.tsx`

Controls proof/recognition cards and compact proof image grid.

Uses:

- `recognition` from `src/content/siteContent.ts`
- `recognitionBGS`
- `recognitionCertificate`
- `recognitionStudentAward`

## Impact

### `src/components/Impact.tsx`

Controls the operations/reporting/cross-functional impact section.

Uses:

- `impact` from `src/content/siteContent.ts`
- `projectHyundaiVisit` image

The Hyundai visit image is displayed with an uncropped/contained treatment to preserve the Hyundai Rotem banner.

## Projects

### `src/components/Projects.tsx`

Controls compact project story cards and the project lens panel.

Uses `projects` from `src/content/siteContent.ts`.

Current image slots by project order:

- `projectHyundaiPresentation`
- `recognitionCaseCompetition`
- `projectPodcast`

The project lens is a compact strip above the cards so Projects does not leave a blank side column.

## Leadership + Gallery

### `src/components/Leadership.tsx`

Controls leadership cards, leadership proof images, and the compact gallery mosaic.

Uses:

- `leadership` and `gallery` from `src/content/siteContent.ts`
- `leadershipModeration`
- `leadershipProfessionalLead`
- `galleryGraduation`
- `galleryCityNight`
- `galleryWomenInBusiness`
- `galleryCommunity`
- `galleryUcrBanner`

The mosaic includes hover captions and should stay compact. `galleryUcrBanner` uses a contained image treatment so the full UCR banner photo is visible.

## How I Work / Skills

### `src/components/HowIWork.tsx`

Controls process steps and skills chips.

Uses `howIWork` from `src/content/siteContent.ts`.

## Contact

### `src/components/Contact.tsx`

Controls final contact CTA.

Uses `contact` and `site` from `src/content/siteContent.ts`.

Current CTAs:

- Request Resume
- LinkedIn
- Email Me

## Footer

### `src/components/Footer.tsx`

Controls bottom footer line.

Uses `site` from `src/content/siteContent.ts`.

## Ribbon / Background Motif

### `src/components/RibbonBackground.tsx`

Controls subtle flowing ribbon motif using Framer Motion and SVG paths. Keep this low-opacity and editorial.

## Shared Components

### `src/components/FadeIn.tsx`

Reusable Framer Motion reveal wrapper. Respects reduced motion.

### `src/components/SectionHeader.tsx`

Reusable section eyebrow/title/body header. Heading scale was reduced for the shorter page.

### `src/components/WebsiteImage.tsx`

Reusable image component that reads slots from `imageManifest.ts`, lazy-loads below-the-fold images, eager-loads the hero when requested, and falls back safely if an image is missing.

## Centralized Config

### `src/content/siteContent.ts`

Centralized copy, navigation, roles, cards, contact, links, and section content.

### `src/content/imageManifest.ts`

Centralized image slot mapping, image paths, alt text, roles, and crop hints.
