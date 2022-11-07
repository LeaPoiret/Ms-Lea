<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php $nom = array("Janvier"=>31, "Février"=>28, "Mars"=>31, "Avril"=>30, "Mai"=>31, "Juin"=>30, "Juillet"=>31, "Aout"=>31, "Septembre"=>30, "Octobre"=>31, "Novembre"=>30, "Décembre"=>31);
sort($nom);

for ($nb1=0;$nb1<=count($nom)-1; $nb1++) 
{
echo "$nom[$nb1]<br>";
}?>
</body>
</html>