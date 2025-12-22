const overlay = document.getElementById('overlay');
const video = document.getElementById('video');
const marker = document.getElementById('marker');

let unlocked = false;

// Paso 1: gesto del usuario (OBLIGATORIO en iOS)
overlay.addEventListener('click', () => {
  overlay.style.display = 'none';

  setTimeout(() => {
    video.play()
      .then(() => {
        unlocked = true;
      })
      .catch(() => {});
  }, 300);
});

// Paso 2: controlar reproducción según el marcador
marker.addEventListener('markerFound', () => {
  if (unlocked) {
    video.play().catch(() => {});
  }
});

marker.addEventListener('markerLost', () => {
  video.pause();
});
