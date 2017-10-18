const mongoose = require('mongoose');
const { Schemma } = mongoose;
const ReviewSchema = require('./Review');
const restaurantSchema = new Schema({
  name: String,
  website: String,
  type: String,
  facebook: String,
  Instagram: String,
  ownerEmail: String,
  address: String,
  dateCreated: Date
  review:ReviewSchema
});

mongoose.model('restaurants', restaurantSchema);
