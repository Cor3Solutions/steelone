/* ═══════════════════════════════════════════════
   STEEL-ONE — style.css
   ═══════════════════════════════════════════════ */

/* ─── VARIABLES (dark-only) ──────────────────── */
:root {
  --dark:        #0a0c0f;
  --mid:         #111418;
  --surface:     #171c22;
  --border:      #1e2530;
  --blue:        #0075ff;
  --blue-glow:   #1a8cff;
  --cyan:        #00d4ff;
  --silver:      #8fa3b8;
  --silver-lt:   #c8d8e8;
  --white:       #eef4fb;
  --noise-opacity: 0.35;
}

/* ─── RESET ──────────────────────────────────── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--dark);
  color: var(--white);
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
  overflow-x: hidden;
  cursor: none;
  transition: background .4s, color .4s;
}
img { display: block; width: 100%; height: 100%; object-fit: cover; }
a { text-decoration: none; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--dark); }
::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 2px; }

/* ─── NOISE TEXTURE ──────────────────────────── */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none; z-index: 1000; opacity: var(--noise-opacity);
}

/* ─── CUSTOM CURSOR ──────────────────────────── */
#cursor {
  width: 12px; height: 12px;
  background: var(--blue);
  border-radius: 50%;
  position: fixed; pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width .3s, height .3s, background .3s;
  mix-blend-mode: screen;
}
#cursor-ring {
  width: 36px; height: 36px;
  border: 1px solid rgba(0,117,255,.5);
  border-radius: 50%;
  position: fixed; pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: width .3s, height .3s, border-color .3s;
}

/* ─── NAV ────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 500;
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 60px;
  background: linear-gradient(to bottom, rgba(10,12,15,.95) 0%, transparent 100%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0,117,255,.08);
  transition: background .4s, padding .3s;
}
nav.scrolled {
  background: rgba(10,12,15,.98);
  padding: 14px 60px;
  border-bottom-color: rgba(0,117,255,.15);
}
.nav-logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2rem; letter-spacing: .12em; color: var(--white);
}
.nav-logo span { color: var(--blue); }
.nav-links { display: flex; gap: 36px; list-style: none; }
.nav-links a {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .82rem; font-weight: 600; letter-spacing: .18em;
  text-transform: uppercase; color: var(--silver);
  transition: color .2s;
}
.nav-links a:hover { color: var(--white); }

.nav-cta {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .8rem; font-weight: 600; letter-spacing: .2em;
  text-transform: uppercase; color: #fff;
  background: var(--blue); border: none; padding: 10px 24px; cursor: none;
  clip-path: polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  transition: background .2s, transform .2s;
  display: inline-block; white-space: nowrap;
}
.nav-cta:hover { background: var(--blue-glow); transform: scale(1.04); }

/* ─── SHARED BUTTONS ─────────────────────────── */
.btn-primary {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .85rem; font-weight: 700; letter-spacing: .2em;
  text-transform: uppercase; background: var(--blue); color: #fff;
  border: none; padding: 16px 36px; cursor: none;
  clip-path: polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
  position: relative; overflow: hidden; display: inline-block;
  transition: transform .2s;
}
.btn-primary::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.15), transparent);
  transform: translateX(-100%); transition: transform .4s;
}
.btn-primary:hover::before { transform: translateX(100%); }
.btn-primary:hover { transform: scale(1.03); }
.btn-primary--large { font-size: 1rem; padding: 18px 52px; }

.btn-secondary {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .85rem; font-weight: 600; letter-spacing: .2em;
  text-transform: uppercase; color: var(--silver);
  background: transparent; border: 1px solid var(--border);
  padding: 15px 36px; cursor: none; display: inline-block;
  clip-path: polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
  transition: color .2s, border-color .2s;
}
.btn-secondary:hover { color: var(--white); border-color: var(--blue); }

/* ─── SHARED SECTION TYPOGRAPHY ──────────────── */
section { padding: 120px 60px; }
.section-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; font-weight: 600; letter-spacing: .35em;
  text-transform: uppercase; color: var(--blue);
  margin-bottom: 16px; display: block;
}
.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.8rem,5vw,5rem);
  line-height: 1; letter-spacing: .02em; color: var(--white);
  margin-bottom: 24px;
}
.section-body {
  font-size: 1rem; font-weight: 300; line-height: 1.8;
  color: var(--silver); max-width: 560px;
}

