/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let tableau = document.getElementById('target')
    let newtable = document.createElement('table'); // cela crée une balise de tableau

    for (i = 0; i < 10; i++) {
        let row = newtable.insertRow(0).insertCell(0); // cela va insérer des row et des cellules à l'intérieur du nouveau tableau créer
    }

    tableau.appendChild(newtable); // le nouveau tableau va se déplacer dans target

    console.log(tableau);
})();