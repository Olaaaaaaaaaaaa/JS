let zone1 = document.querySelector("#zone1");
let zone2 = document.querySelector("#zone2");
let grandeVignette = document.querySelector(".grandeVignette");
let nom = document.querySelector(".nom");
let categorie = document.querySelector(".categorie");
let prix = document.querySelector(".prix");


let elements = [
    { image: "img/animal1.jpg", nom: "animal1", categorie: "animal", prix: 200 },
    { image: "img/animal2.jpg", nom: "animal2", categorie: "animal", prix: 200 },
    { image: "img/animal3.jpg", nom: "animal3", categorie: "animal", prix: 200 },
    { image: "img/animal4.jpg", nom: "animal4", categorie: "animal", prix: 200 },
    { image: "img/paysage1.jpg", nom: "paysage1", categorie: "paysage", prix: 100 },
    { image: "img/paysage2.jpg", nom: "paysage2", categorie: "paysage", prix: 100 },
    { image: "img/paysage3.jpg", nom: "paysage3", categorie: "paysage", prix: 100 },
    { image: "img/paysage4.jpg", nom: "paysage4", categorie: "paysage", prix: 100 },
    { image: "img/personne1.jpg", nom: "personne1", categorie: "personne", prix: 300 },
    { image: "img/personne2.jpg", nom: "personne2", categorie: "personne", prix: 300 },
    { image: "img/personne3.jpg", nom: "personne3", categorie: "personne", prix: 300 },
    { image: "img/personne4.jpg", nom: "personne4", categorie: "personne", prix: 300 },
];

elements.forEach(function (image, i) {
    zone2.innerHTML += `
    <figure class="${image.categorie} all" onclick='changerVignette("${image.image}", "${image.nom}", "${image.categorie}", "${image.prix}")'>
        <img classe="vignette" id="v${i}" src="${image.image}">
        <figcaption>${image.nom}</figcaption>
    </figure>
    `

});


let imgs = document.querySelectorAll("figure");
imgs.forEach(function (img) {
    img.onmouseover = overImg;
    img.onmouseout = outImg;

});

function overImg(e) {
    let image = e.currentTarget;
    image.style.transform = "scale(1.1)"
    image.style.boxShadow = "0 0 10px rgba(0, 0, 0, .6)"
}
function outImg(e) {
    let image = e.currentTarget;
    image.style.transform = ""
    image.style.boxShadow = ""
}

function changerVignette(imgChanger, nomChanger, categorieChanger, prixChanger) {
    grandeVignette.style.backgroundImage = `url(${imgChanger})`
    nom.innerHTML = nomChanger;
    categorie.innerHTML = categorieChanger;
    prix.innerHTML = prixChanger + " €";
}

changerVignette("img/animal1.jpg", "animal1", "animal", 200);
