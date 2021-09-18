
   
   //Acceuil du joueur.
    var firstName = prompt("bonjour ! Quel est ton prénom?");
    alert("bienvenue sur CHIFOUMI " + firstName + "!  Jouons maintenant! Et que le meilleur gagne!");

     //le joueur joue

    var choix = prompt("Choisis entre pierre, ciseaux ou papier");
    
    // L'ordinateur joue

        alert("A mon tour de choisir maintenant!");

    //fonction aléatoire pour faire choisir l'ordinateur

function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var computer = entierAleatoire(1, 3);

    //je determine quel objet l'ordinateur à choisi selon le chiffre aléatoire

if (computer === 1) {
    computer = ("pierre");
}
else if (computer === 2) {
    computer = ("ciseaux");
}
else {
    computer = ("papier");
} 
    alert(computer);

    
if (computer == choix) {
    alert("Match nul");
}
else if ((computer == "pierre" && choix == "papier") || (computer == "ciseaux" && choix == "pierre") || (computer == "papier" && choix == "ciseaux")) {
    alert("gagné!");    
}
else {
    alert("perdu");
}