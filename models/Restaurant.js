const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = require('./Rating');

const restaurantSchema = new Schema({
  name: String,
  website: String,
  type: String,
  featured: String,
  facebook: String,
  instagram: String,
  ownerEmail: String,
  address: String,
  dateCreated: Date,
  review: [ReviewSchema]
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

module.export = Restaurant;
