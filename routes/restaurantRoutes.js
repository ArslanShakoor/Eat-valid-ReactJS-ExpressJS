const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Restaurant = mongoose.model('restaurants');
const Mailer = require('../services/Mailer');

const emailTemplate = require('../services/emailTemplates/emailTemplate');
module.exports = app => {
  app.post('api/restaurants', requireLogin, (req, res) => {
    const {
      name,
      type,
      website,
      facebook,
      instagram,
      ownerEmail,
      address
    } = req.body;
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
    const subject = 'What people say about' + name;
    const mailer = new Mailer(subject, surveyTemplate(restaurant), ownerEmail);
  });
};
