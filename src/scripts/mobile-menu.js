export function setupMobileMenu(root = document, view = window) {
  const trigger = root.querySelector('.mobile-menu-toggle');
  const menu = root.querySelector('#mobile-menu');
  const fallback = root.querySelector('[data-menu-fallback]');
  if (!trigger || !menu || !fallback || typeof menu.showModal !== 'function') return;
  if (trigger.dataset.ready) return;
  trigger.dataset.ready = 'true';

  const mobile = view.matchMedia('(max-width: 900px)');
  const closeMenu = () => {
    if (menu.open) menu.close();
    trigger.setAttribute('aria-expanded', 'false');
  };

  trigger.addEventListener('click', () => {
    if (!mobile.matches || menu.open) return;
    menu.showModal();
    menu.scrollTop = 0;
    trigger.setAttribute('aria-expanded', 'true');
  });
  menu.addEventListener('close', () => trigger.setAttribute('aria-expanded', 'false'));
  menu.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    // Keep normal browser navigation; close before the page-transition snapshot.
    closeMenu();
  });
  mobile.addEventListener('change', () => {
    if (!mobile.matches) closeMenu();
  });
  view.addEventListener('pagehide', closeMenu);
  view.addEventListener('pageshow', closeMenu);

  fallback.open = false;
  fallback.hidden = true;
  trigger.hidden = false;
}
