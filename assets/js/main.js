// main.js

let divs = document.querySelectorAll(".grid-container div");

function randomNumber(min, max) {
    return Math.random() * (10 - 2) + 2;
}

function randomize() {
    console.log(divs.length, "randomize!");
    divs.forEach(function(div){
        let scale = randomNumber(0.9, 1.1);
        let translateX = randomNumber(-20, 20);
        let translateY = randomNumber(-20, 20);

        if (Math.random() > 0.5) {
            scale = 1;
            translateX = randomNumber(-30, 30);
            translateY = randomNumber(-30, 30);
        }

        div.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    });
}

document.addEventListener("click", randomize);
