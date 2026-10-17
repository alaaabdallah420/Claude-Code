# Alaa Media website — notes for Claude

Static one-page portfolio for Alaa Media (Alaa Business LLC, USA): premium video editing, motion design, 3D and maps.
No build step. Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Files
- `index.html`: all page content. Sections in order: hero, client strip, statement, Who I work with, Recent productions, Capabilities, Maps, Results, Services (bento), Process, Pricing (tabs + add-ons), Testimonials, About, FAQ, Contact.
- `styles.css`: design tokens in `:root` at the top (espresso black + champagne gold). Fonts: Poppins (body/headings) + Playfair Display italic (gold accent words in `<em>`).
- `main.js`: `WORK` list (videos; YouTube ID or `url` + `thumb`; `feature: true` = full width), `RETENTION` data for the chart, tabs, lightbox, scroll reveals. GSAP + ScrollTrigger (cdnjs) and Lenis (unpkg) for smooth scrolling.
- `assets/`: images (webp), `logo.svg`, `map-dots.svg`, `thumbs/<videoId>.webp`.

## Owner's preferences (keep these)
- Luxury, clean, dark gold look. No cream/light sections. Divider line (`section--line`) between every section.
- Target clients: businesses (VSLs, ads, brand films, founders), plus documentary channels. Not focused on faceless YouTubers.
- No free revisions anywhere. Revisions are a paid add-on ($90/round).
- All prices say "Starting at". Big/complex tiers are "Custom quote".
- Don't mention payment methods (no PayPal/Wise/Payoneer). Just "Invoices are issued by Alaa Business LLC (USA)".
- IntoTheBlue is presented as client work, never as the owner's channel.
- Work cards use the real YouTube thumbnails.
- Service visuals are drawn in CSS/SVG in the gold style; don't use screenshots there.
- Copy: plain, confident, professional; never beginner-sounding labels.

## Current prices
- VSLs & Ads: Ad Pack from $600 (3 ads, $200/ad) · VSL from $1,200 · Launch Package custom (2 VSLs, 6 ads, Shorts cutdowns, thumbnails)
- YouTube & Documentaries: Essential from $650 · Signature from $1,200 · Cinematic custom
- Shorts: 6 for $480 · 12 for $900 · 24 for $1,680
- Motion & 3D: Map Pack from $390 (3) · Graphics Pack from $390 (15, most popular) · 3D Scene from $300
- Monthly: Growth from $2,400 · Studio from $4,500 · Custom
- Add-ons: thumbnail $60 · rush +30% · revision round $90 · project files $150 · script notes $80

## To do
- New portrait photos for About (`assets/alaa-portrait.webp`, 4:5).
- Cal.com booking link for "Book a call" buttons.
- Upload the Yacine Yasslim Ep. 3 video to YouTube/Vimeo and replace the Drive link in `main.js`.
- Add Shorts to `WORK.shorts` (the tab appears automatically).
- Deploy: Cloudflare Pages, output directory = this folder; custom domain via Cloudflare Registrar.
