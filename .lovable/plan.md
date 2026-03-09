

## Update Logo and Favicon

Replace the current logo image and browser tab icon with the new circuit tree PNG.

### Changes

1. **Copy uploaded image** to `src/assets/sparsio-logo.png` (replaces existing file) and `public/favicon.png`

2. **`index.html`** — favicon already points to `/favicon.png`, no change needed

3. **`src/components/sections/Hero.tsx`** — already imports from `@/assets/sparsio-logo.png`, no change needed

Both the hero logo and the browser tab favicon will update automatically since we're replacing the files in-place.

