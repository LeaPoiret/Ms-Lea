DROP DATABASE IF EXISTS NOM_DE_LA_BASE;

CREATE DATABASE NOM_DE_LA_BASE;

USE NOM_DE_LA_BASE;

CREATE TABLE station (
station_num INT PRIMARY KEY AUTO_INCREMENT,
station_nom VARCHAR(30)

);

CREATE TABLE hotel (
hotel_capacite VARCHAR(30),
hotel_categorie VARCHAR(30),
hotel_nom VARCHAR(30),
hotel_adresse VARCHAR(50),
hotel_num INT PRIMARY KEY AUTO_INCREMENT,
station_num INT,
FOREIGN KEY (station_num) REFERENCES station (station_num)

);

CREATE TABLE chambre (
chambre_capacite VARCHAR(2),
chambre_degre_confort NUMERIC(5),
chambre_exposition VARCHAR(25),
chambre_type VARCHAR(15),
chambre_num INT PRIMARY KEY AUTO_INCREMENT,
hotel_num INT,
FOREIGN KEY (hotel_num) REFERENCES hotel (hotel_num)

);

CREATE TABLE client (
client_adresse VARCHAR(50),
client_nom VARCHAR(30) NOT NULL,
client_prenom VARCHAR(30) NOT NULL,
client_num INT PRIMARY KEY AUTO_INCREMENT

);

CREATE TABLE reservation (
reserv_date_debut VARCHAR(10) NOT NULL,
reserv_date_fin VARCHAR(10) NOT NULL,
reserv_date VARCHAR(10) NOT NULL,
reserv_montant_arrhes VARCHAR(10),
reserv_prix_total VARCHAR(10),
chambre_num INT,
client_num INT,
FOREIGN KEY (chambre_num) REFERENCES chambre (chambre_num),
FOREIGN KEY (client_num) REFERENCES client (client_num)

);