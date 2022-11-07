document.getElementById("formulaire").addEventListener("submit", Form);

function Form(e){

    var NOM = document.getElementById("nom").value
    var PRENOM = document.getElementById("prenom").value;
    var SEXE = document.getElementsByName("Sexe");
    var DATE = document.getElementById("date").value;
    var CODE = document.getElementById("code").value;
    var EMAIL = document.getElementById("email").value;
    var SUJET = document.getElementById("sujet").value;
    var QUESTION = document.getElementById("question").value;
    var ACCEPT = document.getElementById("accepter").checked;

//Var regExp
    var n = new RegExp("^[a-zA-Z-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖŒŠÙÚÛÜÝŸàáâãäåæçèéêëìíîïñòóôõöœšùúûüýÿ]+$");
    var p = new RegExp("^[a-zA-Z-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖŒŠÙÚÛÜÝŸàáâãäåæçèéêëìíîïñòóôõöœšùúûüýÿ]+$");
    var c = new RegExp("^[0-9]{5}$");
    var mail = new RegExp("^[a-zA-Z_0-9]+@[a-z]+[.]?[a-z]{2,4}$");

//Nom :
    if(NOM == ""){
        var e1 = document.getElementById("E1");
        e.preventDefault();
        e1.textContent = "Veuillez renseigner votre nom *"
    }
    else if(!n.test(NOM)){
        var e1 = document.getElementById("E1");
         e1.textContent =" Veuillez renseigner correctement votre nom *"
        e.preventDefault();
    }
    else{
        var e1 = document.getElementById("E1");
        
        e1.textContent = ""
    }

//Prénom :
    if(PRENOM == ""){
        var e2 = document.getElementById("E2");
        e.preventDefault();
        e2.textContent ="Veuillez renseigner votre prénom *"
    }
    else if(!p.test(PRENOM)){
        var e2 = document.getElementById("E2");
        e2.textContent = "Veuillez renseigner correctement votre prénom *"
        e.preventDefault();
    }
    else{
        var e2 = document.getElementById("E2");
        
        e2.textContent = ""
    }

//Sexe :
    for(i=0; i < SEXE.length; i++){
        if(SEXE[i].checked == true){
            var culcul = 1
            break;
        }
    }
    if(culcul != 1){
        var e2_5 = document.getElementById("sexe1");
        e.preventDefault();
        e2_5.textContent = "Veuillez séléctionner votre sexe *"
    }
    else{
        var e2_5 = document.getElementById("sexe1");
        console.log("culcul")
        e2_5.textContent = "";
    }
    

//Date de naissance :
    if(DATE == ""){
        var e3 = document.getElementById("E3");
        e.preventDefault();
        e3.textContent = "Veuillez renseigner votre date de naissance *"
    }
    else{
        var e3 = document.getElementById("E3");
        
        e3.textContent = ""
    }

//Code Postal :
    if(CODE == ""){
        var e4 = document.getElementById("E4");
        e.preventDefault();
        e4.textContent = "Veuillez renseigner votre code postal *"
    }
    else if(!c.test(CODE)){
        var e4 = document.getElementById("E4");
        e.preventDefault();
        e4.textContent ="Veuillez renseigner correctement votre code postal *"
    }  
    else{
        var e4 = document.getElementById("E4");
        
        e4.textContent = ""
    }

//E-mail :
    if(EMAIL == ""){
        var e7 = document.getElementById("E7");
        e.preventDefault();
        e7.textContent = "Veuillez renseigner votre E-mail *"
    }
    else if(!mail.test(EMAIL)){
        var e7 = document.getElementById("E7");
        e.preventDefault();
        e7.textContent = "Veuillez renseigner correctement votre E-mail *"
    }
    else{
        var e7 = document.getElementById("E7");
        
        e7.textContent = ""
    }

//Sujet :
    if(SUJET == ""){
        var e8 = document.getElementById("E8");
        e.preventDefault();
        e8.textContent ="Veuillez séléctionner un sujet *"
}
else{
    var e8 = document.getElementById("E8");
    e8.textContent = ""
}

//Question :
    if(QUESTION == ""){
        var e9 = document.getElementById("E9");
        e.preventDefault();
        e9.textContent = "Veuillez indiquer votre question *"
    }
    else{
        var e9 = document.getElementById("E9")
        
        e9.textContent = ""
    }
//J'accepte :
    if(ACCEPT == ""){
        console.log("culcul")
        var e10 = document.getElementById("E10");
        e.preventDefault();
        e10.textContent = "Veuillez cocher la case pour accepter le traitement informatique du formulaire *"
    }
    else{
        var e10 = document.getElementById("E10");
        e10.textContent = ""
    }

    if(e1.textContent + e2.textContent + e2_5.textContent + e3.textContent + e4.textContent + e7.textContent + e8.textContent + e9.textContent + e10.textContent == ""){
    envoie = "Formulaire envoyé ! :D"
    alert(envoie);
    }

}