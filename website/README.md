# Alaa Media website

A fast, single-page portfolio. Plain HTML, CSS and JavaScript, no WordPress and no build step.
Total size of the site's own files is about 110 KB (your old WordPress page loaded several MB).

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

1. **Swap in your new videos.** Open `main.js` and replace the IDs in `WORK`.
   The ID is the part after `watch?v=` (or after `/shorts/` for a Short).
   - `long`: your best 4 long-form edits (always an even number so the grid stays full)
   - `shorts`: 4 or 8 Shorts/Reels (the tab shows "coming soon" tiles until you add some)
   - `motion`: maps, 3D and motion graphics pieces
   - The big showreel at the top: in `index.html`, search `reel__frame` and change `data-id` and the image URL to a new video ID.
     Best option: cut a 60–90 second showreel of your newest work and upload it to YouTube as unlisted.
2. **Replace the sample numbers in "Results".** The stats (62%, +120K, 3.4x) and the two case-study cards are
   placeholders. Search `REPLACE` in `index.html`. Only use numbers you can show if a client asks.
   For retention graphs, take a screenshot in YouTube Studio → Analytics → Engagement → Audience retention,
   save it as `assets/retention-yacine.png`, and replace the `<figure class="graph">…</figure>` block with
   `<img src="assets/retention-yacine.png" alt="Audience retention graph" class="case__graph">`.
   Ask clients for permission before showing their analytics.
3. **Set your prices** in the Pricing section (search `from $`).
4. **Check the client list** in the moving strip under the showreel. Only keep names you've worked for.
5. **Booking month**: the hero says "Booking projects for November". Update it monthly, or change it to "Available for new projects".

---

## What was wrong with the old site

| Problem | Why it hurts | Fixed how |
|---|---|---|
| Stock Elementor/Astra template ("Elevating Brands with Design Brilliance", lime buttons) | Clients have seen this exact template hundreds of times. Looks like a beginner. | Custom design, one accent color, real typography |
| Hosted on a free `gt.tc` subdomain, while your email is `@alaamedia.store` and Terms link to a third domain (`xo.je`) | Three domains looks like a scam to a careful client | One domain for everything (see below) |
| Videos are full YouTube embeds that load at once | Slow page; on the screenshot they showed as black boxes | Thumbnails only; the video loads when clicked, in a lightbox |
| No proof of results | "Trustworthy" comes from numbers, not adjectives like "cinematic precision" | Results section with stats, retention graphs and growth charts |
| No Shorts section | Half your buyers want vertical content | Long-form / Shorts / Motion tabs |
| "No revisions" in your process | Scares clients away; every pro offers revisions | "Two revision rounds included" |
| No prices at all | Serious clients self-qualify by price; cheap ones leave early | "From $X" pricing, fixed quotes |
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
