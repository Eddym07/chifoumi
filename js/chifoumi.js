//    var ciseaux = "ciseaux";
//    var papier = "papier";
//    var feuille = "feuille";
   
   //Acceuil du joueur.
    var firstName = prompt("bonjour ! Quel est ton prénom?");
    alert("bienvenue sur CHI-FOU-MI " + firstName + "!  Jouons maintenant! Et que le meilleur gagne!");

    var choix = prompt("Choisis entre pierre, ciseaux ou papier");
    
        alert("A mon tour de choisir maintenant!");

    // var computer = [
    //     "pierre",
    //     "ciseaux",
    //     "papier"
    // ]

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var entier = entierAleatoire(1, 3);

if (entier === 1) {
    alert("pierre");
}

else if (entier === 2) {
    alert("ciseaux");
}

else {
    alert("papier");
} 