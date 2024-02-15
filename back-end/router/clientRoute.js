const express = require("express");
const RouterClient = express.Router();
const { createClient, getClient, updateClient, deleteClient } = require('../controller/ClientCrud');

// Route pour créer un client
RouterClient.post('/clients', createClient);

// Route pour récupérer tous les clients
RouterClient.get('/clients', getClient);

// Route pour mettre à jour un client
RouterClient.put('/clients/:id', updateClient);

// Route pour supprimer un client
RouterClient.delete('/clients/:id', deleteClient);

module.exports = RouterClient;