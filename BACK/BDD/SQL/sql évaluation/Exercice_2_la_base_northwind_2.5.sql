
SELECT Country, CompanyName
FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN `order details` od  ON od.OrderID = orders.OrderID;
