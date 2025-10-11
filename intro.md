---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# 👋 Welcome to My Portfolio Gallery

<div class="tab-header">
  <div class="tab active" onclick="openTab('lectures')">📘 Lectures</div>
  <div class="tab" onclick="openTab('laboratories')">🔬 Laboratories</div>
  <div class="tab" onclick="openTab('projects')">💡 Projects</div>
</div>

<div class="tab-content active" id="lectures">
  <div class="portfolio-card" onclick="navigateTo('Lectures/lecture1.html')">
    <h2>Lecture 1</h2>
    <p>Introduction and Concepts</p>
  </div>
</div>

<div class="tab-content" id="laboratories">
  <div class="portfolio-card" onclick="navigateTo('Laboratories/laboratory1.html')">
    <h2>Laboratory 1</h2>
    <p>Exploring the basics</p>
  </div>
  <div class="portfolio-card" onclick="navigateTo('Laboratories/laboratory2.html')">
    <h2>Laboratory 2</h2>
    <p>Deeper data exploration</p>
  </div>
</div>

<div class="tab-content" id="projects">
  <div class="portfolio-card" onclick="navigateTo('Projects/project1.html')">
    <h2>Project 1</h2>
    <p>Final Capstone Project</p>
  </div>
</div>
