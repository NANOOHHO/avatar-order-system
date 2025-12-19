// script.js — gallery + background particles + modal
document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.thumbs img');
  const preview = document.querySelector('#previewArea img');
  const modal = document.getElementById('modal');
  const openGalleryBtn = document.getElementById('openGallery');
  const closeModalBtn = document.getElementById('closeModal');
  const modalGallery = document.getElementById('modalGallery');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  // Function to change preview with smooth fade + zoom effect
  function changePreviewImage(newSrc, thumbIndex) {
    preview.classList.add('fade-out');
    setTimeout(() => {
      preview.src = newSrc;
      preview.setAttribute('data-current-index', thumbIndex);
      // Force reflow to trigger animation
      preview.offsetHeight;
      preview.classList.remove('fade-out');
      updateThumbsVisibility();
    }, 600);
  }

  // Hide thumbs that match the current preview
  function updateThumbsVisibility() {
    const currentIndex = preview.getAttribute('data-current-index');
    thumbs.forEach((t, index) => {
      if (index == currentIndex) {
        t.style.display = 'none';
      } else {
        t.style.display = 'block';
      }
    });
  }

  // Auto-preview: cycle through images every 5 seconds
  let currentThumbIndex = 0;
  function autoPreview() {
    if (thumbs.length > 0) {
      const large = thumbs[currentThumbIndex].getAttribute('data-large');
      changePreviewImage(large, currentThumbIndex);
      currentThumbIndex = (currentThumbIndex + 1) % thumbs.length;
      setTimeout(autoPreview, 5000);
    }
  }
  autoPreview();

  // Thumbs click -> change preview and reset auto-cycle
  thumbs.forEach((t, index) => {
    t.addEventListener('click', () => {
      const large = t.getAttribute('data-large');
      changePreviewImage(large, index);
      currentThumbIndex = index;
    });
  });

  // Open modal and populate gallery from thumbs
  openGalleryBtn.addEventListener('click', () => {
    modalGallery.innerHTML = '';
    thumbs.forEach(t => {
      const img = document.createElement('img');
      img.src = t.getAttribute('data-large');
      modalGallery.appendChild(img);
    });
    modal.style.display = 'flex';
  });

  closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none' });

  // Background canvas particles (simple)
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let W = canvas.width = innerWidth;
  let H = canvas.height = innerHeight;
  window.addEventListener('resize', () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight; });

  const particles = [];
  for(let i=0;i<90;i++){
    particles.push({
      x: Math.random()*W,
      y: Math.random()*H,
      s: 0.6 + Math.random()*1.6,
      vx: (Math.random()-0.5)*0.4,
      vy: (Math.random()-0.5)*0.4,
      hue: 240 + Math.random()*80
    });
  }

  function draw(){
    ctx.clearRect(0,0,W,H);
    // soft gradient glow
    const g = ctx.createLinearGradient(0,0,W,H);
    g.addColorStop(0, 'rgba(50,10,80,0.07)');
    g.addColorStop(1, 'rgba(2,6,20,0.6)');
    ctx.fillStyle = g;
    ctx.fillRect(0,0,W,H);

    particles.forEach(p=>{
      p.x += p.vx;
      p.y += p.vy;
      if(p.x<0) p.x = W;
      if(p.x>W) p.x = 0;
      if(p.y<0) p.y = H;
      if(p.y>H) p.y = 0;

      // glow circle
      const rad = p.s * 6;
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, 0.06)`;
      ctx.arc(p.x, p.y, rad*6, 0, Math.PI*2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue},80%,60%,0.18)`;
      ctx.arc(p.x, p.y, rad*2, 0, Math.PI*2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
});

