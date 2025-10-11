# 🧪 Laboratory Gallery

<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <img src="../assets/logo.png" alt="Logo" class="cover-logo"/>
  <h1>Laboratory Experiments</h1>
  <p>Hands-on coding sessions and applied data experiments. Select a laboratory below to explore its notebook.</p>

  <div class="tab-header">
    <a class="tab" href="../Lectures/intro.html">📘 Lectures</a>
    <a class="tab active" href="../Laboratories/intro.html">🧪 Laboratories</a>
    <a class="tab" href="../Projects/intro.html">💡 Projects</a>
  </div>

  <div class="gallery">
    <a class="gallery-card" href="../Laboratories/laboratory1.html">
      <h3>Laboratory 1</h3>
      <p>Exploring Data Fundamentals</p>
    </a>

    <a class="gallery-card" href="../Laboratories/laboratory2.html">
      <h3>Laboratory 2</h3>
      <p>Signal Processing Basics</p>
    </a>

    <a class="gallery-card" href="../Laboratories/laboratory3.html">
      <h3>Laboratory 3</h3>
      <p>Feature Extraction & Analysis</p>
    </a>

    <a class="gallery-card" href="../Laboratories/laboratory4.html">
      <h3>Laboratory 4</h3>
      <p>Model Training & Evaluation</p>
    </a>

    <a class="gallery-card" href="../Laboratories/laboratory5.html">
      <h3>Laboratory 5</h3>
      <p>Model Optimization & Validation</p>
    </a>

    <a class="gallery-card" href="../Laboratories/laboratory6.html">
      <h3>Laboratory 6</h3>
      <p>Final Integration Project</p>
    </a>
  </div>
</div>

<style>
.cover {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.cover-logo {
  width: 120px;
  margin-bottom: 1.2rem;
  animation: float 3s ease-in-out infinite;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.4;
  animation: pulse 8s infinite alternate;
}

.orb:nth-child(1) {
  width: 300px;
  height: 300px;
  background: #00e6ff;
  top: -50px;
  left: -100px;
}

.orb:nth-child(2) {
  width: 400px;
  height: 400px;
  background: #ff00d4;
  bottom: -80px;
  right: -120px;
}

.tab-header {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.tab {
  text-decoration: none;
  cursor: pointer;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #f5f5f5;
}

.tab.active {
  background: linear-gradient(90deg, #00e6ff, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(-3px);
}

.tab:hover {
  background: linear-gradient(90deg, #00e6ff, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateY(-3px);
}

/* Gallery Section */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 3rem;
  max-width: 900px;
}

.gallery-card {
  position: relative;
  width: 250px;
  height: 160px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  text-align: left;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  text-decoration: none;
  color: #fff;
}

.gallery-card:hover {
  transform: translateY(-8px) scale(1.03);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
}

.gallery-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #00e6ff, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gallery-card p {
  font-size: 0.9rem;
  color: #ddd;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.3; }
  to { transform: scale(1.2); opacity: 0.5; }
}
</style>
