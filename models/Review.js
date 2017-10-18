const mongoose = require('mongoose');
const { Schemma } = mongoose;

const reviewSchema = new Schema({
  rating: String,
  overall: String,
  taste: String,
  anonymous: Number,
  cleanliness: String,
  staffDelivery: String,
  dateReviewed: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = reviewSchema;
