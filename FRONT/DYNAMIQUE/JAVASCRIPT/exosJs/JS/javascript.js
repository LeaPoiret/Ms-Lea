var bouton1= document.getElementById("Id_btn1");
bouton1.addEventListener("click",clickbtn1);
// J'ai créé un bouton pour mettre mon exercice dedans.
function clickbtn1()
{

//Exercice 1: (JS 5/Afficher du texte) 
var reponse1 = prompt("Saississez votre nom :");
var reponse2 = prompt("Saisissez votre prénom :");

if (confirm("Etes-vous une femme ?") == true)
/*Confirm permet d'avoir un Booléen (true/false)
"Êtes- vous une femme ?" Si (OK) vous êtes une femme sinon (annuler) vous êtes un homme. */
{
    alert("Bonjour Madame " + reponse1 + " " + reponse2 + "\n Bienvenue sur notre site web ! ");
/*Additionner la chaine de caractère voulu entre guillemets comme dans cette exemple "Bonjour Madame " + la réponse 1 + la reponse 2 pour avoir le 
nom et prénom de la suite, pour mettre un espace entre deux mettre " " un espace entre guillemets puis mettre entre guillemets de nouveau le reste 
de votre chaine de caractère comme "Bienvenue sur notre site web !". Si vous desirez passer az la ligne utilisé un antislash et un "n" a côté.
*/
}
//Faire de même avec cette Alert et changez juste le sexe "Monsieur".
else
{
    alert("Bonjour Monsieur " + reponse1 + " " + reponse2 + "\n Bienvenue sur notre site web ! ");
}

}

//------------------------------------------------------------------------------------------------------------------------------------------------------
var bouton2= document.getElementById("Id_btn2");
bouton2.addEventListener("click",clickbtn2);

function clickbtn2()
{

//Exercice 1: (js 06/ Opérateurs)

var a = "100"; //chaine
var b = 100; //number
var c = 1.00; //number
var d = true; //Booléen

//Concaténation de chaine et du résultat.( Ne pas oublier l'espace devant le +).
console.log("Ceci est une chaine de caractères :" + a) ;
alert("Ceci est une chaine de caractères :" + a) ;

//Appliquez à (b l'opérateur de décrémentation), EX: (décrémentation (--), Incrémentation (++)).
console.log(b--);
alert(b--);

//Ajoutez à (c la valeur de a).
console.log(c+a);
alert(c+a);

//Inverser true.
console.log(d=false);
alert(d=false);

}

//------------------------------------------------------------------------------------------------------------------------------------------------------
var bouton3= document.getElementById("Id_btn3");
bouton3.addEventListener("click",clickbtn3);

function clickbtn3()
{

//Exercice 1: (JS 07/ Les conditions)
var reponse1 = prompt("Saisissez un nombre :");

//Divisez la réponse1 par 2, qui sera égale (== deux égales), à "pair".
if(reponse1%2==0)
{
alert("pair");
}

//Else (Veux dire "Sinon", si le résultat ne rentre pas dans la condition du calcul alors le résultat sera "impair").
else
{
    alert("impair");
}

}
//------------------------------------------------------------------------------------------------------------------------------------------------------
var bouton4= document.getElementById("Id_btn4");
bouton4.addEventListener("click",clickbtn4);

function clickbtn4()
{

//Exercice 2 :(JS 7/ Les conditions)
var reponse1 = prompt("Saississez votre année de naissance :");
var reponse2 = 2022; //"2022" est l'année actuelle.
var reponse3 = reponse2 - reponse1; /*  Je décide de soustraire la réponse1 de la réponse2 pour 
obtenir l'âge de l'utilisateur. */

// Si l'utilisateur a plus ou égale de 18 ans, alors il sera écrit majeur.
if(reponse3>=18)
{

// Ne pas oublier les espaces avant "ans" et "majeur".
    alert(reponse3 + " ans" + " Majeur");
}

// Sinon l'utilisateur est mineur.
else 
{

alert(reponse3  + " ans" + " Mineur");
}

}

//------------------------------------------------------------------------------------------------------------------------------------------------------
var bouton5= document.getElementById("Id_btn5");
bouton5.addEventListener("click",clickbtn5);

