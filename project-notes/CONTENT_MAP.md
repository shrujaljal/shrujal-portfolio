# Content Map

Most section copy lives in:

```txt
src/content/siteContent.ts
```

The main page assembly lives in:

```txt
src/app/page.tsx
```

## Site-Wide Positioning

Current positioning:

```txt
Shrujal is an MBA graduate who brings clarity to business problems through strategy, operations, analytics, marketing execution, and cross-functional communication.
```

Operations should remain the strongest anchor. Marketing should read as marketing operations, campaign insights, growth coordination, and content/program execution. Analytics should read as business reporting, dashboards, decision support, and structured problem solving.

Primary role fit:

- Strategy & Operations
- Business Operations
- Marketing Operations
- Business Analytics
- Project / Program Coordination

## Hero

Component: `src/components/Hero.tsx`

Content source: `hero` and `site` in `src/content/siteContent.ts`

Purpose: Establish Shrujal's value in the first 30 seconds.

Current heading:

```txt
Curiosity into clarity.
Ideas into impact.
```

Current label:

```txt
MBA Graduate | Strategy & Operations, Business Analytics
```

Current body:

```txt
I help teams turn ambiguous business problems into clear recommendations, useful reporting, coordinated execution, and communication people can act on.
```

Current CTAs:

- View Projects
- LinkedIn
- Email Me

Current hero proof row:

- UCR MBA
- Goldman Sachs
- Thomson Reuters
- Hyundai Rotem

`Beta Gamma Sigma` is intentionally not shown in the hero proof row; it remains in Recognition.

## About

Component: `src/components/About.tsx`

Content source: `about` and `valueSnapshot` in `src/content/siteContent.ts`

Purpose: Combine human positioning and recruiter snapshot in one tighter section.

Current eyebrow:

```txt
About
```

Current heading:

```txt
An MBA-trained operator connecting strategy, analysis, communication, and execution.
```

Includes:

- Two concise About paragraphs
- Three positioning notes
- Three recruiter snapshot cards from `valueSnapshot`
- No standalone About image
- Smaller About heading scale than the default SectionHeader size

## Recognition

Component: `src/components/Recognition.tsx`

Content source: `recognition` in `src/content/siteContent.ts`

Purpose: Provide compact proof of standards, academic recognition, case work, and professional development leadership.

Current heading:

```txt
Proof of the standard I hold myself to.
```

Cards:

- UCR MBA
- Beta Gamma Sigma
- Case Competition Recognition
- Professional Development Lead Award

Images:

- `BGS_Award_Collection`
- `Professional_lead_Certificates`

Recognition image layout:

- Cards on the left
- Two supporting images stacked one below the other on the right
- Supporting BGS image label: `Beta Gamma Sigma Honor Society`

## Impact

Component: `src/components/Impact.tsx`

Content source: `impact` in `src/content/siteContent.ts`

Purpose: Show Shrujal's value across operations, reporting, and cross-functional rooms without becoming a resume list.

Current heading:

```txt
Clarity across operations, reporting, and cross-functional rooms.
```

Impact cards:

- Financial services rigor / Goldman Sachs
- Information and workflow clarity / Thomson Reuters
- Operations consulting thinking / Hyundai Rotem
- Cross-functional execution / Beyond Key
- Startup growth coordination / BB Wellness
- Rooms that need momentum / Presentations, moderation, student leadership

Image: no image currently rendered. The Hyundai Rotem image was removed from Impact so the section is now a full-width card grid under the heading.

## Skills

Component: `src/components/Skills.tsx`

Content source: `skillsSection` in `src/content/siteContent.ts`

Purpose: Present a recruiter-readable skills toolkit early in the page, after Impact and before Projects.

Categories:

- Business Analysis
- Analytics & Reporting
- Project Delivery
- Enterprise Tools
- AI & Automation
- Business Strategy

## Projects

Component: `src/components/Projects.tsx`

Content source: `projects` in `src/content/siteContent.ts`

Purpose: Present selected projects as business problems and practical approaches in compact horizontal cards.

Current heading:

```txt
Selected projects
```

Project cards:

- Hyundai Rotem Operations Consulting
- Coca-Cola Icecek Case Competition
- Professional Development Systems

Images by order:

- `Hyundai_Rotem_Class_presentation`
- `Case_Study_Competition`
- `Podcast_Shoot_Picture`

The project lens is a compact strip above the project cards so the section does not leave a blank side column. Project cards currently render image, title, business question, approach, and skill chips. Extra project detail bullets remain in `siteContent.ts` for future use but are not currently rendered. Avoid adding unsupported numerical claims unless the user provides the source.

## Leadership

Component: `src/components/Leadership.tsx`

Content source: `leadership` in `src/content/siteContent.ts`

Purpose: Present leadership proof in a tighter, more professional section.

Leadership images: no images currently rendered.

Leadership descriptions are more specific and recruiter-readable, with emphasis on TEDx team leadership, professional development leadership, moderation/presentation, event flow, audience engagement, and student association coordination.

The gallery mosaic was removed entirely. These images remain available in the manifest but are not rendered:

- `Graduation_Radiant-Picture`
- `Solo_goal_Digger`
- `WIB_Group_Picture`
- `Student_association_group`
- `UCR_Banner_Solo`

## How I Work / Process

Component exists at `src/components/HowIWork.tsx`, and content still exists in `howIWork` inside `src/content/siteContent.ts`, but this section is currently not rendered.

## Contact

Component: `src/components/Contact.tsx`

Content source: `contact` and `site` in `src/content/siteContent.ts`

Purpose: Invite recruiter/hiring-manager conversations and restate role focus.

Current CTAs:

- Request Resume
- LinkedIn
- Email Me
