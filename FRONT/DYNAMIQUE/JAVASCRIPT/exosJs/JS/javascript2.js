// Exercice 2 /Javascript 10 :

var a=prompt("Ecrire une phrase : ")
var b=prompt("Entrez un caractère :" )
var c=prompt("Entrez un chiffre : ")

function strtok(str1,str2,n){
var phrase = str1.split(" ").join(str2)
//alert(phrase)
var separation = phrase.split(str2)
//alert(separation)
var choix = separation.slice(n-1, n)
//alert(choix)
return(choix)
}

var mot = strtok(a, b, c);
alert(mot)

