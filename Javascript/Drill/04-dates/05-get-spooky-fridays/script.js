/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let year = ["janvier", "fevrier", "mars", "avril", "mai",
    "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
    
    document.getElementById("run").addEventListener("click", () => {
        let donnee = document.getElementById("year").value;
        let board = [];
        for (let month = 0; month < 12; month++) {
           let resultat = new Date(donnee, month, 13);
           if ( resultat.getDay() === 5){
               board.push(year[month]);
           };
        };
        alert(board);
});
})();
