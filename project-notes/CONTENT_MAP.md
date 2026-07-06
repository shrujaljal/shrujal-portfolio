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
MBA Graduate | Strategy & Operations, Business Analytics, Marketing Operations
```

Current body:

```txt
I help teams turn ambiguous business problems into clear recommendations, useful reporting, coordinated execution, and communication people can act on.
```

Current CTAs:

- Request Resume
- LinkedIn
- Email Me

## About / Positioning

Component: `src/components/About.tsx`

Content source: `about` and `valueSnapshot` in `src/content/siteContent.ts`

Purpose: Combine human positioning and recruiter snapshot in one tighter section.

Current heading:

```txt
An MBA-trained operator who brings calm structure to business problems.
```

Includes:

- Two concise About paragraphs
- Three positioning notes
- Three recruiter snapshot cards from `valueSnapshot`

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
- Professional Resources Lead

Images:

- `BGs_Ceremony_Picture`
- `BGS_Award_Collection`
- `Professional_lead_Certificates`

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

Image:

- `Hyundai_Rotem_Visit`

## Projects

Component: `src/components/Projects.tsx`

Content source: `projects` in `src/content/siteContent.ts`

Purpose: Present selected projects as business problems and practical approaches in compact horizontal cards.

Current heading:

```txt
Selected projects, framed as business problems.
```

Project cards:

- Hyundai Rotem Operations Consulting
- Coca-Cola Icecek Case Competition
- Professional Development Systems

Images by order:

- `Hyundai_Rotem_Class_presentation`
- `Case_Study_Competition`
- `Podcast_Shoot_Picture`

The project lens is now a compact strip above the project cards so the section does not leave a blank side column.

## Leadership + Gallery

Component: `src/components/Leadership.tsx`

Content source: `leadership` and `gallery` in `src/content/siteContent.ts`

Purpose: Combine leadership proof with a compact personality/community mosaic.

Leadership images:

- `Moderator_Summit_Picture`
- `Professional_Lead_team`

Gallery mosaic images:

- `Graduation_Radiant-Picture`
- `Solo_goal_Digger`
- `WIB_Group_Picture`
- `Student_association_group`
- `UCR_Banner_Solo`

The gallery is intentionally small, interactive on hover, and not Instagram-like. `UCR_Banner_Solo` is a contained tile so the complete UCR image stays visible.

## How I Work / Skills

Component: `src/components/HowIWork.tsx`

Content source: `howIWork` in `src/content/siteContent.ts`

Purpose: Explain Shrujal's operating system for ambiguity and show role-relevant skills.

Includes:

- Six concise process steps
- Skills chips for operations coordination, reporting, dashboards, campaign insights, stakeholder communication, and program execution

## Contact

Component: `src/components/Contact.tsx`

Content source: `contact` and `site` in `src/content/siteContent.ts`

Purpose: Invite recruiter/hiring-manager conversations and restate role focus.

Current CTAs:

- Request Resume
- LinkedIn
- Email Me
