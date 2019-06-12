let sing = "pomme";
let plur = "pommes";
let result = prompt ("Combien de pomme(s) as-tu ?");

if (result < 2) {
    console.log (`Je possède`+" "+ result +" "+ sing);

} else if (result >= 2) {
    console.log (`Je possède`+" "+ result +" "+ plur);
}