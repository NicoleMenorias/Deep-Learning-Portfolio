document.addEventListener("DOMContentLoaded", function() {
  // Glowing cursor trail
  const trail = document.createElement("div");
  trail.style.position = "fixed";
  trail.style.pointerEvents = "none";
  trail.style.width = "15px";
  trail.style.height = "15px";
  trail.style.borderRadius = "50%";
  trail.style.background = "radial-gradient(circle, #00e6ff, #ff00d4)";
  trail.style.opacity = "0.6";
  trail.style.zIndex = "9999";
  trail.style.transition = "transform 0.1s ease-out";
  document.body.appendChild(trail);

  document.addEventListener("mousemove", e => {
    trail.style.transform = `translate(${e.pageX - 7}px, ${e.pageY - 7}px)`;
  });

  // Tab animations
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tab.classList.add("active");
      setTimeout(() => tab.classList.remove("active"), 400);
    });
  });

  // Gentle parallax background
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    document.body.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  });
});
