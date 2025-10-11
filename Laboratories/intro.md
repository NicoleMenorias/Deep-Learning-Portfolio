---
title: "My Portfolio Gallery"
---

# 🧪 Laboratory Experiments

<p align="center">
  <img src="assets/logo.png" alt="Logo" width="120">
</p>

## Laboratory Experiments

Hands-on coding sessions and applied data experiments.  
Click a laboratory card below to explore each interactive notebook.

<div class="gallery-section">

  <div class="gallery-card">
    <h3>Laboratory 1</h3>
    <p>Exploring Data Fundamentals</p>
  </div>

  <div class="gallery-card">
    <h3>Laboratory 2</h3>
    <p>Data Visualization and Insights</p>
  </div>

  <div class="gallery-card">
    <h3>Laboratory 3</h3>
    <p>Regression Analysis and Forecasting</p>
  </div>

  <div class="gallery-card">
    <h3>Laboratory 4</h3>
    <p>Time Series Modeling</p>
  </div>

  <div class="gallery-card">
    <h3>Laboratory 5</h3>
    <p>Deep Learning Fundamentals</p>
  </div>

  <div class="gallery-card">
    <h3>Laboratory 6</h3>
    <p>Model Evaluation and Deployment</p>
  </div>

</div>

---

<style>
/* === Make Main Content Full Width === */
.bd-article-container {
  max-width: 95% !important; /* widen overall content */
  margin: 0 auto !important; /* center it */
  padding: 0 2rem !important; /* add breathing space on the sides */
}

/* === Gallery Section === */
.gallery-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* wider cards */
  gap: 2rem; /* spacing between cards */
  margin-top: 2rem;
  justify-content: center;
}

/* === Gallery Card Styling === */
.gallery-card {
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.2rem;
  padding: 2.5rem;
  text-align: center;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.gallery-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.2);
}

/* === Responsive Handling === */
@media (max-width: 768px) {
  .bd-article-container {
    max-width: 100% !important;
    padding: 0 1rem !important;
  }
  .gallery-section {
    grid-template-columns: 1fr;
  }
}
</style>
