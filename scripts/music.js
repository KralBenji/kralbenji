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

// Wrap another icon if there's only 1 in the last row
document.querySelectorAll('.music-links').forEach(container => {
    const icons = container.querySelectorAll('.platform-link');

    if (icons.length % 2 !== 0) {
        container.classList.add('odd-count');
    }
});