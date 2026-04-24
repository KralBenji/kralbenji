document.addEventListener("DOMContentLoaded", () => {
  const musicCards = document.querySelectorAll(".music-card");
  const musicLinks = document.querySelectorAll(".music-links");
  const carousels = document.querySelectorAll(".music-carousel");

  musicCards.forEach((card) => {
    const listenButton = card.querySelector(".listen-toggle");
    const cardImage = card.querySelector(".music-card-image");

    function toggleListenLinks() {
      card.classList.toggle("active");
    }

    if (listenButton) {
      listenButton.addEventListener("click", toggleListenLinks);
    }

    if (cardImage) {
      cardImage.addEventListener("click", toggleListenLinks);
      cardImage.style.cursor = "pointer";
    }
  });

  musicLinks.forEach((container) => {
    const icons = container.querySelectorAll(".platform-link");

    if (icons.length % 2 !== 0) {
      container.classList.add("odd-count");
    }
  });

  carousels.forEach((carousel) => {
    const cards = carousel.querySelectorAll(".music-card");

    if (!cards.length) return;

    function updateActiveCard() {
      const carouselRect = carousel.getBoundingClientRect();
      const centerX = carouselRect.left + carouselRect.width / 2;

      let closestCard = null;
      let closestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(centerX - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestCard = card;
        }
      });

      cards.forEach((card) => card.classList.remove("active-center"));

      if (closestCard) {
        closestCard.classList.add("active-center");
      }
    }

    carousel.addEventListener("scroll", () => {
      requestAnimationFrame(updateActiveCard);
    });

    window.addEventListener("resize", updateActiveCard);

    updateActiveCard();
  });
});
