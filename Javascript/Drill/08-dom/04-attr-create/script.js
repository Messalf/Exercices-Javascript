/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let imagedata = document.getElementById('source').getAttribute('data-image'); // récupérer la valeur de l'attribut dont l'id est source
    let selectid = document.getElementById('target'); // se mettre dans la balise où on souhaite la créer
    let newelement = document.createElement('img'); // création de la balise voulue
    selectid.appendChild(newelement); // on lie la balise qu'on a créé avec celle déjà existante
    newelement.setAttribute('src', imagedata); // d'abord ce qu'on veut créer et ensuite sa valeur
    document.getElementById('source').remove(); // selectionner la suppression souhaitée

})();
