const express = require("express");
const RouterProduct = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controller/ProductCrud');

// Route pour créer un produit
RouterProduct.post('/products', createProduct);

// Route pour récupérer tous les produits
RouterProduct.get('/products', getProducts);

// Route pour mettre à jour un produit
RouterProduct.put('/products/:id', updateProduct);

// Route pour supprimer un produit
RouterProduct.delete('/products/:id', deleteProduct);

module.exports = RouterProduct;
