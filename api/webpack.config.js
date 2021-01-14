const path = require('path');

module.exports = {
  entry: './index.js',
  target: 'node',
  module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js'
  }
};