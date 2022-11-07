2- Liste des produits vendus par le fournisseur "Exotic Liquids" :
SELECT ProductName,UnitPrice 
FROM products 
JOIN suppliers ON products.SupplierID = suppliers.SupplierID 
WHERE CompanyName = "Exotic Liquids";

