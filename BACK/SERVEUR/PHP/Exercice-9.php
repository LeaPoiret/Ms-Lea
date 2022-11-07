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
    $debut = new DateTime('now');
    $fin = new DateTime('2022-07-24');
    $entredeux = $debut->diff($fin);
    echo $entredeux->format(" Il reste %R%a jours avant la fin du Ms. ");
    ?>
</body>
</html>