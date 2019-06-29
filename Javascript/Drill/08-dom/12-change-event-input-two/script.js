/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('pass-one').addEventListener ('input', () => {
        let valeur = document.getElementById('pass-one').value // pour retourner la valeur du mdp
        let longval = valeur.length;
        let val = document.getElementById('validity'); // retourn la valeur du champ de l'id

        if (valeur.length <= 8) {
            let nombre = 0;
            for (i=0;i<longval;i++) {
                if (!isNaN(valeur[i])) { // valeur nombre
                    nombre++
                }
            }
                if (nombre>=2) {
                    if(valeur.length>=8) {
                        val.innerText='Ok';
                    }
                }
    }
    })
})();
