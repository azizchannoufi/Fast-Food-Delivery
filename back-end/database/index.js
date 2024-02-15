const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fastfoddelivry').then(()=>{console.log("db connected")})
  .catch((err)=>{console.error('error with db: ',err);})
}

//  schéma pour le client
const clientSchema = new mongoose.Schema({
    id:Number,
    name: String,
    email: String,
    password: String
  });
  //  schéma pour le livreur
const deliveryPersonSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    location: {
      type: { type: String },
      coordinates: []
    }
  });
  
  //  schéma pour le restaurant
  const restaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    location: {
      type: { type: String },
      coordinates: []
    }
  });
  
  // schéma pour les produits
  const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    price: Number
  });
  
  //  les modèles à partir des schémas définis
  const Client = mongoose.model('Client', clientSchema);
  const DeliveryPerson = mongoose.model('DeliveryPerson', deliveryPersonSchema);
  const Restaurant = mongoose.model('Restaurant', restaurantSchema);
  const Product = mongoose.model('Product', productSchema);
  
  // Exporter les modèles pour les utiliser ailleurs dans l'application
  module.exports = { Client, DeliveryPerson, Restaurant, Product };