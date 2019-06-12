let fra = "Bonjour tout le monde";
let esp = "Hola, mundo";
let eng = "Hello world";

let response = prompt("Écrivez fra, esp ou eng");

if (response == "fra") {
    console.log (`${fra}`);


} else if (response == "esp") {
    console.log (`${esp}`);


} else if (response == "eng") {
    console.log (`${eng}`);


} else {
    console.log (`Error`);
}