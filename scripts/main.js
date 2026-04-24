document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons img");

  if (!icons.length) return;

  const iconObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Array.from(icons).indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 150);

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.4,
    },
  );

  icons.forEach((icon) => iconObserver.observe(icon));
});

// Section title underline animation
const titleLines = document.querySelectorAll(".section-title-line");

const lineObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // slight delay for nicer feel
      setTimeout(() => {
        entry.target.classList.add("animate");
      }, 150);

      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  },
);

titleLines.forEach((line) => lineObserver.observe(line));

// Image animation - fade in and up
document.addEventListener("DOMContentLoaded", () => {
  const animatedImages = document.querySelectorAll(".about-image, .music-card-image");

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const image = entry.target;

        // Get index relative to all images
        const index = Array.from(animatedImages).indexOf(image);

        setTimeout(() => {
          image.classList.add("animate");
        }, index * 100); // adjust speed here

        observer.unobserve(image);
      });
    },
    {
      threshold: 0.25,
    },
  );

  animatedImages.forEach((image) => imageObserver.observe(image));
});
