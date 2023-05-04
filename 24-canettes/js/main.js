let images = [
    { chemin: "img/can_bleue.png", couleur: "Cbleue" },
    { chemin: "img/can_jaune.png", couleur: "Cjaune" },
    { chemin: "img/can_rouge.png", couleur: "Crouge" },
    { chemin: "img/can_verte.png", couleur: "Cverte" },
];

let zone2 = document.querySelector(".zone2");
let conteneur = document.querySelector("#choixCouleurs");
let zone1 = document.querySelector(".zone1");

let zoneTexte = document.querySelector("#zoneTexte");
let ligne = document.querySelector("#ligne");

let posX = 0;
let posY = 0;
let pas = 10;
let posHaut = document.querySelector("#posHaut");
let posBas = document.querySelector("#posBas");
let posGauche = document.querySelector("#posGauche");
let posDroite = document.querySelector("#posDroite");

let btspolices = document.querySelectorAll(["data-police"]);

btspolices.forEach(function (bts) {
    bts.onclick = intervertir;
});

function intervertir(e) {
    let police = e.getAttribute("data-police");
    console.log("oui")
    zoneTexte.style.fontFamily = police;
}

function genererImage(chemin, couleur) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", chemin);
    newImg.setAttribute("alt", "image ");
    newImg.className = couleur;
    newImg.setAttribute("onclick", couleur + "()");
    conteneur.appendChild(newImg);
}

images.forEach(function (image, i) {
    genererImage(image.chemin, image.couleur);
});


zone1.style.backgroundImage = 'url("img/can_bleue.png")';

function Cbleue() {

    zone1.style.backgroundImage = 'url("img/can_bleue.png")';
}
function Cjaune() {

    zone1.style.backgroundImage = 'url("img/can_jaune.png")';
}
function Crouge() {

    zone1.style.backgroundImage = 'url("img/can_rouge.png")';
}
function Cverte() {

    zone1.style.backgroundImage = 'url("img/can_verte.png")';
}




function majTexte(caractere) {
    zoneTexte.style.left = posX + "px";
    zoneTexte.style.top = posY + "px";
    zoneTexte.innerHTML = `<p>${caractere.value}</p>`
}

window.onload = function () {
    majTexte(this);
};

function moveTexteUp() {
    posY -= pas
    zoneTexte.style.top = posY + "px";
    majTexte(this);
}
function moveTexteDown() {
    posY += pas
    zoneTexte.style.top = posY + "px";
    majTexte(this);
}
function moveTexteLeft() {
    posX += pas
    zoneTexte.style.top = posY + "px";
    majTexte(this);
}
function moveTexteRight() {
    posX -= pas
    zoneTexte.style.top = posY + "px";
    majTexte(this);
}

