function clickBody() {
    var audio = new Audio("./sons/theme-song.mp3");
    audio.play();
  
    // Remove o evento de clique após a primeira execução
    document.body.removeEventListener("click", clickBody);
  }
  
  document.body.addEventListener("click", clickBody);
  