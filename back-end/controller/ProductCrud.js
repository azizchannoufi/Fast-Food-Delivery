const { Product } = require('../database/index');

// Create - Créer un nouveau produit
async function createProduct(req, res) {
  const { name, description, price } = req.body;
  try {
    const product = new Product({ name, description, price });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read - Obtenir tous les produits
async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update - Mettre à jour les informations d'un produit
async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete - Supprimer un produit
async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Produit supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
