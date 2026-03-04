

## Update Hero Copy and Fix Duplicates

### Changes to `src/components/sections/Hero.tsx`

1. **Headline**: Replace current two-line headline with:
   - Line 1: "Your business has outgrown your systems."
   - Line 2: "Enterprise software was built for someone else."
   - Line 3: "We build yours."

2. **Subheadline**: Replace the broken/duplicated paragraph with:
   - "Not another SaaS subscription. A custom operational system, built with modern AI, engineered specifically for how your business runs — and where it's going."

3. **Fix Footer duplicate**: The last diff introduced a duplicated copyright line in `src/components/Footer.tsx` (`© {year} © {year} Sparsio Systems. All rights reserved.. All rights reserved.`) — will fix to single clean line.

