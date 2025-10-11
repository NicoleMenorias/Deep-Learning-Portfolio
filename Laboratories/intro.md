<div class="cover">
  <div class="orb"></div>
  <div class="orb"></div>

  <img src="../assets/logo.png" alt="Logo" class="cover-logo"/>
  <h1>Laboratory Experiments</h1>
  <p>Hands-on coding sessions and applied data experiments.  
  Click any laboratory card below to explore its interactive notebook.</p>

  <div class="gallery-grid">
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
/* === Global cover styling === */
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

/* === Animated background orbs === */
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

/* === Flash card grid layout === */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  width: 90%;
  max-width: 1000px;
}

/* === Individual flash card style === */
.gallery-card {
  display: block;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 1.8rem;
  text-decoration: none;
  color: #fff;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}

.gallery-card:hover {
  transform: translateY(-8px) scale(1.04);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 10px 40px rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg, rgba(0,230,255,0.2), rgba(255,0,212,0.2));
}

.gallery-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
  background: linear-gradient(90deg, #00e6ff, #ff00d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gallery-card p {
  font-size: 0.95rem;
  color: #ddd;
}

/* === Animations === */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  from { transform: scale(1); opacity: 0.3; }
  to { transform: scale(1.2); opacity: 0.5; }
}
</style>
