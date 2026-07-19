# Image Guide

Image mappings are centralized in:

```txt
src/content/imageManifest.ts
```

Website-ready images live in:

```txt
public/images/custom/
```

Original source images live in:

```txt
Images/
```

Do not use, import, optimize, reference, or display any image from:

```txt
Images/not priority/
```

Current source intentionally avoids:

- `Google_Site_Visit`
- `Professional_picture`
- `BGS_Certificates`

## Current Rendered Image Set

The page currently renders 6 images total.

Hero is eager-loaded. All other `WebsiteImage` instances lazy-load.

## Hero

Current hero image:

```txt
Professional_Summit_Picture
```

Reason: Professional, recruiter-facing, and focused on Shrujal's presence.

Do not use group images or lower-priority photos for the hero.

## About

The About section currently does not render a standalone image.

## Recognition

Current Recognition images:

- `BGS_Award_Collection`
- `Professional_lead_Certificates`

Use the Recognition images in separate proof contexts:

- `BGS_Award_Collection` as the `Beta Gamma Sigma Honor Society` supporting image
- `Professional_lead_Certificates` as professional development leadership proof

Recognition currently renders two supporting images stacked one below the other. `BGs_Ceremony_Picture` remains available in the manifest but is not currently rendered.

## Impact

Impact currently does not render an image. `Hyundai_Rotem_Visit` remains available in the manifest but is not currently rendered.

## Projects

Current project images by order:

- Hyundai Rotem Operations Consulting: `Hyundai_Rotem_Class_presentation`
- Coca-Cola Icecek Case Competition: `Case_Study_Competition`
- Professional Development Systems: `Podcast_Shoot_Picture`

Important:

- Do not use `Hyundai_Rotem_Visit` again in Projects.
- Do not use unrelated Google/generic images for Professional Development.
- Use `Podcast_Shoot_Picture` or `Professional_Lead_team` only for the professional development/podcast initiative.

## Leadership

Leadership currently does not render images.

These image slots remain available in the manifest if intentionally reintroduced later:

- `Moderator_Summit_Picture`
- `Professional_Lead_team`

The gallery mosaic has been removed from the rendered page. These image slots remain available if intentionally reintroduced later, but they should not appear by default:

- `Graduation_Radiant-Picture`
- `Solo_goal_Digger`
- `WIB_Group_Picture`
- `Student_association_group`
- `UCR_Banner_Solo`

Do not turn the site into a long social-media gallery.

## How To Swap An Image Safely

1. Add or convert the image into:

```txt
public/images/custom/
```

2. Open:

```txt
src/content/imageManifest.ts
```

3. Update only the relevant slot's `fileName`, `src`, `alt`, `role`, and `cropHint`.

4. Confirm the image is not from `Images/not priority/`.

5. Run:

```bash
npm.cmd run build
```

6. Preview locally and confirm the image is not stretched, overly cropped, repeated unnecessarily, or contextually confusing.
