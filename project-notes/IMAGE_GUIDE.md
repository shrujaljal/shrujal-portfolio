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

The page currently renders 16 images total.

Hero is eager-loaded. All other `WebsiteImage` instances lazy-load.

## Hero

Current hero image:

```txt
Professional_Summit_Picture
```

Reason: Professional, recruiter-facing, and focused on Shrujal's presence.

Do not use group images or lower-priority photos for the hero.

## About / Positioning

Current image:

```txt
ucr_Solo
```

Purpose: Adds personal MBA/UCR context in the About / Positioning section.

## Recognition

Current Recognition images:

- `BGs_Ceremony_Picture`
- `BGS_Award_Collection`
- `Professional_lead_Certificates`

Use the two BGS images in separate proof contexts:

- `BGs_Ceremony_Picture` as the main recognition image
- `BGS_Award_Collection` as supporting BGS detail

Do not repeat the same BGS image twice.

## Impact

Current Impact image:

```txt
Hyundai_Rotem_Visit
```

Use this image only once. Keep the Hyundai Rotem name/banner visible; avoid crops that remove the banner.

## Projects

Current project images by order:

- Hyundai Rotem Operations Consulting: `Hyundai_Rotem_Class_presentation`
- Coca-Cola Icecek Case Competition: `Case_Study_Competition`
- Professional Development Systems: `Podcast_Shoot_Picture`

Important:

- Do not use `Hyundai_Rotem_Visit` again in Projects.
- Do not use unrelated Google/generic images for Professional Development.
- Use `Podcast_Shoot_Picture` or `Professional_Lead_team` only for the professional development/podcast initiative.

## Leadership + Gallery

Current Leadership images:

- `Moderator_Summit_Picture`
- `Professional_Lead_team`

Current Gallery mosaic images:

- `Graduation_Radiant-Picture`
- `Solo_goal_Digger`
- `WIB_Group_Picture`
- `Student_association_group`
- `UCR_Banner_Solo`

The gallery should remain compact, editorial, and interactive on hover. `UCR_Banner_Solo` should stay small and use `object-contain` so the complete image is visible. Do not turn it into a long social-media gallery.

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
