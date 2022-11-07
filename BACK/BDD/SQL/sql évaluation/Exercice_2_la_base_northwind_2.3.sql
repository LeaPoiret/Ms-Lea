3- Nombre de produits mis à disposition par les fournisseurs français (tri par nombre de produits décroissant) :
SELECT companyname, COUNT(ProductName) as produit  
FROM suppliers 
JOIN products ON products.SupplierID = suppliers.SupplierID 
where country = "france"
GROUP by companyname
order by produit desc;