/* ─── REVEAL ANIMATIONS ──────────────────────── */
.reveal {
  opacity: 0; transform: translateY(40px);
  transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: .1s; }
.reveal-delay-2 { transition-delay: .2s; }
.reveal-delay-3 { transition-delay: .3s; }
.reveal-delay-4 { transition-delay: .4s; }
.reveal-delay-5 { transition-delay: .5s; }

/* ─── HERO ───────────────────────────────────── */
#hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 0 60px 80px;
  position: relative; overflow: hidden;
}

.hero-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,117,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,117,255,.05) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 60% 40%, black 20%, transparent 80%);
  animation: grid-drift 20s linear infinite;
  z-index: 2;
}
@keyframes grid-drift { from { background-position: 0 0; } to { background-position: 60px 60px; } }

.hero-photo-bg {
  position: absolute; inset: 0; z-index: 0;
}
.hero-bg-img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
.hero-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    135deg,
    rgba(10,12,15,.92) 0%,
    rgba(10,12,15,.75) 50%,
    rgba(0,30,80,.5) 100%
  );
}

.hero-glow {
  position: absolute; right: -100px; top: 40%;
  width: 600px; height: 600px; z-index: 1;
  background: radial-gradient(circle, rgba(0,117,255,.15) 0%, transparent 70%);
  animation: pulse-glow 4s ease-in-out infinite;
}
@keyframes pulse-glow { 0%,100% { opacity:.6; transform: scale(1); } 50% { opacity:1; transform: scale(1.1); } }

.hero-content {
  position: relative; z-index: 3;
  padding-top: 120px; max-width: 900px;
}

.hero-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .75rem; font-weight: 600; letter-spacing: .3em;
  text-transform: uppercase; color: var(--blue);
  border: 1px solid rgba(0,117,255,.4); padding: 6px 16px;
  margin-bottom: 32px; display: inline-block;
  clip-path: polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
  opacity: 0; animation: fade-up .8s .2s forwards;
}
.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(5rem,13vw,12rem);
  line-height: .9; letter-spacing: .02em; color: var(--white);
}
.hero-title .line { display: block; overflow: hidden; }
.hero-title .line span {
  display: block;
  opacity: 0; transform: translateY(110%);
  animation: slide-up .9s cubic-bezier(.16,1,.3,1) forwards;
}
.hero-title .line:nth-child(1) span { animation-delay: .4s; }
.hero-title .line:nth-child(2) span { animation-delay: .55s; }
.hero-title .line:nth-child(3) span { animation-delay: .7s; }
.blue { color: var(--blue); }

