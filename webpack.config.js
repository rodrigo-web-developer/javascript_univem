const path = require('path');

module.exports = {
  entry: './js/router.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};

//CLI = Command Line Interface