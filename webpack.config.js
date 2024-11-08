const path = require('path');

module.exports = {
  // Other configurations...

  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Adjust based on your output directory
    compress: true,
    port: 3000,
    overlay: false, // Disable the error overlay
    // Other configurations...
  },

  // Other configurations...
};