.hero-sub {
  font-size: 1.1rem; font-weight: 300; color: var(--silver-lt);
  max-width: 520px; line-height: 1.7;
  margin-top: 28px; margin-bottom: 48px;
  opacity: 0; animation: fade-up .8s .9s forwards;
}
.hero-actions {
  display: flex; gap: 16px;
  opacity: 0; animation: fade-up .8s 1.1s forwards;
}
.hero-stats {
  position: absolute; bottom: 80px; right: 60px; z-index: 3;
  display: flex; gap: 48px;
  opacity: 0; animation: fade-up .8s 1.4s forwards;
}
.stat { text-align: right; }
.stat-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.8rem; color: var(--white); line-height: 1;
}
.stat-num span { color: var(--blue); }
.stat-label {
  font-size: .72rem; font-weight: 500; letter-spacing: .15em;
  text-transform: uppercase; color: var(--silver);
}
.scroll-indicator {
  position: absolute; left: 60px; bottom: 80px; z-index: 3;
  display: flex; flex-direction: column; align-items: center; gap: 12px;
  opacity: 0; animation: fade-up .8s 1.6s forwards;
}
.scroll-indicator span {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .65rem; font-weight: 600; letter-spacing: .3em;
  text-transform: uppercase; color: var(--silver);
  writing-mode: vertical-rl;
}
.scroll-line {
  width: 1px; height: 60px;
  background: linear-gradient(to bottom, var(--blue), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}
@keyframes scroll-pulse { 0%,100% { opacity:.4; transform: scaleY(1); } 50% { opacity:1; transform: scaleY(1.2); } }

/* ─── TICKER ─────────────────────────────────── */
.ticker-wrap {
  background: var(--blue); overflow: hidden; padding: 12px 0;
}
.ticker {
  display: flex; gap: 0;
  animation: ticker-move 30s linear infinite; white-space: nowrap;
}
.ticker-item {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .8rem; font-weight: 600; letter-spacing: .2em;
  text-transform: uppercase; color: rgba(255,255,255,.9);
  padding: 0 40px;
  display: flex; align-items: center; gap: 40px;
}
.ticker-item::after { content: '◆'; font-size: .5rem; color: rgba(255,255,255,.5); }
@keyframes ticker-move { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ─── PROBLEM ────────────────────────────────── */
#problem { background: var(--mid); }
.problem-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.photo-collage { display: flex; flex-direction: column; gap: 12px; }
.photo-main {
  position: relative; height: 300px; overflow: hidden;
}
.photo-main img { transition: transform .6s ease; }
.photo-main:hover img { transform: scale(1.04); }
.photo-caption {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(10,12,15,.9), transparent);
  padding: 20px 16px 12px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; letter-spacing: .15em; text-transform: uppercase;
  color: var(--silver);
}
.photo-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.photo-sm { height: 160px; overflow: hidden; position: relative; }
.photo-sm img { transition: transform .6s ease; }
.photo-sm:hover img { transform: scale(1.06); }
.photo-sm--fire img { filter: saturate(1.3); }
.photo-fire-tag {
  position: absolute; top: 12px; left: 12px;
  background: #c0392b; color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .65rem; font-weight: 700; letter-spacing: .18em;
  text-transform: uppercase; padding: 4px 10px;
}
.problem-text-col { padding-top: 20px; }
.problem-cards { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
.problem-card {
  display: flex; align-items: flex-start; gap: 18px;
  padding: 20px; background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--blue);
  transition: transform .3s;
  position: relative; overflow: hidden;
}
.problem-card::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(0,117,255,.04), transparent);
  opacity: 0; transition: opacity .3s;
}
.problem-card:hover { transform: translateX(6px); }
.problem-card:hover::before { opacity: 1; }
.problem-icon { font-size: 1.3rem; min-width: 32px; }
.problem-card-text { font-size: .9rem; color: var(--silver-lt); line-height: 1.6; }
.problem-card-text strong { color: var(--white); font-weight: 600; display: block; margin-bottom: 3px; }

/* ─── SOLUTION ───────────────────────────────── */
#solution { position: relative; overflow: hidden; }
.solution-bg-text {
  position: absolute; top: 20px; left: 0; right: 0;
  font-family: 'Bebas Neue', sans-serif; font-size: 22vw;
  color: rgba(0,117,255,.025); white-space: nowrap;
  letter-spacing: .05em; pointer-events: none; z-index: 0;
  text-align: center;
}
.solution-layout {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: start;
}
.solution-features {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 16px; margin-top: 40px;
}
.feature-card {
  padding: 24px 20px; background: var(--surface);
  border: 1px solid var(--border);
  position: relative; overflow: hidden;
  transition: transform .3s, box-shadow .3s;
}
.feature-card::after {
  content: ''; position: absolute;
  bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
  transform: scaleX(0); transform-origin: left;
  transition: transform .4s;
}
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,117,255,.1); }
.feature-card:hover::after { transform: scaleX(1); }
.feature-icon { font-size: 1.6rem; margin-bottom: 10px; }
.feature-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .95rem; font-weight: 700; letter-spacing: .08em;
  text-transform: uppercase; color: var(--white); margin-bottom: 6px;
}
.feature-desc { font-size: .82rem; color: var(--silver); line-height: 1.6; }

/* Solution right col — block showcase */
.solution-right { padding-top: 60px; }
.sol-quote {
  margin-top: 24px; padding: 24px;
  border-left: 3px solid var(--blue);
  background: var(--surface);
}
.sol-quote p { font-size: 1rem; color: var(--silver-lt); line-height: 1.7; font-style: italic; }

