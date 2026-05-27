// ══════════════════════════════════════════
//  KUD "Goce Delchev" Valandovo — Scripts
// ══════════════════════════════════════════


// ── Language switcher ──────────────────────
let currentLang = 'mk';

function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  // Update button highlight
  document.getElementById('btn-mk').classList.toggle('lang-active', lang === 'mk');
  document.getElementById('btn-en').classList.toggle('lang-active', lang === 'en');

  // Update <html lang> attribute
  document.documentElement.lang = lang;

  // Update browser tab title
  document.title = lang === 'mk'
    ? 'КУД „Гоце Делчев" Валандово'
    : 'KUD "Goce Delchev" Valandovo';

  // Swap every translatable element
  document.querySelectorAll('[data-mk][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });

  // Keep mobile menu link text in sync
  document.querySelectorAll('.mobile-menu [data-mk][data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}


// ── Hamburger menu ─────────────────────────
function toggleMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
}

// Close menu when scrolling
window.addEventListener('scroll', () => {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobile-menu').classList.remove('open');
}, { passive: true });


// ── Scroll spy ─────────────────────────────
const sections = ['home', 'history', 'exercises', 'tours'];
const navLinks = document.querySelectorAll('.nav-links a');
const NAV_H    = 70;

function onScroll() {
  let active = sections[0];

  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= NAV_H + 10) {
      active = id;
    }
  }

  navLinks.forEach(a => {
    const href = a.getAttribute('href').slice(1); // strip the '#'
    a.classList.toggle('active', href === active);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on page load
