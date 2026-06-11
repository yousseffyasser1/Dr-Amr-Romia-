/**
 * main.js
 * Core scripts: language switching, counters, case filtering, scroll behaviour.
 */

/* ─────────────────────────────────────────────────────────────
   1.  LANGUAGE & DIRECTION
───────────────────────────────────────────────────────────── */
const DEFAULT_LANG = "ar";
let currentLang = localStorage.getItem("lang") || DEFAULT_LANG;

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const t = translations[lang];
  const isAr = lang === "ar";

  // Direction
  document.documentElement.setAttribute("dir", isAr ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", isAr ? "ar" : "en");

  // Swap all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Swap placeholders / aria-labels where needed
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Refresh AOS so animations re-evaluate in new direction
  if (window.AOS) AOS.refresh();
}

function toggleLanguage() {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
}

/* ─────────────────────────────────────────────────────────────
   2.  NAVBAR SCROLL BEHAVIOUR
───────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Highlight active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

/* ─────────────────────────────────────────────────────────────
   3.  ANIMATED COUNTERS
───────────────────────────────────────────────────────────── */
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll(".counter-number");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          entry.target.dataset.animated = "true";
          const target = parseInt(entry.target.dataset.target, 10);
          animateCounter(entry.target, target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

/* ─────────────────────────────────────────────────────────────
   4.  CASES FILTER
───────────────────────────────────────────────────────────── */
function initCasesFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const caseCards = document.querySelectorAll(".case-card");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      caseCards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        if (matches) {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
          card.style.display = "block";
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            if (btn.dataset.filter !== "all" && card.dataset.category !== filter) {
              card.style.display = "none";
            }
          }, 350);
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   5.  SMOOTH SCROLL for anchor links
───────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });

      // Close mobile navbar if open
      const toggler = document.querySelector(".navbar-collapse");
      if (toggler && toggler.classList.contains("show")) {
        document.querySelector(".navbar-toggler")?.click();
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────────
   6.  PAGE LOADER
───────────────────────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;
  window.addEventListener("load", () => {
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 600);
  });
}

/* ─────────────────────────────────────────────────────────────
   7.  AOS INIT
───────────────────────────────────────────────────────────── */
function initAOS() {
  if (!window.AOS) return;
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });
}

/* ─────────────────────────────────────────────────────────────
   8.  WHATSAPP FLOATING BUTTON pulse
───────────────────────────────────────────────────────────── */
function initWhatsappBtn() {
  const btn = document.getElementById("whatsappFloat");
  if (!btn) return;
  // Pulse is handled via CSS, just ensure it exists
}

/* ─────────────────────────────────────────────────────────────
   BOOT
───────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  applyLanguage(currentLang);
  initNavbar();
  initCounters();
  initCasesFilter();
  initSmoothScroll();
  initAOS();
  initWhatsappBtn();

  // Language toggle button
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleLanguage);
  });
});
