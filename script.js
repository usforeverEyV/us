function showMessage(id) {
  document.querySelectorAll('.message-box').forEach(m => m.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

  // Estrelas aleatórias
for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = (Math.random() * 3) + 's';
    document.querySelector('.universe').appendChild(star);
}

function createCakeFlyer() {
  const cake = document.createElement('div');
  cake.textContent = '🎂';
  cake.style.position = 'absolute';
  cake.style.top = Math.random() * 70 + '%';
  cake.style.left = '-10%';
  cake.style.fontSize = '2rem';
  cake.style.zIndex = '5';
  cake.style.transition = 'transform 7s linear';
  cake.style.cursor = 'pointer';
  cake.style.pointerEvents = 'auto';

  cake.addEventListener('click', () => {
    showMessage('aniversario');
  });

  document.body.appendChild(cake);


  setTimeout(() => {
    cake.style.transform = 'translateX(120vw)';
  }, 100);


  setTimeout(() => {
    cake.remove();
  }, 11000);

  let heartInterval = setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '💖';
    heart.classList.add('heart');
    heart.style.left = cake.getBoundingClientRect().left + 15 + 'px';
    heart.style.top = cake.getBoundingClientRect().top + 15 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }, 400);

  setTimeout(() => clearInterval(heartInterval), 5000);

}


setInterval(() => {
  createCakeFlyer();
}, 6500);

function createShootingStar() {
  const star = document.createElement('div');
  star.classList.add('shooting-star');

  const startX = Math.random() * 100; 
  const startY = Math.random() * 20; 
  
  star.style.left = `${startX}%`;
  star.style.top = `${startY}%`;

 
  star.innerHTML = "🌟";


  document.querySelector('.universe').appendChild(star);


  setTimeout(() => {
      star.remove();
  }, 6000); //

}



setInterval(createShootingStar, 6000);



let musicStarted = false;
function showMessage(id) {
  document.querySelectorAll('.message-box').forEach(m => m.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  // Pausar a música de fundo
  const bgMusic = document.getElementById('bg-music');
  const estrelaMusic = document.getElementById('estrela-music');

  if (id === 'estrela') {
    bgMusic.pause();
    estrelaMusic.currentTime = 0;
    estrelaMusic.play();
  } else {
    estrelaMusic.pause();
    bgMusic.play();
  }
}

function closeMessage() {
  document.querySelectorAll('.message-box').forEach(m => m.classList.remove('active'));

  const bgMusic = document.getElementById('bg-music');
  const estrelaMusic = document.getElementById('estrela-music');

  estrelaMusic.pause();
  bgMusic.play();
}

function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw'; // Largura aleatória
    confetti.style.animationDuration = Math.random() * 2 + 2 + 's'; // Durabilidade aleatória
    document.body.appendChild(confetti);
  }
}

function showMessage(id) {
  document.querySelectorAll('.message-box').forEach(m => m.classList.remove('active'));
  const box = document.getElementById(id);
  box.classList.add('active');

  if (id === 'aniversario') {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
}

function closeMessage() {
  document.querySelectorAll('.message-box').forEach(m => m.classList.remove('active'));
}
