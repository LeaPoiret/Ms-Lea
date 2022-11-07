10- Quel est le délai moyen de livraison en jours ?
SELECT ROUND(AVG(DATEDIFF(orders.ShippedDate,orders.OrderDate))) AS "Délai moyen de livraison en jours"
FROM orders;
