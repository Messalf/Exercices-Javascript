/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let word = document.getElementById('target');
    let lettre = word.innerText.split('');
    let size = ["100%", "120%", "140%", "160%", "180%", "200%"];
    let start = 0;
    word.innerText = ""; // vide le target

    for (let i = 0; i < lettre.length; i++) { // boucle sur ce que l'on a splité
        let nouveau = document.createElement('span'); // crée la div span
        nouveau.innerHTML = lettre[i]; // le contenu du span
        nouveau.style.fontSize = size[start]; // applique les différentes size à chaque lettre
        start++;
        if (start === size.length) {
            size.reverse(); // fonction native permettant de repartir dans l'autre sens du tableau
            start = 0;
        }
        word.appendChild(nouveau); // associe les lettres a la balise
    }

    console.log(word);
})();
// code fait à la journée de consolidation le 27/06.