/* ─── FINISHES STRIP ─────────────────────────── */
.finishes-strip {
  background: var(--surface); padding: 48px 60px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.finishes-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; font-weight: 600; letter-spacing: .3em;
  text-transform: uppercase; color: var(--blue);
  margin-bottom: 24px;
}
.finishes-photos { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
.finish-photo { position: relative; height: 160px; overflow: hidden; cursor: none; }
.finish-photo img { transition: transform .6s ease; }
.finish-photo:hover img { transform: scale(1.08); }
.finish-photo span {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(10,12,15,.9), transparent);
  padding: 20px 12px 10px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .8rem; font-weight: 600; letter-spacing: .12em;
  text-transform: uppercase; color: #fff;
}

/* ─── BENEFITS ───────────────────────────────── */
#benefits { background: var(--mid); }
.benefits-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 60px;
}
.benefits-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
.benefits-photo {
  position: relative; height: 560px; overflow: hidden;
  transition: transform .4s;
}
.benefits-photo img { transition: transform .7s ease; }
.benefits-photo:hover img { transform: scale(1.04); }
.benefits-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,12,15,.8) 0%, transparent 60%);
  display: flex; align-items: flex-end; padding: 32px;
}
.benefits-photo-stat { text-align: left; }
.bps-num {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 5rem; color: var(--blue); line-height: 1;
}
.bps-label {
  font-size: .8rem; color: var(--silver-lt); letter-spacing: .08em;
  max-width: 180px; line-height: 1.4;
}
.benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
.benefit-item {
  padding: 32px 24px;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  position: relative; overflow: hidden;
  transition: background .3s;
}
.benefit-item:hover { background: var(--surface); }
.benefit-item:nth-child(2n) { border-right: none; }
.benefit-number {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem; color: rgba(0,117,255,.12);
  line-height: 1; margin-bottom: 12px; transition: color .3s;
}
.benefit-item:hover .benefit-number { color: rgba(0,117,255,.35); }
.benefit-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 700; letter-spacing: .06em;
  text-transform: uppercase; color: var(--white); margin-bottom: 8px;
}
.benefit-desc { font-size: .85rem; color: var(--silver); line-height: 1.6; }
.benefit-bar {
  position: absolute; bottom: 0; left: 0;
  height: 2px; background: var(--blue);
  width: 0; transition: width .5s ease;
}
.benefit-item:hover .benefit-bar { width: 100%; }

/* ─── PRECEDENT STRIP ────────────────────────── */
.precedent-strip { background: var(--surface); padding: 0 60px; }
.precedent-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
  padding: 80px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.precedent-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; font-weight: 600; letter-spacing: .3em;
  text-transform: uppercase; color: var(--blue); margin-bottom: 12px;
}
.precedent-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3rem; color: var(--white); margin-bottom: 20px;
}
.precedent-body { font-size: .95rem; color: var(--silver); line-height: 1.8; }
.precedent-photo {
  height: 320px; overflow: hidden; position: relative;
}
.precedent-photo img { transition: transform .6s ease; }
.precedent-photo:hover img { transform: scale(1.04); }
.precedent-tag {
  position: absolute; top: 16px; left: 16px;
  background: var(--blue); color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .7rem; font-weight: 700; letter-spacing: .18em;
  text-transform: uppercase; padding: 5px 14px;
  clip-path: polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
}

