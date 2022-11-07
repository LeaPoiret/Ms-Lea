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
$NbrCol = 12;
$NbrLigne = 12;
?>
<center> <table border="1" width="400">
<tr>
<td bgcolor="#CCCCCC"  ></td>
<?php
for ($j=0; $j<=$NbrCol; $j++) {
echo '<td style= "background-color:#CCCCCC ; font-weight:bold ; color : red" >'.$j.'</td>';
}
echo '</tr>';

for ($i=0; $i<=$NbrLigne; $i++) {
echo '<tr>';
for ($j=0; $j<=$NbrCol; $j++) {

if ($j==0) {
echo '<td style= "background-color:#CCCCCC ; font-weight:bold ; color : red" >'.$i.'</td>';
}

if ($i==$j) {
echo '<td>';
} else {
echo '<td>';
}

echo $i*$j;

echo '</td>';
}
echo '</tr>';
$j=1;
}
echo '</center></table>';
?>
</body>
</html>