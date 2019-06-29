/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        window.lib.getPosts ((error, table) => {
            console.log(table);
            table.forEach(e => { // boucle pour selectionner chacun des éléments du tableau
                window.lib.getComments(e.id,(error, comments) => { // création de la propriété comments grâce à getComments() pour chaque élément du tableau 
                    e['comments'] = comments;
                })
            })
        })
    })
})();