/* ─── MARKET ─────────────────────────────────── */
.market-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: start;
}
.segments-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .8rem; font-weight: 600; letter-spacing: .25em;
  text-transform: uppercase; color: var(--blue);
  margin-bottom: 16px; margin-top: 36px;
}
.segment-tags { display: flex; flex-wrap: wrap; gap: 10px; }
.segment-tag {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .78rem; font-weight: 600; letter-spacing: .12em;
  text-transform: uppercase; color: var(--silver-lt);
  border: 1px solid var(--border); padding: 8px 18px;
  clip-path: polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%);
  transition: background .2s, color .2s, border-color .2s; cursor: default;
}
.segment-tag:hover { background: var(--blue); color: #fff; border-color: var(--blue); }
.market-photo-callout {
  display: flex; gap: 0; margin-top: 36px; overflow: hidden;
  border: 1px solid var(--border);
}
.market-photo-callout img {
  width: 140px; min-width: 140px; height: 100px; object-fit: cover;
  flex-shrink: 0; transition: transform .5s;
}
.market-photo-callout:hover img { transform: scale(1.05); }
.market-callout-text {
  padding: 16px 20px; background: var(--surface);
  font-size: .85rem; color: var(--silver); line-height: 1.6;
}
.market-callout-text strong { color: var(--white); display: block; margin-bottom: 4px; }
.market-numbers { display: flex; flex-direction: column; gap: 0; }
.market-stat {
  display: flex; align-items: baseline; gap: 16px;
  padding: 40px 0; border-bottom: 1px solid var(--border);
}
.market-stat:last-child { border-bottom: none; }
.market-big {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4.5rem; color: var(--white); line-height: 1; white-space: nowrap;
}
.market-big span { color: var(--blue); }
.market-desc { font-size: .9rem; color: var(--silver); line-height: 1.6; }
.market-desc strong { color: var(--white); font-weight: 600; }

/* ─── TEAM ───────────────────────────────────── */
.team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
.team-card {
  background: var(--surface); border: 1px solid var(--border);
  overflow: hidden; position: relative;
  transition: transform .3s, box-shadow .3s;
}
.team-card:hover { transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,.4); }
.team-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--cyan));
}
.team-photo { height: 280px; overflow: hidden; position: relative; }
.team-photo img { object-position: center top; transition: transform .7s ease; }
.team-card:hover .team-photo img { transform: scale(1.05); }
.team-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(23,28,34,.95) 100%);
}
.team-card-body { padding: 28px 32px 32px; }
.team-role {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; font-weight: 600; letter-spacing: .3em;
  text-transform: uppercase; color: var(--blue); margin-bottom: 8px;
}
.team-name {
  font-family: 'Bebas Neue', sans-serif; font-size: 2rem;
  color: var(--white); letter-spacing: .04em; margin-bottom: 16px;
}
.team-bio { font-size: .88rem; color: var(--silver); line-height: 1.7; margin-bottom: 24px; }
.team-achievements { display: flex; flex-direction: column; gap: 10px; }
.team-ach {
  display: flex; gap: 10px;
  font-size: .82rem; color: var(--silver-lt); line-height: 1.5;
}
.team-ach::before { content: '▸'; color: var(--blue); min-width: 12px; margin-top: 1px; flex-shrink: 0; }

