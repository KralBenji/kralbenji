document.addEventListener("DOMContentLoaded", () => {
  const line = document.querySelector(".about-title-line");
  const image = document.querySelector(".about-image");

  if (line) {
    setTimeout(() => {
      line.classList.add("animate");
    }, 200);
  }

  if (image) {
    setTimeout(() => {
      image.classList.add("animate");
    }, 300); // slight delay after line
  }
});
