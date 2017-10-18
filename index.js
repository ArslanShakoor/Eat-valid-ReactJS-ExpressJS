const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

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
const PORT = process.env.PORT || 5000;
app.listen(PORT);
