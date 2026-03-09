

## Make Logo Bigger on Tablet/Mobile

Currently the mobile/tablet logo is set to `w-[160px]`. I'll increase it to be more prominent.

### Change in `src/components/sections/Hero.tsx`

**Line 17**: Change the logo image class from `w-[160px]` to `w-[220px] md:w-[260px]` — this makes it 220px on mobile and 260px on tablet.

