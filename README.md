# Shrujal Agarwal Radiant Editorial Portfolio

A one-page, recruiter-facing personal brand website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

Core idea: **Curiosity into clarity. Ideas into impact.**

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```bash
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Edit Content

Most website copy lives in:

```bash
src/content/siteContent.ts
```

Update this file to change section text, project cards, recognition items, contact links, resume path, LinkedIn URL, and navigation labels.

## Replace Images

The site uses an image manifest so you do not need to rename every original image.

1. Put website-ready images in:

```bash
public/images/custom/
```

2. Open:

```bash
src/content/imageManifest.ts
```

3. Replace a slot path, for example:

```ts
heroPhoto: {
  fileName: "my-existing-photo-name",
  src: "/images/custom/my-existing-photo-name.jpg",
  alt: "Professional portrait of Shrujal Agarwal",
}
```

Keep `fileName` as the editable label. Update `src` to match the real extension if your file is `.png`, `.jpeg`, or `.webp`.

Your raw local image library can stay in:

```bash
Images/
```

Files in `public/` are served by the website. Files in `Images/` are just for local organization.

## Replace Resume PDF

Add your resume PDF here:

```bash
public/resume/Shrujal-Agarwal-Resume.pdf
```

If you use a different filename, update `resumeUrl` in:

```bash
src/content/siteContent.ts
```

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com).
3. Create a new project from the GitHub repository.
4. Keep the default Next.js settings.
5. Click **Deploy**.

After deployment, add the public Vercel URL to your resume, LinkedIn, and email signature.
