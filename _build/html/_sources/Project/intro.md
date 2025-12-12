# **Project PulmoScope**

<p align="justify">
In this section, you will explore <b>PulmoScope</b>, a deep learning initiative designed to address the critical challenge of misdiagnosing respiratory diseases in resource-limited settings. This project conducts a comparative analysis of temporal deep learning models—including LSTM and Pure TCN—against a hybrid neuromorphic TCN-SNN architecture[cite: 1, 194]. The study demonstrates that the TCN-SNN model achieves a 93% overall accuracy and a remarkable 97% sensitivity for Pneumonia detection, effectively functioning as a clinical gold standard for robust, noise-resistant diagnosis.
</p>

<div class="gallery-section">

  <a class="gallery-card" href="../Project/EDA_Pulmoscope.html">
    <h3>Exploratory Data Analysis</h3>
    <p>Investigating spectral signatures of COPD and Pneumonia</p>
  </a>

  <a class="gallery-card" href="../Project/PulmoScope.html">
    <h3>Model Implementation</h3>
    <p>Deploying TCN-SNN and Grad-CAM for robust classification</p>
  </a>

  <a class="gallery-card" href="https://pulmoscope.streamlit.app/" target="_blank">
    <h3>Live Application</h3>
    <p>Interact with the deployed PulmoScope Model</p>
  </a>

</div>

---

<style>
/* === Import Poppins Font === */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* === Apply Font Globally === */
body, h1, h2, h3, p, a {
  font-family: 'Poppins', sans-serif !important;
}

/* === Page Background === */
body, .bd-article-container {
  background-color: #121212 !important; /* deep dark gray-black */
  color: #e0e0e0 !important;
}

/* === Content Layout === */
.bd-article-container {
  max-width: 95% !important;
  margin: 0 auto !important;
  padding: 0 2.5rem !important;
}

/* === Gallery Grid (Now 3 per row for desktop, responsive) === */
.gallery-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive Grid */
  gap: 2.5rem;
  margin-top: 3rem;
  justify-content: center;
}

/* === Glassmorphism Cards (Dark theme) === */
.gallery-card {
  display: block;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
  text-decoration: none;
  color: #f5f5f5;
  text-align: center;
  backdrop-filter: blur(14px) saturate(120%);
  -webkit-backdrop-filter: blur(14px) saturate(120%);
  transition: all 0.35s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
}

/* === Titles === */
.gallery-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: #ffffff;
}

/* === Descriptions === */
.gallery-card p {
  font-size: 0.95rem;
  color: #cccccc;
}

/* === Hover Effects === */
.gallery-card:hover {
  transform: translateY(-10px) scale(1.03);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.12);
}

.gallery-card:hover h3 {
  color: #ffffff;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
}

.gallery-card:hover p {
  color: #f0f0f0;
}

/* === Headings Glow === */
h1, h2, h3 {
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

/* === Responsive === */
@media (max-width: 900px) {
  .bd-article-container {
    max-width: 100% !important;
    padding: 0 1.5rem !important;
  }
}
</style>