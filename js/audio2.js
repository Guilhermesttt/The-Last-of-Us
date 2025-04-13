window.addEventListener("load", function() {
  var audio = new Audio("../sons/Tlou Soundtrack 2.mp3");
  audio.volume = 0.1; // Definindo o volume para 0.1
  audio.loop = true; // Fazendo a música tocar em loop (se necessário)
  audio.play().catch((err) => {
    console.warn("Autoplay bloqueado pelo navegador:", err);
  });
});
