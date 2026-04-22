

## Google Search Icon (Favicon) + SEO Improvements

### Part 1: Why your logo isn't showing in Google search

Google decides which favicon to display based on a few rules. Your favicon is already correctly set in `index.html` (`/favicon.png`), but Google may be ignoring it because:

1. **Stale `favicon.ico`** — `public/favicon.ico` still exists from the old Lovable default. Browsers (and Google) request `/favicon.ico` automatically and that old file is overriding your new PNG.
2. **Not enough crawl signals** — Google needs to re-crawl your site after favicon changes. This can take days to weeks.
3. **Square format preferred** — Google wants a square favicon at least 48x48 (multiple of 48 ideally: 96, 144, 192).

### Part 2: SEO improvements

Your site has the basics (title, description, robots.txt) but is missing key signals Google uses for ranking and rich results.

### Changes

1. **Delete `public/favicon.ico`** — removes the stale Lovable favicon that's overriding your PNG in Google's results.

2. **`index.html`** — strengthen favicon + SEO signals:
   - Add explicit `<link rel="icon" sizes="any">` and `<link rel="apple-touch-icon">` tags so Google sees a clear, sized icon
   - Add `<link rel="canonical" href="https://sparsiosystems.com/">` (tells Google the official URL)
   - Add keyword-rich `<meta name="keywords">` (small business operations, workflow automation, custom software, etc.)
   - Add `<meta name="robots" content="index, follow">`
   - Add `og:url` and `og:site_name` tags
   - Add **JSON-LD structured data** (`Organization` schema) — this is what tells Google "this site represents the company Sparsio Systems," and is the strongest signal for getting your logo to appear in search results and the knowledge panel.

3. **`public/robots.txt`** — add a `Sitemap:` reference pointing to `/sitemap.xml`.

4. **`public/sitemap.xml`** (new file) — single-URL sitemap for `https://sparsiosystems.com/` so Google can discover and prioritize your homepage.

### What you need to do after deploying

These are things only you can do — code can't trigger them:

1. **Submit to Google Search Console** at https://search.google.com/search-console
   - Verify ownership of `sparsiosystems.com`
   - Submit your sitemap (`https://sparsiosystems.com/sitemap.xml`)
   - Use "Request Indexing" on your homepage to speed up re-crawl
2. **Wait** — favicon updates in Google search can take 1–4 weeks even after a successful re-crawl.
3. **Build backlinks** — get your site linked from your LinkedIn, business directories, partner sites. This is the single biggest factor in ranking.
4. **Create a Google Business Profile** if Sparsio Systems is a registered business — this dramatically improves brand search results.

### Technical details

- JSON-LD `Organization` schema will include: name, URL, logo URL, and description — the standard Google requires for logo in search results (https://developers.google.com/search/docs/appearance/structured-data/logo).
- Canonical tag prevents duplicate-content penalties between `www` and root domains.
- Sitemap + robots.txt sitemap reference is the standard discovery pattern.

