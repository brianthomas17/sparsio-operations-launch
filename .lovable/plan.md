

## Remove the About Section

### What changes

1. **Delete `src/components/sections/About.tsx`** -- Remove the entire file.

2. **Update `src/pages/Index.tsx`** -- Remove the About import and its usage from the page layout.

3. **Update `src/components/Navbar.tsx`** -- Remove the "About" link from the navigation since the section no longer exists.

4. **Clean up `src/assets/about-photo.jpg`** -- Delete the photo asset since it's no longer used.

This keeps the site feeling like a company rather than a solo operation. No replacement section is added -- just a clean removal.

