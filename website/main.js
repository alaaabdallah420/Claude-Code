/* =========================================================
   Alaa Media — main.js
   EDIT YOUR VIDEOS HERE. Use the YouTube video ID
   (the part after "watch?v=" or after "/shorts/").
   ========================================================= */
const WORK = {
  long: [
    { id: '40909D2wUl8', title: 'The Massive Discovery Norway Made', tag: 'Documentary · This Is Big Industry' },
    { id: 'YRECPDtcJ0A', title: 'Why Even Killer Whales Run From Pilot Whales', tag: 'Nature documentary · IntoTheBlue' },
    { id: 'mXaQeJz7EeU', title: 'How to Actually Win Premium Editing Clients', tag: 'Talking head · Maksymilian Skrobisz' },
    { id: '9BfVfF89z_4', title: '3D Animated Map, War Style', tag: 'Maps · Sound design' },
  ],
  // Add your Shorts IDs here, e.g. { id: 'abc123XYZ', title: 'Hook edit', tag: 'TikTok · Reels' }
  shorts: [],
  motion: [
    { id: '9BfVfF89z_4', title: '3D Animated Map, War Style + SFX', tag: '3D maps · Sound design' },
    { id: '1-HiOjR-fBM', title: 'Ultra 3D Animations + SFX', tag: '3D motion · Sound design' },
  ],
};

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) document.documentElement.classList.add('reduced');
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Render video grids ---------- */
  const card = (v, short) => `
    <button class="vid yt" data-id="${v.id}" data-short="${short ? 1 : ''}" aria-label="Play ${v.title}">
      <span class="vid__media">
        <img src="https://i.ytimg.com/vi/${v.id}/${short ? 'oar2' : 'hqdefault'}.jpg" alt="" loading="lazy"
             onerror="this.onerror=null;this.src='https://i.ytimg.com/vi/${v.id}/hqdefault.jpg'">
        <span class="play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
      </span>
      <span class="vid__meta"><span class="vid__title">${v.title}</span><span class="vid__tag">${v.tag || ''}</span></span>
    </button>`;
  const empty = () => `<div class="vid vid--empty"><span class="vid__media">Vertical edit<br>coming soon</span></div>`;

  document.querySelectorAll('.panel').forEach(panel => {
    const key = panel.dataset.panel;
    const list = WORK[key] || [];
    const isShort = key === 'shorts';
    panel.innerHTML = list.length ? list.map(v => card(v, isShort)).join('') : Array(4).fill(0).map(empty).join('');
  });

  /* ---------- Tabs ---------- */
  const tabs = document.querySelectorAll('.tabs button');
  const pill = document.querySelector('.tabs__pill');
  const movePill = btn => { pill.style.width = btn.offsetWidth + 'px'; pill.style.transform = `translateX(${btn.offsetLeft - 4}px)`; pill.style.left = '4px'; };
  tabs.forEach(btn => btn.addEventListener('click', () => {
    tabs.forEach(b => b.setAttribute('aria-selected', b === btn));
    document.querySelectorAll('.panel').forEach(p => p.hidden = p.dataset.panel !== btn.dataset.tab);
    movePill(btn);
  }));
  const syncPill = () => movePill(document.querySelector('.tabs [aria-selected="true"]'));
  window.addEventListener('resize', syncPill);
  document.fonts ? document.fonts.ready.then(syncPill) : syncPill();
  syncPill();

  /* ---------- Video lightbox (YouTube only loads on click = fast page) ---------- */
  const lb = document.getElementById('lightbox');
  const frame = lb.querySelector('.lightbox__frame');
  const close = () => { lb.hidden = true; frame.innerHTML = ''; document.body.style.overflow = ''; };
  document.addEventListener('click', e => {
    const t = e.target.closest('.yt');
    if (!t) return;
    frame.classList.toggle('is-short', !!t.dataset.short);
    frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${t.dataset.id}?autoplay=1&rel=0&modestbranding=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    lb.hidden = false; document.body.style.overflow = 'hidden';
  });
  lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('.lightbox__close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !lb.hidden) close(); });

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
    // small stagger for siblings
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 4) * 80 + 'ms';
    el.classList.add('in');
    el.querySelectorAll('.count').forEach(countUp);
    io.unobserve(el);
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Apple-style scroll effects (GSAP + Lenis from CDN) ---------- */
  window.addEventListener('load', () => {
    if (reduced || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    if (window.Lenis) {
      const lenis = new Lenis({ lerp: 0.1 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
      document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -60 }); }
      }));
    }

    // Showreel grows and flattens as you scroll into it
    gsap.fromTo('.reel__frame',
      { scale: .86, rotateX: 14, borderRadius: 40 },
      { scale: 1, rotateX: 0, borderRadius: 28, ease: 'none',
        scrollTrigger: { trigger: '.reel', start: 'top 95%', end: 'center 55%', scrub: true } });

    // Statement words light up one by one
    gsap.to('.statement__text .w', {
      opacity: 1, stagger: .1, ease: 'none',
      scrollTrigger: { trigger: '.statement', start: 'top 75%', end: 'bottom 60%', scrub: true },
    });
  });
})();
