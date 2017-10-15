const express = require('express');
const passport = require('express');
const GoogleStrategy = require('passport-google-oauth20');
const app = express();

// passport register google strategy
passport.use(new GoogleStrategy());

// app.get('/', (req, res) => {
//   res.send({ hi: 'there is commit' });
// });
// client_id = 540085184818-h7m5q072ro0lnp0gn729ingo7fu2c3pi.apps.googleusercontent.com
// client_secret = a-lKs1oEHFr6fh5rbgwrgoTV
const PORT = process.env.PORT || 5000;
app.listen(PORT);
