const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  overall: Number,
  taste: Number,
  cleanliness: Number,
  service: Number,
  anonymous: String,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateCreated: Date
});

module.exports = ratingSchema;
