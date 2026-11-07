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

  // Flyout: expand/collapse the Apply / Donate segmented control
  const flyout = document.querySelector('.flyout');
  const flyoutToggle = flyout && flyout.querySelector('.flyout__toggle');
  if (flyoutToggle) {
    const setOpen = (open) => flyoutToggle.setAttribute('aria-expanded', String(open));
    flyoutToggle.addEventListener('click', () => {
      setOpen(flyoutToggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', (e) => { if (!flyout.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && flyoutToggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        flyoutToggle.focus();
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