/* ─── CTA ────────────────────────────────────── */
#cta { padding: 0; min-height: 100vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.cta-photo-bg { position: absolute; inset: 0; overflow: hidden; }
.cta-photo-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: none !important; transition: none !important; }
.cta-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(10,12,15,.92) 0%, rgba(0,20,60,.75) 100%);
}
.cta-content {
  position: relative; z-index: 1;
  text-align: center; padding: 120px 60px;
  max-width: 900px;
}
.cta-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3.5rem,9vw,9rem);
  color: #eef4fb; line-height: .95; margin-bottom: 24px;
}
.cta-title span { color: var(--blue); }
.cta-sub { font-size: 1.1rem; color: #c8d8e8; margin-bottom: 48px; }
.cta-contact {
  display: flex; gap: 32px; align-items: center;
  justify-content: center; margin-top: 48px; flex-wrap: wrap;
}
.contact-item {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 500; letter-spacing: .12em;
  color: #8fa3b8; display: flex; align-items: center; gap: 10px;
  transition: color .2s;
}
.contact-item:hover { color: #eef4fb; }
.contact-item span { color: var(--blue); }

/* ─── FOOTER ─────────────────────────────────── */
footer {
  padding: 28px 60px;
  border-top: 1px solid var(--border);
  background: var(--dark);
  display: flex; align-items: center; justify-content: space-between;
}
.footer-logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.4rem; color: var(--silver); letter-spacing: .1em; }
.footer-logo span { color: var(--blue); }
.footer-copy { font-size: .75rem; color: var(--silver); opacity: .5; }
.footer-patent { font-family: 'Barlow Condensed', sans-serif; font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: var(--blue); opacity: .7; }

/* ─── KEYFRAMES ──────────────────────────────── */
@keyframes fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
@keyframes slide-up { from { transform:translateY(110%); opacity:0; } to { transform:translateY(0); opacity:1; } }

/* ─── FIRE RESISTANCE SECTION ────────────────── */
.fire-section {
  position: relative; overflow: hidden;
  padding: 0; min-height: 100vh;
  display: flex; align-items: stretch;
}
.fire-bg-photo {
  position: absolute; inset: 0; z-index: 0;
}
.fire-bg-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 40%; }
.fire-bg-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(6,8,12,.96) 0%, rgba(10,12,15,.88) 50%, rgba(30,10,0,.85) 100%);
}
.fire-content {
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: start;
  padding: 120px 60px;
  width: 100%;
}
.fire-facts { display: flex; flex-direction: column; gap: 16px; margin-top: 8px; }
.fire-fact {
  display: flex; gap: 16px; align-items: flex-start;
  padding: 18px 20px;
  background: rgba(10,12,15,.6);
  border: 1px solid rgba(255,107,53,.2);
  border-left: 3px solid #ff6b35;
  backdrop-filter: blur(8px);
  transition: border-color .3s, background .3s;
}
.fire-fact:hover { border-color: rgba(255,107,53,.6); background: rgba(10,12,15,.8); }
.fire-fact-icon { font-size: 1.4rem; line-height: 1; flex-shrink: 0; margin-top: 2px; }
.fire-fact-body { font-size: .88rem; color: #c8d8e8; line-height: 1.6; }
.fire-fact-body strong { color: #fff; display: block; margin-bottom: 3px; }

/* Fire comparison table */
.fire-compare {
  background: rgba(10,12,15,.85);
  border: 1px solid rgba(255,107,53,.25);
  overflow: hidden; backdrop-filter: blur(12px);
}
.fire-compare-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .8rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #ff6b35;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255,107,53,.2);
}
.fire-compare-header { background: rgba(255,107,53,.08); }
.fire-compare-row {
  display: grid; grid-template-columns: 1.4fr 1fr 1fr;
  border-bottom: 1px solid rgba(255,255,255,.05);
}
.fire-compare-row:last-child { border-bottom: none; }
.fire-compare-row > div {
  padding: 12px 16px;
  font-size: .82rem; font-weight: 300;
}
.fch {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .75rem; font-weight: 700; letter-spacing: .15em;
  text-transform: uppercase;
}
.fch.steel { color: var(--blue); }
.fch.wood  { color: #ff6b35; }
.fcr-label { color: #8fa3b8; }
.fcr-val { font-weight: 500; }
.fcr-val.good { color: #4ade80; }
.fcr-val.bad  { color: #ff6b35; }

/* LA rebuild card */
.la-rebuild-card {
  margin-top: 20px;
  padding: 24px; background: rgba(10,12,15,.85);
  border: 1px solid rgba(0,117,255,.3);
  border-top: 3px solid var(--blue);
  backdrop-filter: blur(12px);
}
.la-rebuild-header {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 12px;
}
.la-rebuild-flag { font-size: 1.4rem; }
.la-rebuild-header strong {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1rem; font-weight: 700; letter-spacing: .08em;
  text-transform: uppercase; color: #fff;
}
.la-rebuild-card p { font-size: .88rem; color: #c8d8e8; line-height: 1.7; }
.la-rebuild-card p strong { color: #fff; }

/* ─── TEAM — single card centered ───────────── */
.team-grid--single {
  grid-template-columns: minmax(0, 560px);
  justify-content: center;
}

/* ─── BUILDINGS GALLERY — 6 columns ─────────── */
.buildings-gallery {
  background: var(--dark); padding: 56px 60px;
  border-bottom: 1px solid var(--border);
}
.buildings-label {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; font-weight: 600; letter-spacing: .3em;
  text-transform: uppercase; color: var(--blue);
  margin-bottom: 24px;
}
.buildings-strip {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.building-photo {
  position: relative; height: 220px; overflow: hidden; cursor: none;
}
.building-photo img { transition: transform .7s cubic-bezier(.16,1,.3,1); }
.building-photo:hover img { transform: scale(1.08); }
.building-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,12,15,.85) 0%, transparent 55%);
  display: flex; align-items: flex-end;
  padding: 14px 12px;
  opacity: 0; transition: opacity .3s;
}
.building-photo:hover .building-photo-overlay { opacity: 1; }
.building-photo-overlay span {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .75rem; font-weight: 600; letter-spacing: .12em;
  text-transform: uppercase; color: #fff;
}

/* ─── BLOCK SHOWCASE ─────────────────────────── */
.block-showcase { position: relative; }
.block-img-wrap {
  position: relative; height: 420px; overflow: hidden;
}
.block-img-wrap img { transition: transform .7s ease; }
.block-img-wrap:hover img { transform: scale(1.04); }
.block-img-label {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(10,12,15,.9), transparent);
  padding: 28px 20px 14px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .72rem; font-weight: 700; letter-spacing: .28em;
  text-transform: uppercase; color: var(--silver-lt);
}
/* Patent badge on block image */
.patent-badge {
  position: absolute; top: 16px; right: 16px;
  display: flex; align-items: center; gap: 10px;
  background: rgba(10,12,15,.9);
  border: 1px solid var(--blue);
  padding: 10px 16px;
  backdrop-filter: blur(8px);
  clip-path: polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%);
  animation: patent-pulse 3s ease-in-out infinite;
}
@keyframes patent-pulse {
  0%,100% { box-shadow: 0 0 0 0 rgba(0,117,255,0); }
  50% { box-shadow: 0 0 16px 4px rgba(0,117,255,.25); }
}
.patent-hex { font-size: 1.6rem; color: var(--blue); line-height: 1; }
.patent-text { display: flex; flex-direction: column; }
.patent-top {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem; color: var(--blue); letter-spacing: .15em; line-height: 1;
}
.patent-bottom {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: .65rem; font-weight: 600; letter-spacing: .2em;
  text-transform: uppercase; color: var(--silver-lt); line-height: 1.3;
}
/* Block detail strip */
.block-detail-strip {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  border: 1px solid var(--border); border-top: none;
  margin-bottom: 24px;
}
.bd-item {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 18px;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: background .2s;
}
.bd-item:nth-child(2n) { border-right: none; }
.bd-item:nth-last-child(-n+2) { border-bottom: none; }
.bd-item:hover { background: var(--surface); }
.bd-icon { font-size: 1.1rem; flex-shrink: 0; }
.bd-text {
  font-size: .82rem; color: var(--silver-lt); line-height: 1.4;
}

/* ─── RESPONSIVE ─────────────────────────────── */
@media (max-width: 1200px) {
  .buildings-strip { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 1024px) {
  .problem-grid, .solution-layout, .benefits-layout,
  .market-layout, .team-grid, .fire-content { grid-template-columns: 1fr; gap: 48px; }
  .precedent-inner { grid-template-columns: 1fr; }
  .finishes-photos { grid-template-columns: repeat(2,1fr); }
  .benefits-header { flex-direction: column; gap: 16px; align-items: flex-start; }
  .hero-stats { position: static; margin-top: 48px; }
  .scroll-indicator { display: none; }
  nav { padding: 16px 24px; }
  .nav-links { display: none; }
  section { padding: 80px 24px; }
  #hero { padding: 0 24px 60px; }
  .finishes-strip, .precedent-strip, .buildings-gallery { padding: 48px 24px; }
  footer { padding: 24px; flex-wrap: wrap; gap: 12px; }
  body { cursor: auto; }
  #cursor, #cursor-ring { display: none; }
  .fire-section { min-height: auto; }
  .fire-content { padding: 80px 24px; }
}

@media (max-width: 768px) {
  .buildings-strip { grid-template-columns: repeat(2, 1fr); }
  .block-detail-strip { grid-template-columns: 1fr; }
  .bd-item { border-right: none; }
  .bd-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--border); }
  .bd-item:last-child { border-bottom: none; }
}

@media (max-width: 600px) {
  .hero-title { font-size: clamp(3.5rem, 15vw, 6rem); }
  .finishes-photos { grid-template-columns: 1fr 1fr; }
  .hero-actions { flex-direction: column; }
  .cta-contact { flex-direction: column; gap: 16px; }
  .buildings-strip { grid-template-columns: repeat(2, 1fr); }
  .building-photo { height: 160px; }
}