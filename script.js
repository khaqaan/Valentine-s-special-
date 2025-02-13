// Autoplay music with fade-in effect
let music = new Audio("https://drive.google.com/uc?export=download&id=1DGf6xqUatSLhxz-UCeSqcfKAf2Qz2xsK");
music.volume = 0;
music.play();

let fadeIn = setInterval(() => {
    if (music.volume < 1) {
        music.volume += 0.05;
    } else {
        clearInterval(fadeIn);
    }
}, 200);

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);

// Show Love Message
function showMessage() {
    let message = document.getElementById("hiddenMessage");
    message.style.opacity = 1;
}

setTimeout(showMessage, 3000);