function clickbtn5()
{

//Exercice 3: (JS 7/ les conditions)

// On demande à l'utilisateur de saisir 2 nombres entiers puis l'opération utilisée. 
var nombre1 = prompt("Saisissez un nombre entier :");
var nombre2 = prompt("Saisissez de nouveau un nombre entier :"); 
var operation = prompt("Saisissez vos opération :");
var resultat 

//Si l'utilisateur ne saisie pas: "+", "-", "*", "/", Alors un message lui sera écrit. 
if(operation!= "+" && operation!= "-" && operation!= "*" && operation!="/")
{
alert("Saisissez un opérateur valide :");
}

//Sinon si l'utilisateur saisie bien les bonnes opérations il aura donc le resultat.
else if(operation=="+")
{
    resultat=Number(nombre1) + Number(nombre2);
    alert(resultat);
}


else if(operation=="-")
{
    resultat=Number(nombre1) - Number(nombre2);
    alert(resultat);
}


else if(operation=="*")
{
    resultat=Number(nombre1) * Number(nombre2);
    alert(resultat);
}

//Sinon / Si la division est égale à 0 elle sera impossible
else if(operation=="/")
{
    resultat=Number(nombre1) / Number(nombre2);
    alert(resultat);
        if(opération=="0")
        {
        alert("division impossible");
        }
}

//Si toutes les conditions ci-dessus ne sont pas respectées alors il sera écrit "opérateur non valide".
else
{
    alert("opérateur non valide");
}

}

//-------------------------------------------------------------------------------------------------------
var bouton6= document.getElementById("Id_btn6");
bouton6.addEventListener("click",clickbtn6);

function clickbtn6()
{
//Exercice 1: (JS 8/ Les boucles)

var reponse=prompt("Saisissez votre prénom :");
var reponse1=0;
var resultat=""

while(reponse!="")
{

reponse1++
resultat=resultat+reponse+"\n";
reponse=prompt("Saisissez votre prénom :");

}

if(reponse=="")
{
    alert(resultat+reponse1);
}

}

//-------------------------------------------------------------------------------------------------------
var bouton7= document.getElementById("Id_btn7");
bouton7.addEventListener("click",clickbtn7);

function clickbtn7()
{
//Exercice 2: (JS 8/ Les boucles)

var nombre1=prompt("Saisissez un nombre :");
var N=0
var m=""
while(nombre1 > N)
{
    if(nombre1<1){break}
    nombre1--
    m= m+nombre1 + ","
}
alert(m)

}

//-------------------------------------------------------------------------------------------------------
var bouton8= document.getElementById("Id_btn8");
bouton8.addEventListener("click",clickbtn8);

function clickbtn8()
{
//Exercice 3: (JS 8/ Les boucles)

var reponse1=""
var N=0

var n=0
while(reponse1!="0")
{
    reponse1=prompt("Saisissez un nombre entire :")
    console.log(reponse1)
    N=N+parseFloat(reponse1)
    n++
    console.log(N)
    console.log(n)
}
n=n-1
resultat=N/n
alert("La somme est de " + N + "\nLa moyenne est de " + resultat)

}

//-------------------------------------------------------------------------------------------------------
var bouton9= document.getElementById("Id_btn9");
bouton9.addEventListener("click",clickbtn9);

function clickbtn9()
{
//Exercice 4: (JS 8/ Les boucles)


var c=prompt("Saisissez le nombre entier de votre choix :");
var stop=prompt("Saisissez le nombre de multiplication :");
var resultat=""

for(i=1; i<=parseInt(stop); i++)
{
    console.log("Total : " + c + "*" + i + "=" + resultat);
    resultat=resultat + (c + "x" + i +"=" + c*i)+"\n";
}
alert(resultat);

}

//-------------------------------------------------------------------------------------------------------
var bouton10= document.getElementById("Id_btn10");
bouton10.addEventListener("click",clickbtn10);

