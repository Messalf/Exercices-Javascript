/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('pass-one').addEventListener('input', () => {
        let valeur = document.querySelector('input'); // pour récupérer la valeur de la balise input
        valeur.setAttribute('maxlength', "10"); // set les max caractères
        let caracteres = document.querySelector('#pass-one').value; // chercher la valeur
        let longueur = caracteres.length; // renvoi le nombre de caractère dans l'id
        let counter = document.getElementById('counter');
        counter.innerText = caracteres.length+"/10"; // incrémenter le compteur de caractères
    })
})();
