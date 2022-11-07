<?php
function getDatabaseConnexion(){
try {
    $user = "root";
    $pass = "";
    $pdo = new PDO("mysql:host=localhost;dbname=tuto_php", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    return $pdo;
    }
    catch (PDOException $e){
    print "Erreur !: " . $e->getMessage();
?>

<br/>

<?php
die();
                            }
                                }
?>
<?php

function getAllUsers(){
$conn = getDatabaseConnexion();
$requete = 'SELECT * FROM utilisateurs';
$rows = $conn -> query($requete);
return $rows; 
}

function readUser($id){
$conn = getDatabaseConnexion();
$requete = "SELECT * FROM utilisateurs where id = '$id'";
$stmt = $conn->query($requete);
$row = $stmt->fetchAll();
if (!empty($row)){
    return $row[0];
}
}
function createUser($nom,$prenom,$age,$adresse){

}
function updateUser($id,$nom,$prenom,$age,$adresse){

}
function deleteUser($id){

}

?>