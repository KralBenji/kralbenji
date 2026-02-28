// Music Listen Button - Toggle
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".listen-toggle");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const card = button.closest(".music-card");
            card.classList.toggle("active");
        });
    });
});