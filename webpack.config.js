const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', `@babel/preset-react`]
          }
        } 
      }, 
      {
        test: /\.s[ac]ss$/i, 
        exclude: /node_modules/,
        use: 
          [
            'style-loader', 
            'css-loader', 
            'sass-loader'
          ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, '/client'),
    },
  }
}