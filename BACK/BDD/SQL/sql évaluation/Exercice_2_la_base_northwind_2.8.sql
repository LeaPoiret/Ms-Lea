8- Chiffre d'affaires détaillé par mois, sur les ventes de 1997 :
SELECT DISTINCT MONTH(orders.OrderDate) AS "Mois 97", SUM(UnitPrice * Quantity)
FROM orders
JOIN `order details` od  ON orders.OrderID = od.OrderID 
WHERE  YEAR(OrderDate) = '1997'
GROUP BY MONTH(OrderDate);

