
var valeurs=window.prompt("Saisissez différentes valeurs numériques : ")
var nombre=0
var c=0
var myTableau=[]
var moyenne
while(valeurs!="0")
{
    if(valeurs!="0"){
        myTableau.push(valeurs);

    }
    else{

break;

    }

    nombre=nombre+parseFloat(valeurs)
    valeurs=window.prompt("Saisissez différentes valeurs numériques : ")
    console.log(valeurs)
    
    console.log(nombre)





}
var c  = nombre/myTableau.length
alert("Le nombre de valeurs saisie est " + myTableau.length + "\nLa moyenne est de" + c + "\nLa somme est de " + nombre)
