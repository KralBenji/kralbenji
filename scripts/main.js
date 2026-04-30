document.addEventListener("DOMContentLoaded", () => {
  initSectionTitleLines();
  initImageAnimations();
  initContentAnimations();
  initSocialIconAnimations();
});

/* ==========================
   Section Title  Animation
========================== */

function initSectionTitleLines() {
  const titleLines = document.querySelectorAll(".section-title, .section-title-line");

  if (!titleLines.length) return;

  const lineObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

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
}

/* ==========================
   Image Fade-Up Animation
========================== */

function initImageAnimations() {
  const animatedImages = document.querySelectorAll(".about-image, .about-story-image, .music-card-image");

  if (!animatedImages.length) return;

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const image = entry.target;
        const index = Array.from(animatedImages).indexOf(image);

        setTimeout(() => {
          image.classList.add("animate");
        }, index * 50);

        observer.unobserve(image);
      });
    },
    {
      threshold: 0.25,
    },
  );

  animatedImages.forEach((image) => imageObserver.observe(image));
}

/* ==========================
   Reusable Content Animations
========================== */

function initContentAnimations() {
  const animatedItems = document.querySelectorAll(".fade-up, .fade-in-left");

  if (!animatedItems.length) return;

  const contentObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const parent = entry.target.parentElement;
        const siblings = Array.from(parent.querySelectorAll(".fade-up, .fade-in-left"));
        const index = siblings.indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add("animate");
        }, index * 200); // 👈 stagger timing

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25,
    },
  );

  animatedItems.forEach((item) => contentObserver.observe(item));
}

/* ==========================
   Social Icon Animation
========================== */

function initSocialIconAnimations() {
  const socialLinks = document.querySelectorAll(".social-link");

  if (!socialLinks.length) return;

  const socialObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = Array.from(socialLinks).indexOf(entry.target);

        setTimeout(() => {
          entry.target.classList.add("animate");
        }, index * 100);

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.25,
    },
  );

  socialLinks.forEach((link) => socialObserver.observe(link));
}
