// Exo 1
let body=document.body;
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");
let paragraph=document.getElementById("first-paragraph");
paragraph.classList.remove("bg-lime","gray");
paragraph.classList.add("aqua");
let silver=document.querySelectorAll(".bg-silver");
for (let i=0;i<silver.length;i++){
silver[i].classList.add("bg-teal");
silver[i].classList.remove("bg-silver");
}
let block=document.querySelector("blockquote");
block.classList.add("bg-white");

//Exo2
let mytable = document.querySelector("#my-table");
mytable.classList.add("bg-purple");

let containerp = document.querySelectorAll("p");
for (let x=0;x<containerp.length;x++) {
containerp[x].classList.add("shadow");
}

//Exo3

let prelement = document.querySelectorAll("pre");
prelement[0].style.color = "white";
prelement[0].style.backgroundColor = "black";
prelement[0].style["border-top"] = "3px solid red";
prelement[0].style["border-bottom"] = "3px solid red";

let firsth3 = document.querySelector("h3");
firsth3.innerHTML = ('<em>Italic title ! yeah !</em>');

let firsth2 = document.querySelector("h2");
firsth2.innerHTML = ("<strong>HTML doens't work !</strong>");

//Exo4

let firstul = document.querySelector("ul");
let newli = document.createElement("li");
newli.innerHTML = ("Mon meilleur ami est <a href='http://www.google.com'>Google</a>")
firstul.appendChild(newli);
let alllinks = document.querySelectorAll("a");
alllinks[1].style.color = "red";

//Exo4Bis

let ol = document.querySelector("ol");
let childrens = ol.querySelectorAll("li");
let numberchildren = ol.children.length;
for (i=0;i<numberchildren;i++) {
    ol.removeChild(childrens[i]);
}

let tableau = ["Silent Teacher", "Code Monkey", "CodeCombat"];
for (i=0;i<tableau.length;i++) {
    let li = document.createElement("li");
    ol.appendChild(li);
    li.innerHTML = tableau[i];
}

