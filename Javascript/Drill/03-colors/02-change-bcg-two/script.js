/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        let couleur = document.getElementById('color').value;
        document.body.style.backgroundColor = couleur;

        switch (couleur) {
            case 'rouge':
                document.body.style.backgroundColor = 'red';
                break;
            case 'bleu':
                document.body.style.backgroundColor = 'blue';
                break;
            case 'vert':
                document.body.style.backgroundColor = 'green';
                break;
            case 'jaune':
                document.body.style.backgroundColor = 'yellow';
                break;
        }

    })

})();