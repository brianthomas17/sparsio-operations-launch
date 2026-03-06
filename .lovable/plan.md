

## Fix Gap Between Headline and Subtext

The issue: the subtext paragraph and CTA button sit **outside** the two-column flex row. The logo column is tall, stretching the flex row height. The subtext then renders below the entire row, creating a large visual gap from the headline.

### Fix in `src/components/sections/Hero.tsx`

Move the subtext (`<motion.p>`) and CTA button (`<motion.div>`) **inside** the left column `<div>` (the 60% width one), so they sit directly beneath the headline text rather than after the full-height flex row.

