//// -------------------------VARIABLE --------------------------- //
let gameBox = document.querySelectorAll(".box"); // Récupère toute nos boxs
let gameStart = document.getElementById("start") // Permet de lancer le jeux
let hidden = document.querySelector(".container"); // Récupère toute nos box
let flag = document.querySelector("span");
//// ----------------------- STYLE MODIFICATION -------------------------- //
let nbMines = 10;
let nbFlag = 10;


hidden.style.display = "none";

gameStart.addEventListener("click", function (){
    placementMines(nbMines);
    hidden.style.display = "flex";
    // Création de la liste des mines (liste entre 0 et 80)
    function placementMines(nbMines) {
        let listeMines = [];
        listeMines.length = nbMines;

        for (let i = 0; i < nbMines; i++) {
            listeMines[i] = Math.floor(Math.random() * 81);
        }

        let listeMinesCheck = [...new Set(listeMines)];
        console.log("liste avant " + listeMines);
        console.log("liste check avant " + listeMinesCheck);

        if (listeMines.length !== listeMinesCheck.length) {
            placementMines(nbMines);
        } else {
            console.log("liste apres " + listeMines);
            return listeMines;
        }
    }
})

document.addEventListener('contextmenu', function (event){ // Désactivé l'onglet du clic gauche
    event.preventDefault();
});



for(let i = 0; i < gameBox.length; i++){
    gameBox[i].addEventListener('mouseup', function(event) { // clic droit
        if (gameBox[i].style.backgroundColor === "rgba(77, 74, 74, 0.18)" ){
        }
        else if (event.button){
            gameBox[i].innerHTML = "🚩"
            gameBox[i].style.fontSize = "2rem";
            nbFlag--;
        }

        flag.innerHTML = nbFlag;
    });
    //////////////////////////////////////////////////////////////////////////
    gameBox[i].addEventListener("click", function (){
        if(gameBox[i].innerHTML === "🚩"){ // Détecte bien qu'une case est déjà prise.

        }
        if(gameBox[i].innerHTML !== "🚩"){ // Détecte bien qu'une case est déjà prise.
            gameBox[i].style.fontSize = "2rem";
            gameBox[i].style.innerHTML = "1";
            gameBox[i].style.backgroundColor = "rgba(77, 74, 74, 0.18)"
        }
        else{
            nbFlag++;
            gameBox[i].innerHTML = ""
        }

    })
}