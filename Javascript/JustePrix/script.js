let essais = 0;
let min = 20;
let max = 80;

function random() {
    return (Math.floor(Math.random()* (max-min)+min));
}
let rand = random();
while(!jeu(prompt(`Entrez un nombre entre ` + min + ` et `+ max))){
essais++
}
function jeu(x) {
    if (x < rand){
        alert(`C'est plus grand`)
    } else if (x > rand) {
        alert(`C'est plus petit`)
    } else {
        alert(`Tu as gagné en ` + (essais+1) + ` coups`)
        return true;
    }
    return false;
}



