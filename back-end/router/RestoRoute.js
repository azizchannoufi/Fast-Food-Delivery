const express = require("express");
const RouterRestaurant = express.Router();
const { createRestaurant, getRestaurants, updateRestaurant, deleteRestaurant } = require('../controller/RestoCrud');

// Route pour créer un restaurant
RouterRestaurant.post('/restaurants', createRestaurant);

// Route pour récupérer tous les restaurants
RouterRestaurant.get('/restaurants', getRestaurants);

// Route pour mettre à jour un restaurant
RouterRestaurant.put('/restaurants/:id', updateRestaurant);

// Route pour supprimer un restaurant
RouterRestaurant.delete('/restaurants/:id', deleteRestaurant);

module.exports = RouterRestaurant;
