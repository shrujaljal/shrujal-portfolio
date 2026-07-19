# Future Codex Start Prompt

Paste this into a future Codex chat:

```txt
I am continuing work on an existing personal portfolio website located at D:\website. Do not redesign from scratch. First read all files inside D:\website\project-notes, especially WEBSITE_BRAND_BRIEF.md, CURRENT_SITE_STATE.md, CONTENT_MAP.md, IMAGE_GUIDE.md, COMPONENT_MAP.md, EDITING_GUIDE.md, CHANGELOG.md, and FUTURE_CODEX_START_PROMPT.md. Then inspect the codebase and summarize your understanding before making any edits.

Preserve the Radiant Editorial Portfolio direction and the throughline:
Curiosity into clarity. Ideas into impact.

Current local structure:
Hero
About
Recognition
Impact
Skills
Projects
Leadership
Contact

Important current state:
- The How I Work / Process section is not rendered.
- The old standalone gallery mosaic is not rendered.
- The About section no longer uses a standalone image.
- The About eyebrow is simply About, and the About heading uses a reduced size.
- Skills appears before Projects.
- Hero has no metric cards and no Request Resume button; hero CTAs are View Projects, LinkedIn, and Email Me.
- Hero top line is `MBA Graduate | Strategy & Operations, Business Analytics`.
- Hero proof row excludes Beta Gamma Sigma; Beta Gamma Sigma appears in Recognition.
- Hero image overlay shows only Shrujal Agarwal.
- Request Resume remains available in the navbar/contact areas.
- Section headings render before section content, with a wider heading container so titles can stretch horizontally.
- Recognition uses two proof images stacked one below the other: Beta Gamma Sigma Honor Society and Professional Development Lead Award. BGS Award Ceremony is not currently rendered.
- Impact is a cards-only section; the Hyundai Rotem image is not currently rendered.
- Project cards use small contained images, no arrow icons, no unsupported metric claims, and currently render image, title, business question, approach, and tags.
- Leadership is currently cards-only with a balanced 2x2 grid and specific, polished descriptions.

Keep operations as the positioning anchor. Marketing should read as marketing operations / campaign insights / growth coordination / content or program execution. Analytics should read as reporting / decision support / dashboards / structured problem solving.

Current image/link rules to preserve unless I ask otherwise:
- Hero uses Professional_Summit_Picture.
- Recognition uses BGS_Award_Collection and Professional_lead_Certificates.
- Impact currently uses no image.
- Projects use Hyundai_Rotem_Class_presentation, Case_Study_Competition, and Podcast_Shoot_Picture.
- Leadership currently uses no image.
- Do not use Images/not priority.
- Request Resume and Email Me use Gmail compose links.
- LinkedIn points to https://www.linkedin.com/in/shrujalagarwal.

Local preview:
http://127.0.0.1:3002/

PowerShell-safe commands:
npm.cmd run dev -- -H 127.0.0.1
npm.cmd run build

If port 3000 is occupied, Next may serve the local preview on a fallback port such as 3002.

Wait for my specific edit instructions.
```

## Note For Future Codex

Content and image mappings are centralized:

- Copy/content: `src/content/siteContent.ts`
- Images: `src/content/imageManifest.ts`
- Page assembly: `src/app/page.tsx`

Do not make risky refactors, re-expand the page, or redesign from scratch unless the user specifically requests it.
