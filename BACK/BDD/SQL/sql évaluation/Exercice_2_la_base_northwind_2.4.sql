4- Liste des clients français ayant passé plus de 10 commandes :
SELECT CompanyName Client,COUNT(OrderID) AS `Nombre de commandes`
FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
WHERE Country = "France"
GROUP BY CompanyName
having `Nombre de commandes` > 10;