function clickbtn10()
{
//Exercice 5: (JS 8/ Les boucles)

let myVar = window.prompt("Saisir un mot");
let lenght = console.log(myVar.length);
let o = myVar.indexOf('o'); 
let e = myVar.indexOf('e');
let i = myVar.indexOf('i');
let u = myVar.indexOf('u');
let y = myVar.indexOf('y');
let a = myVar.indexOf('a');
console.log(myVar.substring());
nmbreVoyelles = 0;
while(myVar.substring()>= 'aa'){
nmbreVoyelles++;
break;

}
while(myVar.substring()>= 'aaa'){
    nmbreVoyelles++;
    break;

} 

while(e > -1){
    nmbreVoyelles++;
    console.log(nmbreVoyelles);
    break;
}

while(i > -1){
    nmbreVoyelles++;
    console.log(nmbreVoyelles);
    break;
}

while(o > -1){
    nmbreVoyelles++;
    console.log(nmbreVoyelles);
    break;
}

while(u > -1){
    nmbreVoyelles++;
    console.log(nmbreVoyelles);
    break;
}

while(y > -1){
    nmbreVoyelles++;
    console.log(nmbreVoyelles);
    break;
}

while(a > -1){
    nmbreVoyelles++;
    console.log(nmbreVoyelles);
    break;
}

alert("Votre mot est composé de " + nmbreVoyelles + " voyelles.");

}

//-------------------------------------------------------------------------------------------------------
var bouton11= document.getElementById("Id_btn11");
bouton11.addEventListener("click",clickbtn11);

function clickbtn11()
{
//Exercice 1: (JS 9/ Tableaux)

var taille=parseInt(prompt("Entrez la taille :"));
console.log("le tableau contient " + taille + " colonnes");
var myTableau=Array(taille)
var c=0
while(c<taille)
{
    var nombre=parseInt(prompt("Entrez les notes :"));
    console.log("Voila votre nombres " + nombre);
    myTableau[c]=nombre
    c++
}
alert(myTableau)

}

//-------------------------------------------------------------------------------------------------------
var bouton12= document.getElementById("Id_btn12");
bouton12.addEventListener("click",clickbtn12);

function clickbtn12()
{    
//Exercice 2: (JS 9/ Tableaux)

var entier=parseInt(prompt("Saisissez un nombre entier :"))
var myTableau=[]
function GetInteger()
{
    console.log("function GetInteger")
    return(entier)
}
GetInteger()

var taille=parseInt(prompt("Entrez la taille :"));
function InitTab()
{
    console.log("function InitTab")
    var myTableau= Array(taille)
    return(myTableau)
}
InitTab()

var c=0
function SaisieTab()
{
    console.log("function SaisieTab")
    while(c<taille){
        var nombre=parseInt(prompt("Entrez les notes :"));
        console.log("Voila votre nombres " + nombre);
        myTableau[c]= nombre
        c++
    }
    return(myTableau)
}
SaisieTab()

function AfficheTab()
{
    console.log("function AfficheTab")
    alert(myTableau)
}
AfficheTab()

function RechercheTab()
{
    console.log("function RechercheTab")
    alert(myTableau[entier])
    console.log(entier)
}
RechercheTab()

function InfoTab()
{
    console.log("function InfoTab")
var moyenne=0
var somme=0
var l=myTableau.length //.length calcul la longueur du tableau
for(i=0;i<l;i++){
somme+=myTableau[i]
}
moyenne=somme/l
console.log(moyenne)
alert(moyenne)
}
InfoTab()
}

//-------------------------------------------------------------------------------------------------------
var bouton13= document.getElementById("Id_btn13");
bouton13.addEventListener("click",clickbtn13);

function clickbtn13()
{
//Exercice 3: (JS 9/ Tableaux)

function bubbleSort(array)
{
    for(let i=0;i< array.length;i++)
    {
        for(let j=0; j< array.length; j++)
        {
            if (array[j] > array[j+1])
            {
                console.log("ancienne valeur :" + array[j]);
                [array[j], array[j+1]] = [array[j+1], array[j]]
                console.log("nouvelle valeur :" + array[j]);
            }
        }
    }
    return array;
}
console.log(bubbleSort([1,9,3,501,241,365,20,2,68,5749,612,2008,19,38,400,100,86,94,796]));
alert(bubbleSort)

}

//-------------------------------------------------------------------------------------------------------
var bouton14= document.getElementById("Id_btn14");
bouton14.addEventListener("click",clickbtn14);

function clickbtn14()
{

}

//-------------------------------------------------------------------------------------------------------
var bouton15= document.getElementById("Id_btn15");
bouton15.addEventListener("click",clickbtn15);

function clickbtn15()
{
//Exercice 2: (JS 10/ Les fonctions)





}

