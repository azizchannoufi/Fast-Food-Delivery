const express = require("express");
const RouterPurchase = express.Router();
const { createPurchase, getPurchases, updatePurchase, deletePurchase } = require('../controller/PurchaseCrud');

// Route pour créer un achat
RouterPurchase.post('/purchases', createPurchase);

// Route pour récupérer tous les achats
RouterPurchase.get('/purchases', getPurchases);

// Route pour mettre à jour un achat
RouterPurchase.put('/purchases/:id', updatePurchase);

// Route pour supprimer un achat
RouterPurchase.delete('/purchases/:id', deletePurchase);

module.exports = RouterPurchase;
