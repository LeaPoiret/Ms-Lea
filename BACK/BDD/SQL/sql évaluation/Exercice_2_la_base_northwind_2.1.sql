1- Liste des clients français :
USE northwind;
SELECT CompanyName,ContactName,ContactTitle,Phone
FROM customers
WHERE Country = 'France';
