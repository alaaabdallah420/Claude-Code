/* =========================================================
   Alaa Media — main.js
   EDIT YOUR VIDEOS HERE.
   - YouTube videos: use the ID (the part after "watch?v=").
   - Videos hosted elsewhere (Drive, Vimeo): add `url` and `thumb`.
   - `feature: true` shows the video full width at the top.
   - A category with no videos is hidden automatically.
   ========================================================= */
const WORK = {
  // Ads, VSLs and trailers. `vertical: true` puts a video in the "Vertical ads" row.
  ads: [
    {
      feature: true,
      title: 'Product Launch Trailer',
      tag: 'Yacine Tareb · Trailer · Maps · Motion design',
      url: 'https://drive.google.com/file/d/1H2gS36BtXKl2u4JuCnTZqyE9x0pekJSZ/view',
      embed: 'https://drive.google.com/file/d/1H2gS36BtXKl2u4JuCnTZqyE9x0pekJSZ/preview',
      thumb: 'assets/thumbs/yacine-ep3.webp',
    },
    { id: 'AgiVkBR3BYk', title: 'How I Charged My Client $10,892', tag: 'Ad · 3D motion · Iman Gadzhi style' },
    { id: 'WJMPzeilAoE', title: 'How to Actually Start Earning More', tag: 'Jakub B. Bączek · Business' },
    { id: 'mXaQeJz7EeU', title: 'How to Actually Win Premium Video Editing Clients', tag: 'Maksymilian Skrobisz · Coaching' },
    { placeholder: true, title: 'Your VSL, next', tag: 'VSLs from $1,200' },
    { id: 'PbK2OGVqe6g', vertical: true, title: 'Perfume ad', tag: 'Ad · 3D product scene' },
    { placeholder: true, vertical: true, title: 'Your ad, next', tag: 'Ad packs from $600' },
    { placeholder: true, vertical: true, title: 'Your UGC ad, next', tag: 'Book a discovery call' },
    { placeholder: true, vertical: true, title: 'Your launch, next', tag: 'Launch packages' },
  ],
  long: [
    { id: '40909D2wUl8', title: 'The Massive Discovery Norway Made', tag: 'This Is Big Industry · Documentary · Maps' },
    { id: 'Sj4JboSZ-qQ', title: 'Angels Heard by NASA?', tag: 'Yacine Tareb · Documentary · Motion' },
    { id: 'DE6eRTl43DI', title: 'The Story of the Prophet Ibrahim', tag: 'Yacine Tareb · History documentary' },
    { id: 'N79q8bpAR9Q', title: 'Why Do Squids Become Giant Monsters in the Deep', tag: 'IntoTheBlue · 3D animation' },
    { id: 'ukKKfEk6ZT4', title: 'The Most Terrifying Ocean Predator From Every Era', tag: 'IntoTheBlue · 3D animation' },
    { id: 'Y3QsAac6VYc', title: 'Why the Ocean Gets Creepier the Deeper You Go', tag: 'IntoTheBlue · Documentary' },
  ],
  // Vertical edits. Covers are 9:16 images in assets/thumbs/<id>.webp.
  shorts: [
    { id: '9BfVfF89z_4', title: 'War map breakdown', tag: 'Yacine Tareb · 3D map · SFX' },
    { id: '1-HiOjR-fBM', title: 'The Pareto principle', tag: 'Maksymilian · Neon motion' },
    { id: '1b7R1PcUWA4', title: 'Not enough time?', tag: 'Reel · 3D animation' },
    { id: 'g5VQDPh4LWI', title: 'Ender Dragon', tag: 'Reel · 3D animation' },
    { id: 'FEBQx-135r0', title: 'The prophets’ family tree', tag: 'Short · 3D graphics' },
    { placeholder: true, title: 'Your Short, next', tag: 'Shorts packs from $480' },
    { placeholder: true, title: 'Your Reel, next', tag: 'Book a discovery call' },
    { placeholder: true, title: 'Your TikTok, next', tag: 'Shorts packs from $480' },
  ],
};

/* Audience retention of the squid documentary (YouTube Studio, lifetime).
   [seconds, % of viewers still watching] */
