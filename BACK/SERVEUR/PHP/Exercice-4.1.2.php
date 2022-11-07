<!--  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<center><table border="1px" width="400">
<tr>
<?php
$tableau = array (
"Janvier" => "31",
"Février" => "28",
"Mars" => "31",
"Avril" => "30",
"Mai" => "31",
"Juin" => "30",
"Juillet" => "31",
"Aout" => "31",
"Septembre" => "30",
"Octobre" => "31",
"Novembre" => "30",
"Décembre" => "31"
);
foreach($tableau as $cle => $valeur) 
{ 
?>
<tr>
<td>
<?=$cle?>
<td>
<?=$valeur ?>
</td>
</td>
</tr>
<br>
<?php } ?>
</tr>
</center></table>


</body>
</html>