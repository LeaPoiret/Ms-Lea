BDD - Cas Hotel (extraction de données)
Exercice:
Lot 1 : SELECT - FROM - WHERE - AND

1 - Afficher la liste des hôtels.
Le résultat doit faire apparaître le nom de l’hôtel et la ville

USE hotel;
SELECT hot_nom,hot_ville  
FROM hotels;

2 - Afficher la ville de résidence de Mr White
Le résultat doit faire apparaître le nom, le prénom, et l'adresse du client

USE hotel;
SELECT cli_nom,cli_prenom,cli_adresse ,cli_ville  
FROM clients
where cli_nom = 'white';

3 - Afficher la liste des stations dont l’altitude < 1000
Le résultat doit faire apparaître le nom de la station et l'altitude

USE hotel;
SELECT sta_nom,sta_altitude  
FROM stations
WHERE sta_altitude <1000;

4 - Afficher la liste des chambres ayant une capacité > 1
Le résultat doit faire apparaître le numéro de la chambre ainsi que la capacité

USE hotel;
SELECT cha_numero,cha_capacite  
FROM chambres
WHERE cha_capacite >1;

5 - Afficher les clients n’habitant pas à Londres
Le résultat doit faire apparaître le nom du client et la ville

USE hotel;
SELECT cli_nom,cli_ville  
FROM clients
WHERE cli_ville != 'londre';

6 - Afficher la liste des hôtels située sur la ville de Bretou et possédant une catégorie > 3
Le résultat doit faire apparaître le nom de l'hôtel, ville et la catégorie

USE hotel;
SELECT hot_nom,hot_ville,hot_categorie  
FROM hotels
WHERE hot_categorie >3 AND hot_ville = 'bretou';

Lot 2 : JOIN

7 - Afficher la liste des hôtels avec leur station
Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, la catégorie, la ville

USE hotel;
SELECT hot_nom,hot_ville,hot_categorie,sta_nom  
FROM hotels inner JOIN stations on hotels.hot_sta_id = stations.sta_id;

8 - Afficher la liste des chambres et leur hôtel
Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre

USE hotel;
SELECT hot_nom,hot_ville,hot_categorie,cha_numero  
FROM hotels inner JOIN chambres on hotels.hot_id = chambres.cha_hot_id;

9 - Afficher la liste des chambres de plus d'une place dans des hôtels situés sur la ville de Bretou
Le résultat doit faire apparaître le nom de l’hôtel, la catégorie, la ville, le numéro de la chambre et sa capacité

USE hotel;
SELECT hot_nom,hot_ville,hot_categorie,cha_numero,cha_capacite  
FROM hotels inner JOIN chambres on hotels.hot_id = chambres.cha_hot_id;

10 - Afficher la liste des réservations avec le nom des clients
Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de réservation

USE hotel;
SELECT cli_nom,hot_nom,res_date  
FROM hotels INNER JOIN chambres ON hotels.hot_id = chambres.cha_id INNER JOIN reservation ON chambres.cha_id = reservation.res_cha_id INNER JOIN clients ON reservation.res_cli_id = clients.cli_id ;

11 - Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station
Le résultat doit faire apparaître le nom de la station, le nom de l’hôtel, le numéro de la chambre et sa capacité

USE hotel;
SELECT sta_nom,hot_nom,cha_numero,cha_capacite  
FROM stations INNER JOIN hotels ON stations.sta_id = hotels.hot_id INNER JOIN chambres ON chambres.cha_hot_id = hotels.hot_id;

12 - Afficher les réservations avec le nom du client et le nom de l’hôtel avec datediff
Le résultat doit faire apparaître le nom du client, le nom de l’hôtel, la date de début du séjour et la durée du séjour

USE hotel;
SELECT cli_nom,hot_nom,res_date_debut,DATEDIFF(res_date_fin,res_date_debut)  
FROM hotels INNER JOIN chambres ON hotels.hot_id = chambres.cha_hot_id INNER JOIN reservation ON chambres.cha_id = reservation.res_cha_id INNER JOIN clients ON cli_id = reservation.res_cli_id;

14 - Compter le nombre de chambres par station

USE hotel;
SELECT sta_nom, COUNT(*) 
FROM chambres 
JOIN hotels ON chambres.cha_hot_id = hotels.hot_id 
JOIN stations ON hotels.hot_sta_id = stations.sta_id 
GROUP BY sta_id;

15 - Compter le nombre de chambres par station ayant une capacité > 1

