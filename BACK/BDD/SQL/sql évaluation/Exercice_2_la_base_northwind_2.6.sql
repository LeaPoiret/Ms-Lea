6- Liste des pays dans lesquels des produits fournis par "Exotic Liquids" ont été livrés :
SELECT customers.Country
FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN `order details` od  ON od.OrderID = orders.OrderID
JOIN products ON products.ProductID = od.ProductID 
JOIN suppliers ON products.SupplierID = suppliers.SupplierID
WHERE suppliers.CompanyName = 'Exotic liquids'
GROUP BY customers.Country;
