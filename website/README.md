# Alaa Media website

A fast, single-page portfolio. Plain HTML, CSS and JavaScript, no WordPress and no build step.
Total size of the site, images included, is about 600 KB (your old WordPress page loaded several MB).

```
website/
  index.html   ← all the text on the page
  styles.css   ← colors, fonts, layout (colors are at the top in :root)
  main.js      ← your video list is at the very top (WORK = ...)
  assets/      ← photos
```

Smooth scrolling uses **Lenis** and the Apple-style scroll animations use **GSAP + ScrollTrigger**.
Both load from a free CDN, so there's nothing to install. If they ever fail to load, the page still works and stays readable.

---

## Before you publish: checklist

1. **Videos.** Open `main.js` and edit the `WORK` list at the top. The ID is the part after `watch?v=` (or after `/shorts/`).
   For a fast page, save each thumbnail as `assets/thumbs/<ID>.webp`. If it's missing, the page falls back to YouTube's thumbnail.
   - `long`: your 4 newest documentaries (already filled with IntoTheBlue)
   - `shorts`: add 4 or 8 Shorts/Reels. The tab shows "coming soon" tiles until you do.
   - `motion`: maps and motion pieces. These are still older videos, so swap in newer ones.
2. **Craft gallery** ("What I add to your video"): real frames from your videos, stored in `assets/f-*.webp`.
   Swap them for newer frames anytime. Keep them 16:9, about 1100 px wide.
3. **Maps section** (the cream-colored one): uses `assets/f-map-europe.webp` and `assets/f-map-3d.webp`. Replace them with your best new map frames.
4. **Results**: the numbers are real (IntoTheBlue squid video, YouTube Studio). Add client results when you have permission.
5. **Prices**: search `from</span>$` and `plan__price--sm` in `index.html`.
6. **Client names** in the moving strip: only keep names you've worked for.

## What was wrong with the old site

| Problem | Why it hurts | Fixed how |
|---|---|---|
| Stock Elementor/Astra template ("Elevating Brands with Design Brilliance", lime buttons) | Clients have seen this exact template hundreds of times. Looks like a beginner. | Custom design, one accent color, real typography |
| Hosted on a free `gt.tc` subdomain, while your email is `@alaamedia.store` and Terms link to a third domain (`xo.je`) | Three domains looks like a scam to a careful client | One domain for everything (see below) |
| Videos are full YouTube embeds that load at once | Slow page; on the screenshot they showed as black boxes | Thumbnails only; the video loads when clicked, in a lightbox |
| No proof of results | "Trustworthy" comes from numbers, not adjectives like "cinematic precision" | Results section with stats, retention graphs and growth charts |
| No Shorts section | Half your buyers want vertical content | Long-form / Shorts / Motion tabs |
| "No revisions" in your process | Scares clients away; every pro offers revisions | "Two revision rounds included" |
| No prices at all | Serious clients self-qualify by price; cheap ones leave early | Full-edit and graphics-only packages |
| Stats almost invisible (gray on black) and the same description copy-pasted under two different stats | Looks unfinished | Clear stats, each with its own label |
| Big empty About section, "Ala" vs "Alaa", lowercase "my mission", mixing "we" and "I" | Small mistakes make clients doubt your attention to detail, which is what they're paying for | Consistent copy throughout |
| 98% client satisfaction with no source | Unverifiable claims lower trust | Removed; replaced with reply time |

---

## How to host it for free

**Recommended: Cloudflare Pages.** Free, very fast worldwide, free HTTPS, unlimited traffic.

1. Make a free account at https://dash.cloudflare.com
2. Go to **Workers & Pages → Create → Pages → Connect to Git**, and pick this GitHub repository.
3. Settings:
   - Production branch: the branch with the website on it
   - Build command: *(leave empty)*
   - Build output directory: `website`
4. Click **Deploy**. You get a free address like `alaamedia.pages.dev` in about a minute.
5. Every time you change a file on GitHub, the site updates by itself.

Other free options that work the same way: **Netlify** (drag and drop the `website` folder at https://app.netlify.com/drop) or **GitHub Pages**.

Leave InfinityFree / `gt.tc` hosting. It's slow, it adds a bot check page, and the free subdomain looks untrustworthy.

## How to buy a good domain

- **Where:** Cloudflare Registrar (sells at cost, about $10–11/year for `.com`, no upsells, and connects to Cloudflare Pages in one click).
  Porkbun and Namecheap are also good. Avoid GoDaddy: cheap first year, expensive renewals.
- **Which extension:** `.com` first. Clients trust it most. Good alternatives: `.studio`, `.media`, `.video` (cost more per year).
  `.store` reads like an online shop, so it's not a great fit for a service business.
- **Name ideas to check:** `alaamedia.com`, `alaamedia.studio`, `alaa.studio`, `alaaedits.com`, `editsbyalaa.com`, `alaa.video`.
  Keep it short, no hyphens, no numbers.
- **Connect it:** in Cloudflare Pages → your project → **Custom domains → Set up a domain**. HTTPS is automatic.

## Professional email (free)

Use **Cloudflare Email Routing** (free) to receive `contact@yourdomain.com` in your Gmail.
To send from that address, add it in Gmail → Settings → Accounts → "Send mail as". Or use **Zoho Mail** (free plan).
Then update the email in `index.html` (search `contact@`).

## Worth adding next

- **Booking link:** a free https://cal.com page for 20-minute discovery calls. Put it on the "Book a call" buttons.
- **Analytics:** Cloudflare Web Analytics (free, no cookie banner needed) to see visitors.
- **A real showreel**: the single most important thing on the page.
