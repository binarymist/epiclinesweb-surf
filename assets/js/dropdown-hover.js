export function initDropdownHover() {
  const isDesktop = window.matchMedia('(hover: hover)').matches && window.innerWidth >= 992;
  const dropdowns = document.querySelectorAll('.navbar .dropdown');

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (isDesktop) {
      let timeout;

      dropdown.addEventListener('mouseenter', function () {
        clearTimeout(timeout);
        dropdown.classList.add('show');
        menu.classList.add('show');
        toggle.setAttribute('aria-expanded', 'true');
      });

      dropdown.addEventListener('mouseleave', function () {
        timeout = setTimeout(() => {
          dropdown.classList.remove('show');
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }, 200);
      });

      // ✅ Allow normal navigation on click
      toggle.addEventListener('click', function (e) {
        const href = toggle.getAttribute('href');
        if (href && href !== '#') {
          window.location.href = href;
        }
      });
    }
  });
}
