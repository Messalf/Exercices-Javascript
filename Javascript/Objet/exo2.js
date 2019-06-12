let tableau = [{
    title: 'Épée',
    physic: 20,
    magic: 0,
    minLevel: 10,
    available: true,
},
    {
    title: 'Hache',
    physic: 44,
    magic: 0,
    minLevel: 18,
    available: false,
},
    {
    title: 'Sceptre',
    physic: 5,
    magic: 20,
    minLevel: 9,
    available: true,
},
{
    title: 'Baguette',
    physic: 3,
    magic: 30,
    minLevel: 13,
    available: false,
}]
/*
function afficherall() {
    for (const key in tableau) {
        console.log(tableau[key].title)
    }
}
    afficherall()
*/

/*
function availableitem() {
    for (let i=0;i<tableau.length; i++) {
        if (tableau[i].available===true) {
            console.log(tableau[i].title);
        }
    }
}
availableitem()
*/
/*
function lvlmin10() {
    for (let i=0; i<tableau.length; i++){
        if (tableau[i].minLevel>=10) {
           console.log(tableau[i].title);
        }
    }
}
lvlmin10();
*/