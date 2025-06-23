const openBtn = document.getElementById('openBtn');
const cardContent = document.getElementById('cardContent');
const balloonsContainer = document.getElementById('balloons');
const audio = document.getElementById('song');

openBtn.addEventListener('click', () => {
  openBtn.style.display = 'none';
  cardContent.classList.remove('hidden');

  // Float balloons
  for (let i = 0; i < 30; i++) {
    const b = document.createElement('div');
    b.classList.add('balloon');
    b.style.left = Math.random() * window.innerWidth + 'px';
    b.style.background = `radial-gradient(circle at 30% 30%, #fff, hsl(${Math.random() * 360}, 70%, 60%))`;
    b.style.animationDuration = (6 + Math.random() * 3) + 's';
    balloonsContainer.appendChild(b);
  }

  // Cheers
  const cheer = new Audio('https://www.soundjay.com/human/cheering-01.mp3');
  cheer.play();
});

function blowCandles() {
  // Blow out flames
  document.querySelectorAll('.flame').forEach(f => f.style.display = 'none');

  // Show message
  document.getElementById('message').classList.remove('hidden');

  // Play music
  audio.play();

  // Glitter rain
  for (let i = 0; i < 100; i++) {
    const g = document.createElement('div');
    g.className = 'glitter';
    g.style.left = Math.random() * window.innerWidth + 'px';
    g.style.top = -Math.random() * 100 + 'px';
    g.style.animationDuration = (2 + Math.random() * 3) + 's';
    g.style.opacity = Math.random();
    document.body.appendChild(g);
    setTimeout(() => g.remove(), 5000);
  }
}