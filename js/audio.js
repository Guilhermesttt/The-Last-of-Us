window.addEventListener("load", function () {
  const audio = new Audio("sons/Tema Jogo.mp3");
  audio.preload = "auto";
  audio.loop = true;        // toca em loop
  audio.volume = 0.1;       // volume entre 0.0 e 1.0

  // Tentativa automática de tocar o som
  audio.play().catch(() => {
    // Se o navegador bloquear autoplay, só toca com interação do usuário
    const playOnInteraction = () => {
      audio.play();
      document.removeEventListener('click', playOnInteraction);
    };
    document.addEventListener('click', playOnInteraction);
  });
});
