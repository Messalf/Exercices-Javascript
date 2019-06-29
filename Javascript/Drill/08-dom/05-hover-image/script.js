/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let balise = document.querySelector('img');
    let out = balise.getAttribute('src');
    let over = balise.getAttribute('data-hover');

    balise.addEventListener('mouseover', () => {
        balise.src = over;
    })
    balise.addEventListener('mouseout', () => {
        balise.src = out;
    })
})();
