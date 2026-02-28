document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.site-nav');

    if (!navToggle || !navMenu) {
        console.log('Nav elements not found');
        return;
    }

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');

        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        const navMenu = document.querySelector('.site-nav');
        navMenu.classList.remove('active');
    }
});