const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Restaurant');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

//authentication in our app via cookies
//middle wares
app.use(bodyParser.json());
app.use(
  cookieSession({
    //in milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //embed our cookie
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// call the authroutes and pass the app object
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/restaurantRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // express will serve up prodction assets like
  // like our main.js file or main.css file
  app.use(express.static('client/build'));

  // express will server up index.html file
  // if it doesnot recoginize the routes
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
