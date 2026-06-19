/* ─── NAV SCROLL ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

/* ─── REVEAL ON SCROLL ─── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

/* ─── TABS ─── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
    document.getElementById(targetId).classList.add('active');
  });
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
  });
});

/* ─── CALCULATOR ─── */
function updateCalc() {
  const sqft = parseInt(document.getElementById('sqftSlider').value);
  const units = parseInt(document.getElementById('unitsSlider').value);
  const labor = parseInt(document.getElementById('laborSlider').value);
  document.getElementById('sqftVal').textContent = sqft.toLocaleString();
  document.getElementById('unitsVal').textContent = units;
  document.getElementById('laborVal').textContent = `$${labor}`;
  document.getElementById('sqftSlider').setAttribute('aria-valuenow', sqft);
  document.getElementById('unitsSlider').setAttribute('aria-valuenow', units);
  document.getElementById('laborSlider').setAttribute('aria-valuenow', labor);
  const hoursSaved = (sqft * units * 2) - (sqft * units * 0.3);
  const monthsSaved = Math.round(hoursSaved / 160);
  document.getElementById('timeSaved').textContent = `~${monthsSaved} months`;
  document.getElementById('laborSaved').textContent = `$${Math.round(hoursSaved * labor).toLocaleString()}`;
  document.getElementById('capitalFreed').textContent = `$${(monthsSaved * 3000 * units).toLocaleString()}`;
}
['sqftSlider', 'unitsSlider', 'laborSlider'].forEach(id => document.getElementById(id).addEventListener('input', updateCalc));
updateCalc();

/* ─── CHATBOT ─── */
const CHAT_FLOW = [
  { bot: "Hi! I'm the STEEL-ONE Concierge. What best describes you?", options: ['Homeowner rebuilding after a fire', 'Developer / GC', 'Investor / Partner', 'Just exploring'] },
  { bot: "Are you in the Southern California area affected by the 2025 wildfires?", options: ['Yes — Pacific Palisades / Malibu / Altadena', 'Yes — other LA area', 'No — other California', 'Outside California'] },
  { bot: "What's your approximate project size?", options: ['Under 2,000 sq ft', '2,000–5,000 sq ft', '5,000–20,000 sq ft', '20,000+ sq ft / multi-unit'] },
  { bot: "What's your estimated timeline to break ground?", options: ['Immediately / ASAP', 'Within 3 months', '3–12 months', 'Still planning'] },
  { bot: "What matters most to you?", options: ['Speed to completion', 'Fire / safety resistance', 'Cost savings', 'Sustainability / LEED'] },
  { bot: "Perfect! STEEL-ONE sounds like an ideal fit. Roman's team will reach out within 24 hours.", options: ['Take me to the contact section', "I'll reach out myself"] }
];
let chatStep = 0, chatOpen = false;
const chatBubble = document.getElementById('chatBubble');
const chatPanel = document.getElementById('chatPanel');
const chatMessages = document.getElementById('chatMessages');
const chatOptions = document.getElementById('chatOptions');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');

function addMsg(text, type) {
  const d = document.createElement('div');
  d.className = `chat-msg ${type}`;
  d.textContent = text;
  chatMessages.appendChild(d);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function addTyping() {
  const d = document.createElement('div');
  d.className = 'chat-typing'; d.setAttribute('aria-label', 'Typing…');
  d.innerHTML = '<span></span><span></span><span></span>';
  chatMessages.appendChild(d); chatMessages.scrollTop = chatMessages.scrollHeight;
  return d;
}
function showOptions(opts) {
  chatOptions.innerHTML = '';
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'chat-option-btn'; b.textContent = o;
    b.onclick = () => handleOption(o);
    chatOptions.appendChild(b);
  });
}
function handleOption(text) {
  addMsg(text, 'user'); chatOptions.innerHTML = ''; chatStep++;
  if (text === 'Take me to the contact section') {
    setTimeout(() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' }), 400); return;
  }
  if (chatStep < CHAT_FLOW.length) {
    const ty = addTyping();
    setTimeout(() => { ty.remove(); addMsg(CHAT_FLOW[chatStep].bot, 'bot'); showOptions(CHAT_FLOW[chatStep].options); }, 900);
  } else {
    const ty = addTyping();
    setTimeout(() => { ty.remove(); addMsg("Thank you! Check your email for a follow-up within 24 hours. You can also call (310) 999-5015 directly.", 'bot'); }, 1000);
  }
}
function initChat() {
  chatMessages.innerHTML = ''; chatOptions.innerHTML = ''; chatStep = 0;
  const ty = addTyping();
  setTimeout(() => { ty.remove(); addMsg(CHAT_FLOW[0].bot, 'bot'); showOptions(CHAT_FLOW[0].options); }, 800);
}
function toggleChat() {
  chatOpen = !chatOpen;
  chatPanel.classList.toggle('open', chatOpen);
  chatPanel.setAttribute('aria-hidden', !chatOpen);
  chatBubble.classList.toggle('open', chatOpen);
  chatBubble.textContent = chatOpen ? '✕' : '💬';
  chatBubble.setAttribute('aria-label', chatOpen ? 'Close chat' : 'Open chat assistant');
  if (chatOpen && chatMessages.children.length === 0) initChat();
}
chatBubble.addEventListener('click', toggleChat);
chatBubble.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleChat(); } });

function handleFreeText() {
  const t = chatInput.value.trim();
  if (!t) return;
  addMsg(t, 'user'); chatInput.value = ''; chatOptions.innerHTML = '';
  const ty = addTyping();
  setTimeout(() => { ty.remove(); addMsg("Thanks! Reach us at 1000pacific@gmail.com or (310) 999-5015.", 'bot'); }, 1000);
}
chatSendBtn.addEventListener('click', handleFreeText);
chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleFreeText(); });