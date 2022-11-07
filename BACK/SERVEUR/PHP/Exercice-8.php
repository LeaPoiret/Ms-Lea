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
$ddate = "2017-07-14";
$date = new DateTime($ddate);
$week = $date->format("W");
echo "Le numéro de la semaine est : ".$week."<br>";
?>
</body>
</html>