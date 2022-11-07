//Exercice 1 Evaluation Javascript
var max = 199;// Le comptage est arrêté dès la saisie d'un centenaire. Le centenaire est compté.
var valeurs = 0;//Chiffre que l'utilisateur rentre dans la boite de dialogue.
var tableau = [];// Variable du Tableau.
var jeune = 0;// Variable des jeunes qui vont être comptés après saisie de l'utilisateur.
var moyen = 0;// Variable des moyens qui vont être comptés après saisie de l'utilisateur.
var agee = 0;// Variable des âgées qui vont être comptés après la saisie de l'utilisateur.

while(valeurs <= max){//While est une boucle "tant que" 
var valeurs=Number(prompt("Saissisez des âges : "));//Boite de dialogue de l'utilisateur.
    tableau.push(valeurs)// Le push sert à remonter les saisies de l'utilisateurs
    console.log(tableau)// Le console.log sert à voir s'il n'y a pas de problème grâce a f12 sur l'aperçu.

    if(valeurs < 20){
        jeune++//Chaque valeur en dessous de 20 serons classés dans la casse du tableau "jeune". 
    }

    else if(valeurs <= 40){
        moyen++//Chaque valeur en dessous de 40 ou égale à celle ci serons classés dans la casse du tableau "moyen".
    }
    else{
        agee++//Chaque valeur au dessus de 40 serons classés dans la casse du tableau "âgée"
    }
    if(valeurs >= 100){
        break;//Chaque valeur dépassant 100 stopera la saisie, mais la valeur sera compté dans le tableau.
    }
}

alert("Il y a " + jeune + " de personnes âgées de 0 à 20 ans.\n" + 
"Il y a " + moyen + " de personnes âgées de 20 ans à 40 ans.\n" +
"Il y a " + agee + " de personnes âgées de 41 ans à 199 ans.");
//Les alertes servent à montrer à l'utilisateur le résultat des ses saisies.
console.log("Il y a " + jeune + " de personnes âgées de 0 à 20 ans.\n" +
"Il y a " + moyen + " de personnes âgées de 20 ans à 40 ans.\n" +
"Il y a " + agee + " de personnes âgées de 41 ans à 199 ans.");
//Les console.log servent à aider le développeur à voir si tout fonctionne bien, grĉe a f12.