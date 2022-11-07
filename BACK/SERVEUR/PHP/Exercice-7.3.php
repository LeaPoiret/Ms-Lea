<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
$resultat = "MOmotesm0che";
function complex_password($resultat){
global $resultat;
$minuscules = preg_match("@[a-z]@", $resultat);
$majuscules = preg_match("@[A-Z]@", $resultat);
$chiffres = preg_match("@[0-9]@", $resultat);

if (($minuscules && $majuscules && $chiffres)<8){
    ?>
<br>
    <?php
echo "false";
}
else{

echo "true";
}
}
complex_password("La sécurité de votre mdp est : ".$resultat);
    ?>
</body>
</html>