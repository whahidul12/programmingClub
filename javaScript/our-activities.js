document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".activity-card");

  // Animate icon on hover
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover");
    });
  });
});
