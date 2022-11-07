7- Chiffre d'affaires global sur les ventes de 1997 :
SELECT sum(UnitPrice * Quantity) as "montant ventes 1997"
FROM `order details` od 
join orders on od.OrderID = orders.OrderID 
where orderdate like "1997-%-%"

