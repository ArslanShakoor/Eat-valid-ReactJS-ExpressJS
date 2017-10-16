if (process.env.NODE_ENV === 'production') {
  // we are in the production  enviornment]
  module.exports = require('./prod');
} else {
  // we are in the development environment
  module.exports = require('./dev');
}
