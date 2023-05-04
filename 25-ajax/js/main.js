// let xhr = new XMLHttpRequest()

// Fetch API - promises

// librairies

// - axios
// axios
// .get('https://api.coindesk.com/v1/bpi/currentprice.json')
// .then(reponse => (console.log(reponse)))

// - jQuery

// $.post("back.php",{langue:"RU",trad:"Priwet"},function(reponse){
//     console.log(reponse);
// });

// $.get("back.php", { langue: "EN" }, function (reponse) {
//     let objet = JSON.parse(reponse);
//     console.log(reponse, objet);
//     console.log(objet.bonjour);
//     console.log(objet.aurevoir);
// });

// let url = "https://www.boredapi.com/api/activity/";
// $.get(url, null, function (reponse) {
//     document.body.innerHTML = `<h1>${reponse.activity}</h1>`
//     console.log(reponse.activity);
// });

// TEST DE LA POKEAPI
function afficherPokemon(nom) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + nom;
    $.get(url, null, function (reponse) {
        console.log(reponse);
        console.log(reponse.sprites.front_default);
        document.body.innerHTML += `<img src="${reponse.sprites.front_default}">`;
    });
}

let url = "https://pokeapi.co/api/v2/pokemon/";
$.get(url, null, function (reponse) {
    console.log(reponse);
    reponse.results.forEach(function (pokemon) {
        afficherPokemon(pokemon.name);
    });
});

