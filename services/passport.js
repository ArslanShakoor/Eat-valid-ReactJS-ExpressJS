const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

//import the model users to use in passport
const User = mongoose.model('users');

//set id as a token and use as cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//read the cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      //find if the user already exists
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //tell the passport we have done
          done(null, existingUser);
        } else {
          //create the model(User) instance and save it using save() method
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
