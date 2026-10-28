document.documentElement.classList.add('js-enabled');
document.getElementById('year').textContent = new Date().getFullYear();

const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const setMenuOpen = (isOpen) => {
  nav?.classList.toggle('open', isOpen);
  button?.setAttribute('aria-expanded', String(isOpen));
  button?.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
};

button?.addEventListener('click', () => {
  setMenuOpen(!nav?.classList.contains('open'));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  setMenuOpen(false);
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) {
    setMenuOpen(false);
    button?.focus();
  }
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
