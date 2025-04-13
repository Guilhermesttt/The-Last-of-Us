// floating-dust.js
document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('floatingDustCanvas');
  const ctx = canvas.getContext('2d');
  
  // Configurar canvas
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Configurações da poeira flutuante
  const dustCount = Math.floor((window.innerWidth * window.innerHeight) / 1500);
  const dustParticles = [];
  
  class FloatingDust {
    constructor() {
      this.reset();
      this.baseY = Math.random() * canvas.height;
      this.floatRange = Math.random() * 20 + 10;
      this.floatSpeed = Math.random() * 0.002 + 0.001;
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.2 + 0.3;
      this.speedX = Math.random() * 0.05 - 0.025;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.angle = Math.random() * Math.PI * 2;
    }
    
    update() {
      this.angle += this.floatSpeed;
      this.y = this.baseY + Math.sin(this.angle) * this.floatRange;
      this.x += this.speedX;
      
      if (this.x > canvas.width + 5) this.x = -5;
      if (this.x < -5) this.x = canvas.width + 5;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Inicializar partículas
  for (let i = 0; i < dustCount; i++) {
    dustParticles.push(new FloatingDust());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    dustParticles.forEach(dust => {
      dust.update();
      dust.draw();
    });
    
    requestAnimationFrame(animate);
  }

  animate();
});