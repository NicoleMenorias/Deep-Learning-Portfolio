# Welcome to My Portfolio Gallery

<div class="cover">
  <img src="assets/logo.png" alt="Logo" class="cover-logo"/>

  <h1>Welcome to My Portfolio Gallery</h1>
  <p>Explore my lectures, laboratories, and projects — all built in Jupyter Notebook.</p>

  <div class="tab-header">
    <div class="tab" onclick="window.location.href='Lectures/intro.html'">📘 Lectures</div>
    <div class="tab" onclick="window.location.href='Laboratories/intro.html'">🧪 Laboratories</div>
    <div class="tab" onclick="window.location.href='Projects/intro.html'">💡 Projects</div>
  </div>

  <div class="glow-orb"></div>
  <div class="glow-orb"></div>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const orbs = document.querySelectorAll(".glow-orb");
  document.addEventListener("mousemove", (e) => {
    orbs.forEach((orb, i) => {
      const speed = (i + 1) * 0.03;
      orb.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
    });
  });
});
</script>

<style>
body {
  background: radial-gradient(circle at top left, #0a0f1a, #1a2b40);
  color: #f8f9fa;
  font-family: "Inter", sans-serif;
  margin: 0;
  overflow-x: hidden;
}

.cover {
  text-align: center;
  padding: 6rem 2rem;
  position: relative;
}

.cover-logo {
  width: 100px;
  margin-bottom: 1.5rem;
}

.tab-header {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 3rem;
}

.tab {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
}

.tab:hover {
  background: linear-gradient(90deg, #00e6ff, #ff00d4);
  color: transparent;
  -webkit-background-clip: text;
  transform: translateY(-5px);
  box-shadow: 0 0 25px rgba(0, 230, 255, 0.3);
}

.glow-orb {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,230,255,0.25), transparent);
  top: 10%;
  left: 30%;
  filter: blur(60px);
  z-index: -1;
  transition: transform 0.3s ease-out;
}
</style>
