

## Fix Hero Headline Line Wrapping

**Problem**: On desktop, "Spreadsheets Aren't a System." wraps before "System." — so "System." drops to a second line. You want the entire first sentence on one line on desktop/web viewports.

**Root cause**: The heading container is constrained to `max-w-3xl`, which is too narrow for the full sentence at the current `lg:text-7xl` font size.

**Solution**: Widen the container from `max-w-3xl` to `max-w-4xl` in `Hero.tsx`. This gives the headline enough room to keep "Spreadsheets Aren't a System." on a single line at desktop sizes, while mobile will still wrap naturally.

**File**: `src/components/sections/Hero.tsx` (line 8)
- Change `max-w-3xl` to `max-w-4xl`

If that alone isn't enough, we can also slightly reduce the large breakpoint font from `lg:text-7xl` to `lg:text-[4rem]` as a secondary adjustment.

