/* becode/javascript
 *
 * /08-dom/03-select-three/script.js - 8.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelectorAll('.target').innerHTML = "owned"
    for (i=0;i<document.querySelectorAll('p.target').length; i++) {
        document.querySelectorAll('.target')[i].innerHTML = "owned"
    } // querySelectorAll = tableau = boucles
})();
