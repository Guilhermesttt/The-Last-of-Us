var teste = new Audio();
teste.src = "../sons/Tlou Swipe Sound.mp3";
teste.preload = "auto"; 
function playSound(event) {

    if (teste.paused || teste.ended) {
        teste.currentTime = 0;  
        teste.play();  
    }
}

document.querySelectorAll('a, button').forEach(function(element) {
    element.addEventListener('mouseover', playSound);
});
