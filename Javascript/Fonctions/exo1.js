let a = prompt(`Premier chiffre`);
let b = prompt(`Second chiffre`);


function soustraction(a, b) {
    return a-b;
}
console.log(`Résultat (-) ${soustraction(a,b)}`);

function division(a, b) {
    return a/b;
}
console.log(`Résultat (/) ${division(a,b)}`);

function multiplication(a, b) {
    return a*b;
}
console.log(`Résultat (*) ${multiplication(a,b)}`);

function pourcentage (a, b) {
    return (a/100)*b;
    
}
console.log(`Résultat (%) ${pourcentage(a,b)}`);

function kmh(a, b) {
    return a/b;
}
console.log(`Tu vas à ${kmh(a,b)}Km/h`);
