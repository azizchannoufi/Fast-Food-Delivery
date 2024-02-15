const express = require('express');
const app = express();
const PORT = 3000;

// Importation des routes
const RouteClient = require('./router/clientRoute');
const RouteDelivry = require('./router/DeliveryRoute');
const RouteProduct = require('./router/ProductRoute');
const RouteResto = require('./router/RestoRoute');
const RoutePurchase = require('./router/PurchaseRoute');

// Middleware pour traiter les données JSON
app.use(express.json());

// Utilisation des routes pour chaque entité
app.use('/api', RouteClient); // Route pour les clients
app.use('/api', RouteDelivry); // Route pour les livreurs
app.use('/api', RouteProduct); // Route pour les produits
app.use('/api', RouteResto); // Route pour les restaurants
app.use('/api', RoutePurchase); // Route pour les achats

// Route racine
app.get('/', (req, res) => {
    res.send("hello");
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});