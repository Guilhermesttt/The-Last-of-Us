// Detectar se é um dispositivo touch (mobile ou tablet)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Som de hover
let lastHoverTime = 0;
const hoverCooldown = 100;

function playHoverSound(event) {
    const now = Date.now();
    if (now - lastHoverTime > hoverCooldown) {
        const som = new Audio("../sons/Tlou Swipe Sound.mp3");
        som.volume = 0.6; // Volume mais baixo
        som.play();
        lastHoverTime = now;
    }
}

// Som de clique
let lastClickTime = 0;
const clickCooldown = 100;

function playClickSound(event) {
    const now = Date.now();
    if (now - lastClickTime > clickCooldown) {
        const som = new Audio("../sons/UI SFX.mp3");
        som.volume = 0.6; // Volume mais baixo
        som.play();
        lastClickTime = now;
    }
}

// Aplicando nos elementos
document.querySelectorAll('a, button').forEach(function(element) {
    if (!isTouchDevice) {
        // Só adiciona som de hover em dispositivos não-touch
        element.addEventListener('mouseover', playHoverSound);
    }
    element.addEventListener('click', playClickSound);
});
