# 🌟 Welcome to My Portfolio Gallery

<div class="cover">
  <img src="assets/logo.png" alt="Logo" class="cover-logo"/>
  <h1 class="cover-title">My Portfolio Gallery</h1>
  <p class="cover-subtitle">A collection of my lectures, labs, and projects built with ❤️ using Jupyter Book.</p>
  <button class="cover-button" onclick="document.querySelector('.tab-header').scrollIntoView({behavior:'smooth'})">
    🚀 Explore Portfolio
  </button>
</div>

<div class="tab-header">
  <div class="tab active" onclick="openSection('lectures')">📘 Lectures</div>
  <div class="tab" onclick="openSection('labs')">🧪 Laboratories</div>
  <div class="tab" onclick="openSection('projects')">🚀 Projects</div>
</div>

<div id="lectures" class="tab-content active">
  <div class="portfolio-grid">
    <div class="portfolio-card" onclick="window.location.href='Lectures/lecture1.html'">
      <h3>Lecture 1 — Fundamentals</h3>
      <p>Introduction to signal processing and time-frequency analysis.</p>
    </div>
  </div>
</div>

<div id="labs" class="tab-content">
  <div class="portfolio-grid">
    <div class="portfolio-card" onclick="window.location.href='Laboratories/laboratory1.html'">
      <h3>Laboratory 1 — Waveform Analysis</h3>
      <p>Exploring waveform characteristics and feature extraction.</p>
    </div>
  </div>
</div>

<div id="projects" class="tab-content">
  <div class="portfolio-grid">
    <div class="portfolio-card" onclick="window.location.href='Projects/project1.html'">
      <h3>Project 1 — Heart Sound Detection</h3>
      <p>Hybrid TCN-SNN model for detecting murmurs in heart sounds.</p>
    </div>
  </div>
</div>
