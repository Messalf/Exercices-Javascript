/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  
    document.getElementById('run').addEventListener('click', () => {
        let passone = document.getElementById('pass-one');
        let passtwo = document.getElementById('pass-two');
        if (passone.value !== passtwo.value) {
            let a = document.querySelectorAll('input')[0].classList.add('error');
            let b = document.querySelectorAll('input')[1].classList.add('error');
    }})
})();
