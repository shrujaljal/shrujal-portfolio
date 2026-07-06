Put original photo files here if you want to keep a raw local image library.

To use a photo on the live website:
1. Copy the image into `public/images/custom/`.
2. Open `src/content/imageManifest.ts`.
3. Change the relevant `src` value to `/images/custom/your-file-name.jpg`.

This lets your original filenames stay as-is while the website uses clean image slots.
