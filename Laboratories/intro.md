---
title: "My Portfolio Gallery"
---

# 🧪 Laboratory Experiments

<p align="center">
  <img src="assets/logo.png" alt="Logo" width="120">
</p>

Hands-on coding sessions and applied data experiments.  
Click a laboratory card below to explore each interactive notebook.

<div class="gallery-section">

  <a class="gallery-card" href="../Laboratories/laboratory1.html">
    <h3>Laboratory 1</h3>
    <p>Exploring Data Fundamentals</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory2.html">
    <h3>Laboratory 2</h3>
    <p>Data Visualization and Insights</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory3.html">
    <h3>Laboratory 3</h3>
    <p>Regression Analysis and Forecasting</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory4.html">
    <h3>Laboratory 4</h3>
    <p>Time Series Modeling</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory5.html">
    <h3>Laboratory 5</h3>
    <p>Deep Learning Fundamentals</p>
  </a>

  <a class="gallery-card" href="../Laboratories/laboratory6.html">
    <h3>Laboratory 6</h3>
    <p>Model Evaluation and Deployment</p>
  </a>

</div>

---

<style>
/* === Background Gradient for Coding Eyes === */
body, .bd-article-container {
  background: radial-gradient(circle at top left, #0b132b 0%, #1c2541 50%, #1b2a49 100%) !important;
  color: #e8f1f2 !important;
}

/* === Layout width control === */
.bd-article-container {
  max-width: 95% !important;
  margin: 0 auto !important;
  padding: 0 2.5rem !important;
}

/* === Grid layout (2 per row) === */
.gallery-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  justify-content: center;
}

/* === Glassmorphism Cards with Gradient Glow === */
.gallery-card {
  display: block;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-decoration: none;
  color: #f1f1f1;
  text-align: center;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  transition: all 0.35s ease;
  box-shadow: 0 6px 20px rgba(0, 255, 255, 0.05);
}

/* === Text inside cards === */
.gallery-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: #a5f3fc;
  letter-spacing: 0.3px;
}

.gallery-card p {
  font-size: 0.95rem;
  color: #b0bec5;
}

/* === Hover Effects (Neon Glow) === */
.gallery-card:hover {
  transform: translateY(-10px) scale(1.03);
  border-color: rgba(0, 255, 255, 0.45);
  background: rgba(0, 255, 255, 0.12);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.25);
}

.gallery-card:hover h3 {
  color: #e0ffff;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.9);
}

.gallery-card:hover p {
  color: #e0f7fa;
}

/* === Subtle Header Glow === */
h1, h2, h3 {
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.2);
}

/* === Responsive === */
@media (max-width: 900px) {
  .gallery-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .bd-article-container {
    max-width: 100% !important;
    padding: 0 1.5rem !important;
  }
}
</style>
