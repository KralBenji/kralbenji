document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".site-nav");

  if (!hamburger || !navMenu) return;

  // Toggle menu + hamburger animation
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });

  // Reset on resize (tablet/desktop)
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});
