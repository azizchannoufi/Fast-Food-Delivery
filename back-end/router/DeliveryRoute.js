const express = require("express");
const RouterDeliveryPerson = express.Router();
const { createDeliveryPerson, getDeliveryPersons, updateDeliveryPerson, deleteDeliveryPerson } = require('../controller/DeliveryCrud');

// Route pour créer un livreur
RouterDeliveryPerson.post('/deliverypersons', createDeliveryPerson);

// Route pour récupérer tous les livreurs
RouterDeliveryPerson.get('/deliverypersons', getDeliveryPersons);

// Route pour mettre à jour un livreur
RouterDeliveryPerson.put('/deliverypersons/:id', updateDeliveryPerson);

// Route pour supprimer un livreur
RouterDeliveryPerson.delete('/deliverypersons/:id', deleteDeliveryPerson);

module.exports = RouterDeliveryPerson;