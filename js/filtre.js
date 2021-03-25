let bouton_filtre = document.querySelector(".bouton_filtre");
let bouton_ferme  = document.querySelector(".bouton_ferme");
let filtre = document.querySelector(".filtre");

bouton_filtre.addEventListener("click", function(){

    filtre.style.left = "10px";

});

bouton_ferme.addEventListener("click", function(){

    filtre.style.left = "-8888px";

});