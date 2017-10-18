const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Restaurant = mongoose.model('Restaurant');
module.exports = app => {
  app.post('api/restaunts', requireLogin, (req, res) => {
    const { name, type, facebook, instagram, ownerEmail, address } = req.body;
  });
  const restaurant = new Restaurant({
    name,
    type,
    website,
    facebook,
    instagram,
    ownerEmail,
    address,
    dateCreated: Date.now()
  });
};
