/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get name() {
            return this.firstname + " " + this.lastname;
        }
        set name(name) {
            name = name.split(` `);
            this.firstname = name[0];
            this.lastname = name[1];
        }
    }

    document.getElementById('run').addEventListener('click', () => {
        let person1 = new Person ('Jean', 'Dupuis');
        console.log(person1.name);
        person1.name = 'Bernard Boulette';
        console.log(person1.name);
    })
})();
