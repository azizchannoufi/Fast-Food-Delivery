const { Purchase } = require('../database/index');

// Create - Créer un nouvel achat
async function createPurchase(req, res) {
  const { client, products, deliveryPerson } = req.body;
  try {
    const purchase = new Purchase({ client, products, deliveryPerson });
    await purchase.save();
    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read - Obtenir tous les achats
async function getPurchases(req, res) {
  try {
    const purchases = await Purchase.find();
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update - Mettre à jour les informations d'un achat
async function updatePurchase(req, res) {
  const { id } = req.params;
  const { client, products, deliveryPerson } = req.body;
  try {
    const updatedPurchase = await Purchase.findByIdAndUpdate(id, { client, products, deliveryPerson }, { new: true });
    res.json(updatedPurchase);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete - Supprimer un achat
async function deletePurchase(req, res) {
  const { id } = req.params;
  try {
    await Purchase.findByIdAndDelete(id);
    res.json({ message: 'Achat supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createPurchase, getPurchases, updatePurchase, deletePurchase };
