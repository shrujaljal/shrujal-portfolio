# Future Codex Start Prompt

Paste this into a future Codex chat:

```txt
I am continuing work on an existing personal portfolio website located at D:\website. Do not redesign from scratch. First read all files inside D:\website\project-notes, especially WEBSITE_BRAND_BRIEF.md, CURRENT_SITE_STATE.md, CONTENT_MAP.md, IMAGE_GUIDE.md, COMPONENT_MAP.md, EDITING_GUIDE.md, CHANGELOG.md, and FUTURE_CODEX_START_PROMPT.md. Then inspect the codebase and summarize your understanding before making any edits.

Preserve the Radiant Editorial Portfolio direction and the throughline 'Curiosity into clarity. Ideas into impact.'

Preserve the latest tighter structure: Hero, About / Positioning, Recognition, Impact, Projects, Leadership + Gallery, How I Work / Skills, Contact.

Keep operations as the positioning anchor. Marketing should read as marketing operations / campaign insights / growth coordination / content or program execution. Analytics should read as reporting / decision support / dashboards / structured problem solving.

Current image/link rules to preserve unless I ask otherwise:
- About uses ucr_Solo.
- UCR_Banner_Solo appears in the gallery as a small contained tile so the full image is visible.
- Do not use Images/not priority.
- Request Resume and Email Me use Gmail compose links.
- LinkedIn points to https://www.linkedin.com/in/shrujalagarwal.

Wait for my specific edit instructions.
```

## Note For Future Codex

Content and image mappings are already centralized:

- Copy/content: `src/content/siteContent.ts`
- Images: `src/content/imageManifest.ts`

Do not make risky refactors, re-expand the page, or redesign from scratch unless the user specifically requests it.
