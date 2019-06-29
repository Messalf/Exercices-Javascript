/* becode/javascript
 *
 * /08-dom/06-mini-carousel/script.js - 8.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let i = 0

    document.getElementById('next').addEventListener('click', () => {
        i = i +1 
        let image = document.getElementsByTagName('img')[0];
        image.setAttribute('src', gallery[i]);
        if(i==(gallery.length -1)) {
            i = -1;
        }
    })
})();
