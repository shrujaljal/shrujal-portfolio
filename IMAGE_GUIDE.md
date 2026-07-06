# Image Guide

This site uses a curated image manifest instead of hard-coded image paths in layout components.

Manifest file:

```txt
src/content/imageManifest.ts
```

Default website image folder:

```txt
public/images/custom/
```

## Important Note

The image slots below are mapped from the visible filename context you provided. I could not find the actual raster image files in `D:\website\Images`, `D:\website\public`, or the original workspace image folder while implementing this pass, so the site includes graceful placeholder fallbacks until those files are placed in `public/images/custom/`.

The manifest uses one editable `src` path per slot. The default assumes `.jpg`, but you can change only the extension if your real file is `.png`, `.jpeg`, or `.webp`. You do not need to rename the base filename.

The hero never uses a fake AI-generated face. If `Professional_picture` is not available yet, the site shows an editorial "Real Photo Slot" placeholder so the final image can be swapped honestly and cleanly.

## Selected Default Images

The site uses 16 image placements by default so it feels curated and editorial, not like a photo dump.

| Website slot | Filename mapped | Where it appears | Purpose | Why selected |
| --- | --- | --- | --- | --- |
| `heroPhoto` | `Professional_Summit_Picture` | Hero | Credibility | Warm, recruiter-facing portrait with strong professional presence. |
| `aboutPhoto` | `Google_Site_Visit` | Who I Am | Warmth | Adds broader professional curiosity and external business exposure. |
| `recognitionBGS` | `BGs_Ceremony_Picture` | Recognition | Credibility | Strong Beta Gamma Sigma proof with ceremony context. |
| `recognitionCertificate` | `BGS_Certificates` | Recognition | Credibility | Supports the recognition story with tangible proof. |
| `recognitionCaseCompetition` | `Case_Study_Competition` | Recognition | Project proof | Connects recognition to business thinking and presentation. |
| `recognitionStudentAward` | `Professional_lead_Certificates` | Recognition | Leadership | Shows structured leadership recognition without inventing claims. |
| `projectHyundaiVisit` | `Hyundai_Rotem_Visit` | Impact / Projects | Project proof | Grounds the operations consulting story in a real business setting. |
| `projectHyundaiPresentation` | `Hyundai_Rotem_Class_presentation` | Project backup | Project proof | Shows analysis becoming communication and recommendation. |
| `recognitionCaseCompetition` | `Case_Study_Competition` | Projects | Project proof | Matches the Coca-Cola Icecek case story. |
| `projectPodcast` | `Podcast_Shoot_Picture` | Projects | Leadership | Makes the professional development initiative feel built and real. |
| `leadershipModeration` | `Moderator_Summit_Picture` | Leadership | Leadership | Shows presence, facilitation, and comfort guiding a room. |
| `leadershipProfessionalLead` | `Professional_Lead_team` | Leadership | Leadership | Shows collaboration and student-facing initiative work. |
| `leadershipStudentAssociation` | `Student_association_group` | Leadership | Warmth | Adds community and people-oriented energy. |
| `galleryGraduation` | `Graduation_Radiant-Picture` | Life Beyond Work | Warmth | Gives the gallery a celebratory, personal, radiant moment. |
| `galleryCityNight` | `Professional_picture` | Life Beyond Work | Personality | Moves the city image into a future-momentum/gallery context. |
| `galleryWomenInBusiness` | `WIB_Group_Picture` | Life Beyond Work | Warmth | Shows community, ambition, and people orientation. |

## Optional Backup Slots

These slots are defined in the manifest but are not part of the default 16-image page:

| Slot | Filename mapped | Suggested use |
| --- | --- | --- |
| `leadershipSummit` | `Professional_Summit_Picture` | Backup for leadership or contact if the moderation image is too busy. |
| `galleryCommunity` | `Student_association_group` | Backup gallery/community image. |
| `contactImage` | `UCR_banner_Solo` | Optional contact section image if you want a stronger UCR visual. |

Additional filename backups to consider manually:

```txt
BGS_Award_Collection
BGS_Ceremony_Picture
Thomsonreuters
UCR_banner_Solo
```

Use these if one of the selected defaults is visually too busy, too cropped, or less recruiter-facing than expected.

## Treatment Rules Used

The website wraps images in consistent editorial frames with:

- Fixed aspect ratios
- Soft ivory/charcoal framing
- Warm muted overlays
- Gentle hover scale on selected cards
- Crops designed for credibility, leadership, project proof, personality, or warmth

This helps louder backgrounds such as UCR blue, Hyundai green, yellow event tables, or bright ceremony colors stay cohesive with the ivory/beige editorial palette.

## How To Swap Images Later

1. Add your file to:

```txt
public/images/custom/
```

2. Keep the original filename if you like, for example:

```txt
Professional_picture.jpeg
```

3. Open:

```txt
src/content/imageManifest.ts
```

4. Change only the `fileName` value for the slot:

```ts
heroPhoto: {
  fileName: "Professional_picture",
  alt: "Professional editorial portrait of Shrujal Agarwal",
  ...
}
```

Keep `fileName` as the context label, and update `src` if the real extension differs.

5. Restart or refresh the dev server.
