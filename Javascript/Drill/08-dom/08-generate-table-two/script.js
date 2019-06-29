/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let target = document.getElementById('target');
    let Table = document.createElement('table');
    target.appendChild(Table);
    let tableau = document.getElementsByTagName('table')[0];
    let row = 10;
    let col = 10;

    function multiply() {
        for (i=1; i<=row;i++) {
            let Tr = document.createElement('tr'); // pour créer les tr
            tableau.appendChild(Tr);
          
                for (j = 1; j<=col;j++) { 
                    let Td = document.createElement('td'); // pour créer les tf
                   
                    Td.innerHTML = i * j // pour multiplier les numéros de colonnes entre eux
                    Tr.appendChild(Td); // reprend les valeurs de Td pour les appliquer aux autres
                }
        }
    }
    multiply();
})();
