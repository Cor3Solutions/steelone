/* ═══════════════════════════════════════════════
   STEEL-ONE — main.js
   ═══════════════════════════════════════════════ */

'use strict';

/* ─── CUSTOM CURSOR ──────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let cx = 0, cy = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
  });

  // Smooth lagging ring
  (function animateRing() {
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  // Enlarge on interactive elements
  document.querySelectorAll('a, button, .segment-tag, .finish-photo, .feature-card, .benefit-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width   = '20px';
      dot.style.height  = '20px';
      dot.style.background = '#00d4ff';
      ring.style.width  = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(0,212,255,.6)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width   = '12px';
      dot.style.height  = '12px';
      dot.style.background = '#0075ff';
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(0,117,255,.5)';
    });
  });
})();

/* ─── NAV SCROLL STATE ───────────────────────── */
(function initNav() {
  const nav = document.getElementById('navbar');
  const cta = document.getElementById('navCta');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }, { passive: true });

  // CTA smooth-scrolls to #cta section (works for both <a> and <button>)
  if (cta) {
    cta.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
})();

/* ─── SCROLL REVEAL ──────────────────────────── */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();

/* ─── ANIMATED NUMBER COUNTERS ───────────────── */
(function initCounters() {
  const targets = document.querySelectorAll('.market-big[data-target]');
  if (!targets.length) return;

  const animateNum = (el, target, suffix, duration) => {
    const start = performance.now();
    const isFloat = target % 1 !== 0;

    (function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = target * eased;
      el.textContent = (isFloat ? val.toFixed(2) : Math.floor(val).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    })(start);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el     = e.target;
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        animateNum(el, target, suffix, 1800);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  targets.forEach(el => observer.observe(el));
})();

/* ─── TABLE ROW STAGGER ANIMATION ────────────── */
(function initTableRows() {
  const tbody = document.querySelector('tbody');
  if (!tbody) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const tRows = e.target.querySelectorAll('tr');
        tRows.forEach((row, i) => {
          row.style.opacity = '0';
          row.style.transform = 'translateX(-20px)';
          row.style.transition = `opacity .4s ${i * 0.08}s, transform .4s ${i * 0.08}s`;
          setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
          }, 50);
        });
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(tbody);
})();

/* ─── PARALLAX: HERO ONLY (CTA is intentionally static) ── */
(function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg-img');
  if (!heroBg) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        heroBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();

/* ─── HERO GLOW MOUSE TRACKING ───────────────── */
(function initGlowTrack() {
  const glow = document.querySelector('.hero-glow');
  if (!glow) return;

  document.addEventListener('mousemove', e => {
    const xPct = (e.clientX / window.innerWidth)  * 100;
    const yPct = (e.clientY / window.innerHeight) * 100;
    glow.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(0,117,255,.2) 0%, transparent 65%)`;
  }, { passive: true });
})();

/* ─── BLOCK GRID ASSEMBLY ANIMATION ──────────── */
(function initBlockGrid() {
  const container = document.getElementById('blockGrid');
  if (!container) return;

  const ROWS = 4, COLS = 5;
  const blocks = [];

  for (let i = 0; i < ROWS * COLS; i++) {
    const b = document.createElement('div');
    b.className = 'block';
    container.appendChild(b);
    blocks.push(b);
  }

  let step = 0;
  function tick() {
    blocks.forEach((b, i) => {
      b.className = i < step
        ? (i === step - 1 ? 'block glow' : 'block lit')
        : 'block';
    });
    step++;
    if (step > blocks.length + 4) step = 0;
    setTimeout(tick, step === 0 ? 900 : 110);
  }
  tick();
})();

/* ─── FINISHES STRIP — HOVER PARALLAX ────────── */
(function initFinishHover() {
  document.querySelectorAll('.finish-photo').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 14;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14;
      const img = card.querySelector('img');
      if (img) img.style.transform = `scale(1.1) translate(${x}px,${y}px)`;
    });
    card.addEventListener('mouseleave', () => {
      const img = card.querySelector('img');
      if (img) img.style.transform = '';
    });
  });
})();

/* ─── BENEFIT ITEMS — STAGGER ON SCROLL ─────── */
(function initBenefitStagger() {
  const grid = document.querySelector('.benefits-grid');
  if (!grid) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        grid.querySelectorAll('.benefit-item').forEach((item, i) => {
          item.style.transitionDelay = `${i * 0.06}s`;
        });
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(grid);
})();

/* ─── TICKER PAUSE ON HOVER ──────────────────── */
(function initTickerPause() {
  const ticker = document.querySelector('.ticker');
  const wrap   = document.querySelector('.ticker-wrap');
  if (!ticker || !wrap) return;

  wrap.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  wrap.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
})();

/* ─── SMOOTH ACTIVE NAV LINK HIGHLIGHT ───────── */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--white)';
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(s => observer.observe(s));
})();

/* ─── SEGMENT TAGS — RIPPLE EFFECT ───────────── */
(function initSegmentRipple() {
  document.querySelectorAll('.segment-tag').forEach(tag => {
    tag.addEventListener('click', e => {
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute; border-radius:50%;
        width:100px; height:100px;
        background:rgba(255,255,255,.15);
        transform:translate(-50%,-50%) scale(0);
        animation:ripple-anim .5s linear;
        left:${e.offsetX}px; top:${e.offsetY}px;
        pointer-events:none;
      `;
      tag.style.position = 'relative';
      tag.style.overflow = 'hidden';
      tag.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes ripple-anim { to { transform:translate(-50%,-50%) scale(4); opacity:0; } }';
    document.head.appendChild(style);
  }
})();