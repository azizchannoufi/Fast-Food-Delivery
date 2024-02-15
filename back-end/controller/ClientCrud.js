const { Client } = require('../database/index');

// CRUD opérations pour les clients
async function createClient(req, res) {
  const { name, email, password } = req.body;
  try {
    const client = new Client({ name, email, password });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getClient(req, res) {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateClient(req, res) {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const updatedClient = await Client.findByIdAndUpdate(id, { name, email, password }, { new: true });
    res.json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteClient(req, res) {
  const { id } = req.params;
  try {
    await Client.findByIdAndDelete(id);
    res.json({ message: 'Client supprimé avec succès' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { createClient, getClient, updateClient, deleteClient };