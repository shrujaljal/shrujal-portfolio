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
- Skills
- Projects
- Leadership
- Contact
- Footer

Standalone `ValueSnapshot` and `Gallery` components are not rendered. Recruiter snapshot content lives inside About. Gallery content has been removed from the rendered page.

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
- Skills
- Projects
- Leadership
- Contact

## Hero

### `src/components/Hero.tsx`

Controls first-screen positioning copy, proof signals, CTAs, and hero image.

Uses:

- `hero` and `site` from `src/content/siteContent.ts`
- `heroPhoto` from `src/content/imageManifest.ts`

Hero CTAs:

- View Projects
- LinkedIn
- Email Me

Hero avoids repeated role chips and metric cards. Its primary CTA points to Projects; Request Resume remains in the navbar and contact section. The hero positioning line is `MBA Graduate | Strategy & Operations, Business Analytics`, and the proof row excludes `Beta Gamma Sigma`. The hero image overlay shows only `Shrujal Agarwal`.

## About

### `src/components/About.tsx`

Controls About copy, positioning notes, and recruiter snapshot cards.

Uses `about` and `valueSnapshot` from `src/content/siteContent.ts`.

The About eyebrow is simply `About`. This component passes a smaller `titleClassName` into `SectionHeader` so the heading feels aligned with the reduced site scale.

## Recognition

### `src/components/Recognition.tsx`

Controls proof/recognition cards and compact proof image grid.

Uses:

- `recognition` from `src/content/siteContent.ts`
- `recognitionCertificate`
- `recognitionStudentAward`

The section header renders above all Recognition content. The content area uses cards on the left and two stacked supporting images on the right. The BGS supporting label is `Beta Gamma Sigma Honor Society`; the BGS ceremony image is not currently rendered.

## Impact

### `src/components/Impact.tsx`

Controls the operations/reporting/cross-functional impact section.

Uses:

- `impact` from `src/content/siteContent.ts`

The section header renders above all Impact content. The Hyundai Rotem image is not currently rendered; Impact is a full-width responsive card grid.

## Projects

### `src/components/Projects.tsx`

Controls compact project story cards and the project lens panel.

Uses `projects` from `src/content/siteContent.ts`.

Current image slots by project order:

- `projectHyundaiPresentation`
- `recognitionCaseCompetition`
- `projectPodcast`

The project lens is a compact strip above the cards so Projects does not leave a blank side column. Project images are small and contained. Cards currently render image, title, business question, approach, and skill chips; extra detail bullets remain in content but are not rendered.

## Leadership

### `src/components/Leadership.tsx`

Controls leadership cards and leadership proof images.

Uses `leadership` from `src/content/siteContent.ts`.

The gallery mosaic has been removed entirely.

Leadership is currently cards-only; no image row is rendered.

## How I Work / Process

### `src/components/HowIWork.tsx`

Controls process steps, but is currently not rendered in `src/app/page.tsx`.

Uses `howIWork` from `src/content/siteContent.ts`.

## Skills

### `src/components/Skills.tsx`

Controls six skill category cards and skill chips.

Uses `skillsSection` from `src/content/siteContent.ts`.

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

Reusable section eyebrow/title/body header. Heading scale was reduced for the shorter page. The header now uses a wider max width so section headings can stretch horizontally. Supports an optional `titleClassName` override, currently used by About for a smaller heading.

### `src/components/WebsiteImage.tsx`

Reusable image component that reads slots from `imageManifest.ts`, lazy-loads below-the-fold images, eager-loads the hero when requested, and falls back safely if an image is missing.

## Centralized Config

### `src/content/siteContent.ts`

Centralized copy, navigation, roles, cards, contact, links, and section content.

### `src/content/imageManifest.ts`

Centralized image slot mapping, image paths, alt text, roles, and crop hints.
