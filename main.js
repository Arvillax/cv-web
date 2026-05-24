
// ── TOAST ──────────────────────────────────────

const toastEl = document.getElementById('toast');
let toastTimer = null;

function showToast(message, duration = 2800) {
  toastEl.textContent = message;
  toastEl.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('show');
  }, duration);
}


// ──  SCROLL REVEAL ──────────────────────────────

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animar solo una vez
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach((section) => observer.observe(section));


// ── DINÁMICO EN EL FOOTER ─────────────────

(function setYear() {
  const yearSpans = document.querySelectorAll('.footer-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach((el) => { el.textContent = currentYear; });
})();