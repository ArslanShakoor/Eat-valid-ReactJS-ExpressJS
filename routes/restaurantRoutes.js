const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Restaurant = mongoose.model('restaurants');
const Mailer = require('../services/Mailer');
const Rating = require('../models/Rating');

const emailTemplate = require('../services/emailTemplates/emailTemplate');
module.exports = app => {
  app.get('/api/infoRestaurant/:id', async (req, res) => {
    const id = req.params.id;

    const info = await Restaurant.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $group: {
          _id: '$_id',
          overall: { $push: { $avg: '$review.overall' } },
          taste: { $push: { $avg: '$review.taste' } },
          cleanliness: { $push: { $avg: '$review.cleanliness' } },
          service: { $push: { $avg: '$review.service' } },
          name: { $first: '$name' },
          type: { $first: '$type' },
          webste: { $first: '$website' },
          instagram: { $first: '$name' },
          facebook: { $first: '$facebook' }
        }
      },
      {
        $project: {
          _id: 1,
          avg: 1,
          name: 1,
          type: 1,
          website: 1,
          facebook: 1,
          instagram: 1,
          overall: 1,
          taste: 1,
          cleanliness: 1,
          service: 1
        }
      }
    ]);
    res.send(info);
  });
  app.get('/api/reviewsRestaurant/:id', async (req, res) => {
    const id = req.params.id;
    const rest = await Restaurant.find({ _id: id })
      .populate('_id review._user')
      .select('review');
    res.send(rest);
  });

  app.get('/api/selectField/', async (req, res) => {
    const fields = await Restaurant.find({}).select('name');
    res.send(fields);
  });
  app.get('/api/featuredRestaurants', async (req, res) => {
    const featured = await Restaurant.aggregate([
      { $match: { featured: 'true' } },
      { $limit: 4 },
      {
        $group: {
          _id: '$_id',
          avg: { $push: { $avg: '$review.overall' } },
          name: { $first: '$name' },
          type: { $first: '$type' },
          description: {
            $first: '$review.description'
          }
        }
      },
      {
        $project: {
          _id: 1,
          name: 1,
          type: 1,
          avg: 1,
          description: { $arrayElemAt: ['$description', 0] }
        }
      }
    ]);

    res.send(featured);
  });
  app.get('/api/ratings', requireLogin, async (req, res) => {
    const ratings = await Restaurant.find({
      'review._user': req.user.id
    }).select('review');
    res.send(ratings);
  });
  app.post('/api/ratings', requireLogin, async (req, res) => {
    const {
      overall,
      taste,
      anonymous,
      cleanliness,
      staffDelivery,
      service,
      rating,
      description
    } = req.body;
    const newRating = {
      overall,
      taste,
      anonymous,
      cleanliness,
      staffDelivery,
      service,
      description,
      _user: req.user.id,
      dateCreated: Date.now()
    };

    const restaurant = await Restaurant.findOne({ _id: rating });
    try {
      await restaurant.review.push(newRating);
      await restaurant.save();
      res.send(newRating);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  app.post('/api/restaurants', requireLogin, async (req, res) => {
    const {
      name,
      type,
      website,
      facebook,
      instagram,
      ownerEmail,
      featured,
      address
    } = req.body;
    const restaurants = new Restaurant({
      name,
      type,
      website,
      facebook,
      instagram,
      ownerEmail,
      featured,
      address,
      dateCreated: Date.now()
    });

    const subject = 'What people say about' + name;
    console.log(subject);
    const mailer = new Mailer(subject, emailTemplate(restaurants), ownerEmail);
    try {
      await mailer.send();
      await restaurants.save();
      res.send(restaurants);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
