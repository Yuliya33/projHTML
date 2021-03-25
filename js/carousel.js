let recettes = document.querySelectorAll('div[class^="Recette"]');
let pointes_boite = document.querySelector('.pointes');
let pointes = document.querySelectorAll('.pointe');

let suivant = document.querySelector('.suivant');
let precedent = document.querySelector('.precedent');

function bougeDroite(){

    let positionActif;
    let indice = 0;
    for(let recette of recettes){

        if(recette.classList.contains('actif')){

            positionActif = indice;

        }

        indice++;

    }

    recettes[positionActif].classList.remove("actif");
    pointes[positionActif].classList.remove("p_actif");
    if(typeof recettes[positionActif+1] != 'undefined'){
        
        recettes[positionActif+1].classList.add('actif');
        pointes[positionActif+1].classList.add('p_actif');

    }else{

        recettes[0].classList.add('actif');
        pointes[0].classList.add('p_actif');

    }


}

suivant.addEventListener("click", bougeDroite);

precedent.addEventListener("click", function(evt){

    let positionActif;
    let indice = 0;
    for(let recette of recettes){

        if(recette.classList.contains('actif')){

            positionActif = indice;

        }

        indice++;

    }

    recettes[positionActif].classList.remove("actif");
    pointes[positionActif].classList.remove("p_actif");
    if(typeof recettes[positionActif-1] != 'undefined'){
        
        recettes[positionActif-1].classList.add('actif');
        pointes[positionActif-1].classList.add('p_actif');

    }else{

        recettes[recettes.length-1].classList.add('actif');
        pointes[pointes.length-1].classList.add('p_actif');

    }

    
});

pointes_boite.addEventListener("click", function(evt){

    if(evt.target.nodeName == "SPAN"){
        let positionActif;
        let indice = 0;
        for(let recette of recettes){

            if(recette.classList.contains('actif')){

                positionActif = indice;

            }

            indice++;

        } 


        let positionNouveau;
        indice = 0;
        for(let point of pointes){

            if(point == evt.target){

                positionNouveau = indice;

            }

            indice++;

        }

        recettes[positionActif].classList.remove("actif");
        pointes[positionActif].classList.remove("p_actif");

        recettes[positionNouveau].classList.add("actif");
        pointes[positionNouveau].classList.add("p_actif");        

        
    }
    


});

let timer = setInterval(bougeDroite, 5000);