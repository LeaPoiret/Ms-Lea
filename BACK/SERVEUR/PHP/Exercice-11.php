<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="Exercice-11.php" method="post" id="formulaire">
        <p>* Ces zones sont obligatoires</p><br>
    <fieldset>
        <legend>Vos coordonnées</legend>    
    
        <label for="nom">Votre nom* : </label><input type="text" name="nom" id="nom"><br>
        <span id="E1" style="color: rgb(223, 0, 0);"></span><br>
<!-- style color sert à ajouter de la couleur au messages d'erreurs.-->
        <label for="prénom">Votre prénom* : </label><input type="text" name="prénom" id="prenom"><br>
        <span id="E2" style="color:rgb(223, 134, 0);"></span><br>

        <label for="sexe">Sexe* : </label>
        <input type="radio" name="Sexe" value="Féminin" id="sexe"> Féminin
        <input type="radio" name="Sexe" value="Masculin" id="sexe"> Masculin<br>
        <span id="sexe1" style="color: rgb(181, 190, 47);"></span><br>

        <label for="date">Date de naissance* : </label><input type="date" name="ddn" id="date"><br>
        <span id="E3" style="color: rgb(31, 145, 9);"></span><br>

        <label for="code">Code postal* : </label><input type="code" name="code" id="code"><br>
        <span id="E4" style="color: rgb(19, 124, 101);"></span><br>

        <label for="adresse">Adresse : </label><input type="adresse" name="adresse" id="adresse"><br>
        <span id="E5" style="color: rgb(12, 32, 145);"></span><br>

        <label for="ville">Ville : </label><input type="ville" name="ville" id="ville"><br>
        <span id="E6" style="color: rgb(93, 15, 145);"></span><br>

        <label for="email">Email* : </label><input type="text" name="email" id="email" placeholder="dave.loger@afpa.fr"><br>
        <span id="E7" style="color: rgb(175, 25, 168);"></span><br>
        
    </fieldset>
    
    <fieldset>
            <legend>Votre demande</legend>
            <label for="sujet"  >Sujet* : </label>
            <select id="sujet" >
                <option value="" selected name="sujet">Veuillez séléctionner un sujet</option>
                <option value="Mes commandes">Mes commandes </option>
                <option value="Question sur un produit">Question sur un produit </option>
                <option value="Réclamation">Réclamtion </option>
                <option value="Autres">Autres </option>
            </select><br>
            <span id="E8" style="color: rgb(218, 50, 148);"></span><br>

            <label for="sujet">Votre question* :  </label>
            <textarea name="question" id="question" cols="20" rows="2"></textarea><br>
            <span id="E9" style="color: rgb(241, 111, 202);"><i></i></span><br>
            
    </fieldset><br>
    
        <input type="checkbox" name="accept" value="j'accepte" id="accepter">* J'accepte le traitement informatique de ce formulaire
        <input type="submit" name="Envoyer" value="Envoyer" id="envoyer" onsubmit="Form()" >
        <input type="reset" name="Annuler" value="Annuler" id="annuler"><br>
        <span id="E10" style="color: rgb(223, 0, 86);"></span><br>

    </form>
<?php
echo "Nom : ".$_REQUEST["nom"]."<br>";
echo "Prenom : ".$_REQUEST["prénom"]."<br>";
echo "Sexe : ".$_REQUEST["Sexe"]."<br>";
echo "Date : ".$_REQUEST["ddn"]."<br>";
echo "Code : ".$_REQUEST["code"]."<br>";
echo "Adresse : ".$_REQUEST["adresse"]."<br>";
echo "Ville : ".$_REQUEST["ville"]."<br>";
echo "Email : ".$_REQUEST["email"]."<br>";
echo "Sujet : ".$_REQUEST["sujet"]."<br>";
echo "Questions : ".$_REQUEST["question"]."<br>";
?>
</body>
</html>