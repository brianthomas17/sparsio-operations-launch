

## Fix Logo Vertical Centering in Hero

The issue: the flex row uses `items-center` which centers based on the full row height, but as the viewport shrinks the text block gets taller (wrapping) while the logo stays the same size, causing misalignment toward the bottom.

### Change in `src/components/sections/Hero.tsx`

**Line 9**: The parent flex row already has `items-center`, which should vertically center both columns. The problem is the right column `motion.div` (line 65-72) needs explicit height matching. I'll ensure the right column stretches to the full height of the left column and centers the image within it by using `self-stretch` combined with `items-center justify-center` on the right column. This way the logo always centers relative to the full height of the text block regardless of viewport width.

- Change the right column class from `hidden md:flex w-[40%] items-center justify-center` to `hidden md:flex w-[40%] items-center justify-center self-stretch`

This ensures the right column stretches to match the left column's height, and `items-center justify-center` centers the logo within that stretched space.

