/*
//exo1
let disapear = document.querySelectorAll('.hoverMe');

function fonction1() {
    this.classList.remove('color2')
    this.classList.add("color");
}
for (i = 0; i < disapear.length; i++) {
    let alldisa = disapear[i];
    alldisa.addEventListener('mouseover', fonction1);
}
//exo2
let alldiv = document.querySelectorAll('div');

function reset1 () {
    this.classList.remove("color");
    this.classList.add('color2')
}
for (i=0;i<alldiv.length;i++) {
    let alldiv2 = alldiv[i];
    alldiv2.addEventListener('click', reset1);
}*/

//exo3

let axex = document.getElementById('axe-x');
    function movex (p) {
        axex.innerHTML = "Position X :" + p.pageX
    }
    addEventListener("mousemove", movex);


let axey = document.getElementById('axe-y');
    function movey (p) {
        axey.innerHTML = "Position Y :" + p.pageY
    }
    addEventListener("mousemove", movey);
