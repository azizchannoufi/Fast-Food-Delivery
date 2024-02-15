const { DeliveryPerson } = require('../database/index');

// Create - Créer un nouveau livreur
async function createDeliveryPerson(req, res) {
  const { name, email, password, location } = req.body;
  try {
    const deliveryPerson = new DeliveryPerson({ name, email, password, location });
    await deliveryPerson.save();
    res.status(201).json(deliveryPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read - Obtenir tous les livreurs
async function getDeliveryPersons(req, res) {
  try {
    const deliveryPersons = await DeliveryPerson.find();
    res.json(deliveryPersons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update - Mettre à jour les informations d'un livreur
async function updateDeliveryPerson(req, res) {
  const { id } = req.params;
  const { name, email, password, location } = req.body;
  try {
    const updatedDeliveryPerson = await DeliveryPerson.findByIdAndUpdate(id, { name, email, password, location }, { new: true });
    res.json(updatedDeliveryPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete - Supprimer un livreur
async function deleteDeliveryPerson(req, res) {
  const { id } = req.params;
  try {
    await DeliveryPerson.findByIdAndDelete(id);
    res.json({ message: 'Livreur supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createDeliveryPerson, getDeliveryPersons, updateDeliveryPerson, deleteDeliveryPerson };