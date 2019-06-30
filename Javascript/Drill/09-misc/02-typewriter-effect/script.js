/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let txt = document.getElementById('target');
    let nouveau = txt.innerText; // mettre le texte dans une nouvelle variable et en placer le contenu dans l'id et donc éviter un conflit = txt dans txt
    let i = 0;
    let speed = 90;
    txt.innerHTML = "";

    function typeWriter() {
        if(i<nouveau.length){
            txt.innerHTML += nouveau.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
})();

// code fait à la journée de consolidation le 27/06.
