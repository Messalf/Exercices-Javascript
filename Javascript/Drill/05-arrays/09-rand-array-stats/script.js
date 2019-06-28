/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
        let array = [];
        for (i = 1; i <= 10; i++) {
            let aleatoire = Math.ceil(Math.random() * 100); // le random de 1 à 100
            array.push(aleatoire); // add un ou des élément(s) au tableau 
            document.getElementById(`n-${i}`).innerHTML = aleatoire; // placer le chiffre obtenu par 'aleatoire' et le place dans les champ de 1 à 10
        }
        console.log(array);

        let minim = Math.min(...array); // "..." définition : La syntaxe de décomposition permet d'étendre un itérable (par exemple une expression de tableau ou une chaîne de caractères)

        let maxi = Math.max(...array); // en lieu et place de plusieurs arguments (pour les appels de fonctions) ou de plusieurs éléments (pour les littéraux de tableaux) ou de paires clés-valeurs (pour les littéraux d'objets).

        let somme = array.reduce((x, y) => x + y); // définition reduce() : La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur

        document.getElementById('min').innerHTML = minim;
        document.getElementById('max').innerHTML = maxi;
        document.getElementById('sum').innerHTML = somme;
        document.getElementById('average').innerHTML = somme / 10;
    })
})();