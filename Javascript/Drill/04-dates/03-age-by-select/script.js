/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {
    let day = document.getElementById("dob-day").value;
    let month = document.getElementById("dob-month").value;
    let year = document.getElementById("dob-year").value;

    function calcul() {
        let today = new Date();
        let age = today.getFullYear() + today.getMonth() + today.getDay();

        if (((today.getMonth() + 1) - month < 0)) {

            let resultat = (today.getFullYear() - year - 1);
            console.log(resultat);
        } else {
            let resultat = (today.getFullYear() - year);
            console.log(resultat);
        }

    };

    calcul();
})