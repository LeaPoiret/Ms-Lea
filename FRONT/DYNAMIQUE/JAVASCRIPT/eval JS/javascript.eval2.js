function TableMultiplication(){//Ouverture de la function.
    var nombre=prompt("Saisissez le nombre de votre choix :");
    var calcul=10// Le 10 est en number si nous voulons le mettre en caractère il faut lui ajouter des guillemets.
    var resultat=""//"" veulent dire, prend la valeur de rien ou vide.

for(i=1; i<=parseInt(calcul); i++){//for (pour) doit toujours contenir (i=x; i><ou=x; i++).

console.log("Total : " + nombre + " * " + i + "=" + resultat)//rappel dans f12.
resultat=resultat + (nombre + " x " + i + "=" + nombre*i) + "\n"//\n sert à passer à la ligne.

}
alert("TableMultiplication ("+nombre+")\n"+ resultat);
}
TableMultiplication();//Fermeture de la function.