const RETENTION = {
  duration: 1031,
  points: [[0,103],[16,78],[27,77],[38,68],[55,65],[85,65],[96,61],[106,63],[115,61],[147,61],[161,59],[181,59],[195,57],[346,57],[359,56],[421,56],[435,54],[476,54],[489,53],[544,53],[558,51],[668,51],[681,49],[784,49],[795,48],[846,48],[869,41],[907,40],[921,41],[969,41],[983,38],[1024,38],[1031,34]],
  marks: [[16, 'After the intro'], [516, 'Midpoint'], [1031, 'Final second']],
};

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) document.documentElement.classList.add('reduced');
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Render video grids ---------- */
  const card = (v, short) => {
    if (v.placeholder) return `
    <a class="vid vid--placeholder" href="#pricing">
      <span class="vid__media"><span class="vid__plus" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></span>
      <span class="vid__meta"><span class="vid__tag">${v.tag}</span><span class="vid__title">${v.title}</span></span>
    </a>`;
    const href = v.url || `https://www.youtube.com/watch?v=${v.id}`;
    const thumb = v.thumb || `assets/thumbs/${v.id}.webp`;
    const fallback = v.id ? `onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${v.id}/${short ? 'oar2' : 'hqdefault'}.jpg'"` : '';
    return `
    <a class="vid ${v.id || v.embed ? 'yt' : ''} ${v.feature ? 'vid--feature' : ''}" href="${href}" target="_blank" rel="noopener"
       ${v.id ? `data-id="${v.id}"` : ''} ${v.embed ? `data-embed="${v.embed}"` : ''} data-short="${v.native ? 1 : ''}" aria-label="Play ${v.title}">
      <span class="vid__media">
        ${v.feature ? '<span class="vid__badge">Latest project</span>' : ''}
        <img src="${thumb}" alt="" loading="lazy" ${fallback}>
        <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
      </span>
      <span class="vid__meta"><span class="vid__tag">${v.tag || ''}</span><span class="vid__title">${v.title}</span></span>
    </a>`;
  };
  document.querySelectorAll('[data-group="work"]').forEach(panel => {
    const list = WORK[panel.dataset.panel] || [];
    if (!list.length) { panel.innerHTML = ''; return; }
    const wide = list.filter(v => !v.vertical), tall = list.filter(v => v.vertical);
    if (panel.dataset.panel === 'shorts') { panel.innerHTML = `<div class="vids vids--shorts">${list.map(v => card(v, true)).join('')}</div>`; return; }
    panel.innerHTML =
      (wide.length ? `<div class="vids">${wide.map(v => card(v, false)).join('')}</div>` : '') +
      (tall.length ? `<p class="vids__label">Vertical ads</p><div class="vids vids--shorts">${tall.map(v => card(v, true)).join('')}</div>` : '');
  });

  /* ---------- Tabs: hide empty categories; hide the bar if only one is left ---------- */
  document.querySelectorAll('[data-tabs]').forEach(group => {
    const name = group.dataset.tabs;
    const panels = [...document.querySelectorAll(`[data-group="${name}"]`)];
    group.querySelectorAll('button').forEach(btn => {
      const p = panels.find(x => x.dataset.panel === btn.dataset.tab);
      if (p && !p.children.length) { btn.remove(); p.remove(); }
    });
    const btns = [...group.querySelectorAll('button')];
    if (btns.length < 2) { group.remove(); return; }
    const pill = group.querySelector('.tabs__pill');
    const move = btn => { pill.style.width = btn.offsetWidth + 'px'; pill.style.transform = `translateX(${btn.offsetLeft}px)`; };
    btns.forEach(btn => btn.addEventListener('click', () => {
      btns.forEach(b => b.setAttribute('aria-selected', b === btn));
      document.querySelectorAll(`[data-group="${name}"]`).forEach(p => p.hidden = p.dataset.panel !== btn.dataset.tab);
      move(btn);
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }));
    const sync = () => move(group.querySelector('[aria-selected="true"]') || btns[0]);
    window.addEventListener('resize', sync);
    if (document.fonts) document.fonts.ready.then(sync);
    sync();
  });

  /* ---------- Back to top ---------- */
  document.querySelectorAll('a[href="#top"]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }));

  /* ---------- Video lightbox (YouTube loads only on click) ---------- */
  const lb = document.getElementById('lightbox');
  const frame = lb.querySelector('.lightbox__frame');
  const close = () => { lb.hidden = true; frame.innerHTML = ''; document.body.style.overflow = ''; };
  document.addEventListener('click', e => {
    const t = e.target.closest('.yt');
    if (!t || !(t.dataset.id || t.dataset.embed)) return;
    if (window.self !== window.top) return; // inside a preview frame: let the link open YouTube
    e.preventDefault();
    frame.classList.toggle('is-short', !!t.dataset.short);
    const src = t.dataset.embed || `https://www.youtube-nocookie.com/embed/${t.dataset.id}?autoplay=1&rel=0&modestbranding=1`;
    frame.innerHTML = `<iframe src="${src}" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    lb.hidden = false; document.body.style.overflow = 'hidden';
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lightbox__close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });

  /* ---------- Retention chart ---------- */
  const chartEl = document.getElementById('retention');
  if (chartEl) {
    const NS = 'http://www.w3.org/2000/svg';
    const fmt = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
    const valueAt = t => {
      const p = RETENTION.points;
      for (let i = 1; i < p.length; i++) if (t <= p[i][0]) {
        const [t0, v0] = p[i - 1], [t1, v1] = p[i];
        return v0 + (v1 - v0) * ((t - t0) / (t1 - t0 || 1));
      }
      return p[p.length - 1][1];
    };
    // monotone cubic path (keeps the curve from overshooting)
    const smooth = pts => {
      const n = pts.length, d = [], m = [];
      for (let i = 0; i < n - 1; i++) d.push((pts[i + 1][1] - pts[i][1]) / (pts[i + 1][0] - pts[i][0] || 1));
      m[0] = d[0]; m[n - 1] = d[n - 2];
      for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
      let s = `M${pts[0][0]},${pts[0][1]}`;
      for (let i = 0; i < n - 1; i++) {
        const h = (pts[i + 1][0] - pts[i][0]) / 3;
        s += ` C${pts[i][0] + h},${pts[i][1] + m[i] * h} ${pts[i + 1][0] - h},${pts[i + 1][1] - m[i + 1] * h} ${pts[i + 1][0]},${pts[i + 1][1]}`;
      }
      return s;
    };
    const tip = document.createElement('div'); tip.className = 'chart__tip';
    let geo = null;

    let drawn = false; // becomes true once the line has animated in
    const draw = () => {
      const W = chartEl.clientWidth, H = chartEl.clientHeight;
      if (!W) return;
      const narrow = W < 560;
      const L = 44, R = narrow ? 14 : 20, T = 36, B = 30;
      const max = 110;
      const x = t => L + (t / RETENTION.duration) * (W - L - R);
      const y = v => T + (1 - v / max) * (H - T - B);
      const pts = RETENTION.points.map(([t, v]) => [x(t), y(v)]);
      const line = smooth(pts);
      const ticks = [0, 25, 50, 75, 100];
      const xt = [0, RETENTION.duration / 2, RETENTION.duration];
      const avg = 51.8;
      // labels sit above the point; the last one sits below-left so it never leaves the chart
      const marks = RETENTION.marks.map(([t, label], i, arr) => {
        const v = valueAt(t), px = x(t), py = y(v);
        const last = i === arr.length - 1, first = i === 0;
        const anchor = first ? 'start' : last ? 'end' : 'middle';
        const tx = first ? px + 10 : last ? px - 4 : px;
        const ty = last ? py + 26 : py - 14;
        return `<g class="mark"><circle cx="${px}" cy="${py}" r="5"/>
          <text x="${tx}" y="${ty}" text-anchor="${anchor}">${Math.round(v)}%${narrow ? '' : `<tspan class="sub" dx="6">${label}</tspan>`}</text></g>`;
      }).join('');
      chartEl.innerHTML = `<svg viewBox="0 0 ${W} ${H}" aria-hidden="true">
        <defs>
          <linearGradient id="rg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stop-color="#f0b85a" stop-opacity=".34"/><stop offset="1" stop-color="#f0b85a" stop-opacity="0"/></linearGradient>
          <clipPath id="rclip"><rect class="clip" x="0" y="0" width="${drawn || reduced ? W : 0}" height="${H}"/></clipPath>
        </defs>
        <g class="grid">${ticks.map(v => `<line x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text class="ylab" x="${L - 12}" y="${y(v) + 4}" text-anchor="end">${v}%</text>`).join('')}</g>
        ${xt.map((t, i) => `<text class="xlab" x="${x(t)}" y="${H - 6}" text-anchor="${i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}">${fmt(t)}</text>`).join('')}
        <g clip-path="url(#rclip)">
          <path d="${line} L${x(RETENTION.duration)},${y(0)} L${x(0)},${y(0)}Z" fill="url(#rg)"/>
          <path class="line" d="${line}"/>
        </g>
        <g class="avg"><line x1="${L}" x2="${W - R}" y1="${y(avg)}" y2="${y(avg)}"/>
          <text x="${W - R}" y="${y(avg) - 8}" text-anchor="end">AVG ${avg}%</text></g>
        ${marks}
        <g class="scrub"><line y1="${T - 10}" y2="${y(0)}"/><circle r="6"/></g>
      </svg>`;
      chartEl.append(tip);
      if (drawn || reduced) chartEl.classList.add('is-drawn');
      geo = { x, y, L, R, W };
    };

    // animate the line from left to right the first time the chart scrolls into view
    const animateIn = () => {
      if (drawn) return;
      const t0 = performance.now(), dur = 2200;
      const step = now => {
        const k = Math.min(1, Math.max(0, (now - t0) / dur)), e = 1 - Math.pow(1 - k, 3);
        const rect = chartEl.querySelector('.clip'); // re-query: the chart may redraw mid-animation
        if (rect) rect.setAttribute('width', chartEl.clientWidth * e);
        if (k < 1) requestAnimationFrame(step);
        else { drawn = true; chartEl.classList.add('is-drawn'); }
      };
      requestAnimationFrame(step);
    };
    new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) { animateIn(); obs.disconnect(); }
    }, { threshold: 0.35 }).observe(chartEl);

    const scrub = clientX => {
      if (!geo) return;
      const r = chartEl.getBoundingClientRect();
      const px = Math.min(Math.max(clientX - r.left, geo.L), geo.W - geo.R);
      const t = ((px - geo.L) / (geo.W - geo.L - geo.R)) * RETENTION.duration;
      const v = valueAt(t);
      const g = chartEl.querySelector('.scrub');
      g.querySelector('line').setAttribute('x1', px); g.querySelector('line').setAttribute('x2', px);
      g.querySelector('circle').setAttribute('cx', px); g.querySelector('circle').setAttribute('cy', geo.y(v));
      tip.innerHTML = `<b>${Math.round(v)}%</b> still watching at ${fmt(t)}`;
      tip.style.left = Math.min(Math.max(px, 90), geo.W - 90) + 'px';
      chartEl.classList.add('is-active');
    };
    chartEl.addEventListener('pointermove', e => scrub(e.clientX));
    chartEl.addEventListener('pointerdown', e => scrub(e.clientX));
    chartEl.addEventListener('pointerleave', () => chartEl.classList.remove('is-active'));

    draw();
    let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(draw, 120); });
    if (document.fonts) document.fonts.ready.then(draw);
  }

  /* ---------- Split statement into words ---------- */
  const st = document.querySelector('.split');
  if (st) {
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part.trim()) return frag.append(part);
          const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.append(s);
        });
        n.replaceWith(frag);
      } else walk(n);
    });
    walk(st);
  }

  /* ---------- Reveal on scroll (works without GSAP too) ---------- */
  const countUp = el => {
    const to = parseFloat(el.dataset.to), dec = +el.dataset.dec || 0;
    if (reduced) { el.textContent = to.toFixed(dec); return; }
    const t0 = performance.now(), dur = 1600;
    const tick = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = (to * e).toFixed(dec);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target;
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 4) * 80 + 'ms';
    el.classList.add('in');
    el.querySelectorAll('.count').forEach(countUp);
    io.unobserve(el);
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Smooth scrolling + scroll effects (GSAP + Lenis from CDN) ---------- */
  window.addEventListener('load', () => {
    if (reduced || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    if (window.Lenis) {
      const lenis = window.__lenis = new Lenis({ lerp: 0.1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      document.querySelectorAll('a[href^="#"]:not([href="#top"])').forEach(a => a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -60 }); }
      }));
    }

    // Statement words light up one by one
    gsap.to('.statement__text .w', {
      opacity: 1, stagger: .1, ease: 'none',
      scrollTrigger: { trigger: '.statement', start: 'top 75%', end: 'bottom 60%', scrub: true },
    });

    // Map frame drifts gently as you scroll past it
    gsap.fromTo('.maps__frame', { y: 40 }, { y: -40, ease: 'none',
      scrollTrigger: { trigger: '.maps', start: 'top bottom', end: 'bottom top', scrub: true } });
  });
})();
