const express = require('express');
require('./services/passport');

const app = express();

// call the authroutes and pass the app object
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
