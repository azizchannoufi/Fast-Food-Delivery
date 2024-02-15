const { Restaurant } = require('../database/index');

// Create - Créer un nouveau restaurant
async function createRestaurant(req, res) {
  const { name, email, password, location } = req.body;
  try {
    const restaurant = new Restaurant({ name, email, password, location });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read - Obtenir tous les restaurants
async function getRestaurants(req, res) {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update - Mettre à jour les informations d'un restaurant
async function updateRestaurant(req, res) {
  const { id } = req.params;
  const { name, email, password, location } = req.body;
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { name, email, password, location }, { new: true });
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete - Supprimer un restaurant
async function deleteRestaurant(req, res) {
  const { id } = req.params;
  try {
    await Restaurant.findByIdAndDelete(id);
    res.json({ message: 'Restaurant supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createRestaurant, getRestaurants, updateRestaurant, deleteRestaurant };
