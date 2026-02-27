const icons = document.querySelectorAll(".social-icons img");

// Fade icons in when they scroll into view
const iconObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(icons).indexOf(entry.target);

                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4,
    }
);

icons.forEach((icon) => iconObserver.observe(icon));