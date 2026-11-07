// Progressive enhancement only — the page works without this file.
(() => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }

  // Back-to-top button in the footer
  const toTop = document.querySelector('.to-top');
  if (toTop) {
    toTop.hidden = false;
    toTop.addEventListener('click', () => window.scrollTo({ top: 0 }));
  }
})();
