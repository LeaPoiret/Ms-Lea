//Exercice 1: (JS 10/ Les fonctions)

var i=prompt("Saisissez un nombre entier : ")
var y=prompt("Saisissez un multiplicateur : ") 


function afficheImg(image){
    document.getElementById("insère").innerHTML = '<img src="'+ image +'">';
    
}

var monImage=prompt("Veuillez indiquer le nom de votre image : (papillon.jpg)")
var chemin="img/"+monImage

afficheImg(chemin);

function carre(){
cube = i*i*i;
return cube
}

function produit(){
    resultat = y * i;
    return resultat
}

document.write("Le cube de " + i + " est égal à " + carre() + " <br/> "  + "Le produit de " + i + " x " + y + " est égal à " + produit() );