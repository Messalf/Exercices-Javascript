/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        let today = new Date();
        
        let infos = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
            
        let heure = today.getHours() + "h" + today.getMinutes();
    document.getElementById("target").innerHTML = ((today.toLocaleString("fr-FR", infos))+" "+ heure);
    
    
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
})()
