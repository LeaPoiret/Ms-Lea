var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var saisie = window.prompt(`Entrez un prénom : `)
//if=Si
if(tab.includes(saisie)){//La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie "true" si c'est le cas, "false" sinon.
	tab.splice(tab.indexOf(saisie),1);//*1
	tab.push(" ");//*2
	alert(tab)//Appel de ma variable du tableau.
}
else{//Sinon
    alert("erreur")//Si les conditions du if (si) ne sont pas respectés alors il passera au else (sinon), donc un message d'erreur.
    }

//*1: La méthode spice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau.
//On peut ainsi vider ou remplacer une partie d'un tableau.
//*2: La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.