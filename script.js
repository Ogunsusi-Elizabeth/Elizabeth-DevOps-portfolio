const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isExpanded));
  siteNav.classList.toggle('is-open', !isExpanded);
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    siteNav.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
