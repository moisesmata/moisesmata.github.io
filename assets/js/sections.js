(() => {
  const menu = document.querySelector('[data-section-menu]');
  if (!menu) return;

  const links = Array.from(menu.querySelectorAll('[data-section-link]'));
  const panels = Array.from(document.querySelectorAll('[data-section]'));
  const aliases = { publications: 'research', projects: 'blog', music: 'research', misc: 'research' };

  function selectSection() {
    const fragment = window.location.hash.slice(1);
    const requested = aliases[fragment] || fragment;
    const selected = panels.find(panel => panel.id === requested);
    if (!selected && fragment) {
      const target = document.getElementById(fragment);
      const containingPanel = target && target.closest('[data-section]');
      panels.forEach(panel => { panel.hidden = containingPanel ? panel !== containingPanel : false; });
      links.forEach(link => link.removeAttribute('aria-current'));
      return;
    }

    const activeId = selected ? selected.id : 'research';
    panels.forEach(panel => { panel.hidden = panel.id !== activeId; });
    links.forEach(link => {
      if (link.hash === '#' + activeId) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  menu.addEventListener('click', event => {
    const link = event.target.closest('[data-section-link]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (window.location.hash !== link.hash) {
      window.history.pushState(null, '', link.hash);
    }
    selectSection();
  });

  window.addEventListener('popstate', selectSection);
  window.addEventListener('hashchange', selectSection);
  selectSection();
})();