USE hotel;
SELECT sta_nom, COUNT(*) 
FROM chambres 
JOIN hotels ON chambres.cha_hot_id = hotels.hot_id 
JOIN stations ON hotels.hot_sta_id = stations.sta_id 
WHERE cha_capacite >1
GROUP BY sta_id;

16 - Afficher la liste des hôtels pour lesquels Mr Squire a effectué une réservation

USE hotel;
SELECT DISTINCT hot_nom,cli_nom,res_id
FROM clients 
JOIN reservation ON clients.cli_id = reservation.res_cli_id 
JOIN chambres ON chambres.cha_id = reservation.res_cha_id 
JOIN hotels ON chambres.cha_hot_id = hotels.hot_id 
WHERE cli_nom = 'squire';

17 - Afficher la durée moyenne des réservations par station

USE hotel;
SELECT SUM(DATEDIFF(res_date_fin, res_date_debut))/DATEDIFF(res_date_fin,res_date_debut) 
FROM stations 
INNER JOIN hotels 
ON stations.sta_id = hotels.hot_sta_id 
INNER JOIN chambres
ON hotels.hot_id = chambres.cha_hot_id 
INNER JOIN reservation 
ON chambres.cha_id = reservation.res_cha_id 
INNER JOIN clients
ON reservation.res_cli_id = clients.cli_id 
GROUP BY sta_nom ASC;

CAS PAPYRUS: EXERCICE

1.Quelles sont les commandes du fournisseur 09120 ?

USE papyrus;
SELECT numfou,qte1,qte2,qte3
FROM vente
WHERE numfou = '9120';

2.Afficher le code des fournisseurs pour lesquels des commandes ont été passées.

USE papyrus;
SELECT numfou,numcom
FROM entcom;

3.Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés.

USE papyrus;
SELECT numfou, COUNT(numfou), numcom, COUNT(numcom)
FROM entcom
GROUP BY numfou;  

4.Editer les produits ayant un stock inférieur ou égal au stock d'alerte, et dont la quantité annuelle est inférieure à 1000.

USE papyrus;
SELECT stkale,stkphy,qteann,codart,libart
FROM produit
WHERE stkphy <= stkale AND qteann <1000;

5.Quels sont les fournisseurs situés dans les départements 75, 78, 92, 77 ?

USE papyrus;
SELECT posfou,nomfou
FROM fournis
WHERE posfou LIKE '75%' OR posfou LIKE '78%' OR posfou LIKE '92%' OR posfou LIKE '77%';

6.Quelles sont les commandes passées en mars et en avril ?

USE papyrus;
SELECT numcom,datcom 
FROM entcom
WHERE MONTH(datcom) = 03 OR MONTH(datcom) = 04;

7.Quelles sont les commandes du jour qui ont des observations particulières ?

USE papyrus;
SELECT numcom,obscom, datcom
FROM entcom
WHERE obscom is not null;

8.Lister le total de chaque commande par total décroissant.

Décomposition calcul.

USE papyrus;
SELECT numcom,qtecde,priuni as `Prix unitaire`, (qtecde * priuni) as `resultat` 
FROM ligcom;

SELECT numcom , sum(qtecde * priuni)  
FROM ligcom
GROUP BY numcom;

SELECT numcom,qtecde,priuni as `Prix unitaire`, (qtecde * priuni) as `resultat`, sum(qtecde * priuni)  
FROM ligcom
GROUP BY numcom;

RÉPONSE :

USE papyrus;
SELECT numcom , sum(qtecde * priuni) AS `resultat` 
FROM ligcom
GROUP BY numcom
ORDER BY resultat DESC;

9.Lister les commandes dont le total est supérieur à 10000€ ; on exclura dans le calcul du total les articles commandés en quantité supérieure ou égale à 1000.

USE papyrus;
SELECT numcom ,qtecde, sum(qtecde*priuni) as total
FROM ligcom
WHERE qtecde < 1000
GROUP BY numcom
having total >10000;

10.Lister les commandes par nom de fournisseur.

USE papyrus;
SELECT nomfou,numcom,datcom,qtecom
FROM fournis
INNER JOIN entcom ON entcom.numfou = fournis.numfou
INNER JOIN ligcom ON ligcom.numcom = entcom.numcom;

11.Sortir les produits des commandes ayant le mot "urgent' en observation.


12.Coder de 2 manières différentes la requête suivante : Lister le nom des fournisseurs susceptibles de livrer au moins un article.



