document.addEventListener('DOMContentLoaded', function () {
  // Only apply hover behavior on desktop (not touch devices)
  if (window.matchMedia('(hover: hover)').matches && window.innerWidth >= 992) {
    const dropdowns = document.querySelectorAll('.navbar .dropdown');

    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('mouseenter', function () {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        dropdown.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
        menu.classList.add('show');
      });

      dropdown.addEventListener('mouseleave', function () {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        dropdown.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('show');
      });
    });
  }
});

