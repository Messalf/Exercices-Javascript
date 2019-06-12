// Exo 1
/*
let bgchange = document.getElementById("character");

addEventListener("keypress", colorchange);

function colorchange(event) {
    console.log(event) // Sert à savoir quelle touche l'utilisateur à pressé/appuyé/...

    switch (event.key) {
        case "0":
            bgchange.style.backgroundColor = "Blue"
            break;
        case "1":
            bgchange.style.backgroundColor = "Red"
            break;
        case "2":
            bgchange.style.backgroundColor = "Black"
            break;
        case "3":
            bgchange.style.backgroundColor = "Violet"
            break;
        case "4":
            bgchange.style.backgroundColor = "Orange"
            break;
        case "5":
            bgchange.style.backgroundColor = "Purple"
            break;
        case "6":
            bgchange.style.backgroundColor = "Green"
            break;
        case "7":
            bgchange.style.backgroundColor = "Brown"
            break;
        case "8":
            bgchange.style.backgroundColor = "Gold"
            break;
        case "9":
            bgchange.style.backgroundColor = "Silver"
            break;

        default:
            bgchange.style.backgroundColor = ""
            break;
    }
}
*/

// Exo2

let Up = document.getElementById('up');
let Down = document.getElementById('down');
let Left = document.getElementById('left');
let Right = document.getElementById('right');

addEventListener('keydown', reduceopacity);

function reduceopacity(event) {
    console.log(event)

    switch (event.key) {
        case "ArrowUp":
            Up.classList.add('highlight');
            break;
        case "ArrowDown":
            Down.classList.add('highlight');
            break;
        case "ArrowLeft":
            Left.classList.add('highlight');
            break;
        case "ArrowRight":
            Right.classList.add('highlight');
            break;
        default:
            break;
    }
}

addEventListener('keyup', raiseopacity);

function raiseopacity(event) {
    switch (event.key) {
        case "ArrowUp":
            Up.classList.remove('highlight');
            break;
        case "ArrowDown":
            Down.classList.remove('highlight');
            break;
        case "ArrowLeft":
            Left.classList.remove('highlight');
            break;
        case "ArrowRight":
            Right.classList.remove('highlight');
            break;

        default:
            break;
    }
}
