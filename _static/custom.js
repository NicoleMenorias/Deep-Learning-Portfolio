document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const hero = document.querySelector(".hero");

  // Scroll animation for cards
  const revealCards = () => {
    const triggerBottom = window.innerHeight * 0.9;
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < triggerBottom) {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
      }
    });
  };

  window.addEventListener("scroll", revealCards);
  revealCards();

  // Subtle pulse animation on hero background
  let hue = 250;
  setInterval(() => {
    hue = (hue + 1) % 360;
    hero.style.background = `linear-gradient(120deg, hsl(${hue}, 70%, 50%), hsl(${(hue+60)%360}, 70%, 60%))`;
  }, 80);
});
