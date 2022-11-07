9- A quand remonte la dernière commande du client nommé "Du monde entier" ?
SELECT orders.OrderDate AS "Date de dernière commande"
FROM orders JOIN customers ON orders.CustomerID = customers.CustomerID
WHERE customers.CompanyName = "Du monde entier"
ORDER BY orders.OrderDate DESC
LIMIT 1;
