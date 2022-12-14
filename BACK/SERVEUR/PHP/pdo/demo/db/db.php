<?php
// TODO: Valeurs à modifier
define( 'URL' , 'mysql:host=database:3306;dbname=record;charset=utf8');
define('USER' , 'root');
define('PASS' , 'tiger');


function connectionBase()
{
    global $URL;
    try 
    {
        $connection = new PDO(URL,USER ,PASS );
        $connection->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        return $connection;
    } catch (Exception $e)
    {
        echo 'Erreur : ' . $e->getMessage() . '<br />';
        echo 'N° : ' . $e->getCode();
        die('Fin du script');
    }
}

function findArtists(){
    try {
        $db = connectionBase();
        $requete = $db->query("SELECT * FROM artist");
        // on récupère tous les résultats trouvés dans une variable
        $tableau = $requete->fetchAll(PDO::FETCH_OBJ);
        // on clôt la requête en BDD
        $requete->closeCursor();
    } catch (Exception $e) {
        echo 'Erreur : ' . $e->getMessage() . '<br />';
        echo 'N° : ' . $e->getCode();
        die('Fin du script');
    }
    return $tableau;
}

// fonction de récupération
function findDiscs($id)
{
    $db = connectionBase();
    $requetePrep = $db->prepare("SELECT * FROM disc WHERE artist_id=:id");
    $requetePrep->bindParam(':id', $id);
    $requetePrep->execute();
    $result = $requetePrep->fetchAll(PDO::FETCH_OBJ);
    $requetePrep->closeCursor();
    //  var_dump($result);
    return $result;
}