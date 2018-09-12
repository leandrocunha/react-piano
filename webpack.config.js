const path = require('path');

module.exports = {
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: {
          loader: 'sass-loader',
        },
      },
    ],
  },
};
