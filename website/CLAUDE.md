# Alaa Media website — notes for Claude

Static one-page portfolio for Alaa Media (Alaa Business LLC, USA): premium video editing, motion design, 3D and maps.
No build step. Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Files
- `privacy.html`, `terms.html`: legal pages (linked in every footer). Not lawyer-reviewed.
- `index.html`: all page content. Sections in order: hero, client strip, statement, Who I work with, Recent productions, Capabilities, Maps, Results, Services (bento), Process, Pricing (tabs + add-ons), Testimonials, About, FAQ, Contact.
- `styles.css`: design tokens in `:root` at the top (espresso black + champagne gold). Fonts: Poppins (body/headings) + Playfair Display italic (gold accent words in `<em>`).
- `main.js`: `WORK` list (videos; YouTube ID or `url` + `thumb`; `feature: true` = full width), `RETENTION` data for the chart, tabs, lightbox, scroll reveals. GSAP + ScrollTrigger (cdnjs) and Lenis (unpkg) for smooth scrolling.
- `assets/`: images (webp), `logo.svg`, `map-dots.svg`, `thumbs/<videoId>.webp`.

## Owner's preferences (keep these)
- Luxury, clean, dark gold look. No cream/light sections. Divider line (`section--line`) between every section.
- Target clients: businesses (VSLs, ads, brand films, founders), plus documentary channels. Not focused on faceless YouTubers.
- One revision round is included free; extra rounds are $60 each (add-on).
- All prices say "Starting at". Big/complex tiers are "Custom quote".
- Don't mention payment methods (no PayPal/Wise/Payoneer). Just "Invoices are issued by Alaa Business LLC (USA)".
- IntoTheBlue is presented as client work, never as the owner's channel.
- Work cards use the real YouTube thumbnails. Selected Work has 5 tabs: Featured work (owner's top picks, in his order), Ads & VSLs, Long-form, Shorts & Reels, Animations. In any `WORK` list, `vertical: true` items go in a vertical row under the main grid; `loop: 'assets/loops/x.mp4'` (or a .gif) makes any card play a silent looping animation instead of a thumbnail driven by `WORK` in main.js; `{ placeholder: true }` entries are gold "your project next" slots to replace with new samples. Vertical covers are 9:16 crops in assets/thumbs.
- Service visuals are drawn in CSS/SVG in the gold style; don't use screenshots there.
- Copy: plain, confident, professional; never beginner-sounding labels.

## Current prices
- VSLs & Ads: Ad Pack from $450 (3 ads, $150/ad) · VSL from $650, up to 12 min (advanced motion graphics quoted on scope) · Launch Package custom (2 VSLs, 6 ads, Shorts cutdowns, thumbnails)
- YouTube & Documentaries: Essential from $650 · Signature from $1,200 · Cinematic custom
- Shorts: 6 for $480 · 12 for $900 (most popular) · 24 for $1,600 (best value, under $67/Short)
- Motion & 3D: Map Sequence from $120 (1) · Graphics Pack from $260 (10, most popular) · 3D Scene from $200
- Monthly: Growth from $1,800 (2 Signature-level videos/VSLs + 3 Shorts ≈ $780/video + $80/Short, saves 32%) · Studio from $2,800 (3 Signature-level videos/VSLs + 12 Shorts ≈ $673/video + $65/Short, saves 38%) · Custom
- Add-ons: thumbnail $60 · rush +30% · extra revision round $60 (first one free) · project files $150 · script notes $80

## To do
- Real LinkedIn profile URL (currently a placeholder linking to linkedin.com).
- New portrait photos for About (`assets/alaa-portrait.webp`, 4:5).
- Cal.com booking link for "Book a call" buttons.
- The 4 Animations loops in `assets/loops/` are stand-ins made from stills (slow push-in/out). Replace each with a real 4–8s clip exported from Premiere (960×540 or 1280×720, H.264, silent, under ~1 MB) or a GIF.
- The Product Launch Trailer thumbnail is still a map frame; a designed one (like `thumbs/vsl-flying-sales.webp`) would look better.
- Replace the placeholder slots in `WORK.shorts` and `WORK.ads` with new samples.
- Deploy: Cloudflare Pages, output directory = this folder; custom domain via Cloudflare Registrar.

## Mobile
- Under 800px the nav collapses into a gold menu button (`.nav__toggle`). Under 640px pricing cards become a horizontal swipe row, hero buttons go full width, and section spacing tightens. Check new sections at 375px wide.

## Pricing logic
- Monthly plans are priced against Signature-level work ($1,200/video). Keep the words "Signature-level" on the monthly cards, or Growth would cost more than buying basic VSLs separately.
