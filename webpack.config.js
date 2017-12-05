const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})*/

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist/'
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    proxy: {
      '/api': {
        target: 'http://dev.amnestydecoders.com/',
        pathRewrite: {'^/api' : '/api'}
      }
    }
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.(eot|svg|ttf|woff|woff2|otf|png|jpg|svg)$/, loader: 'file-loader'},
    ],
  },
  // plugins: [HtmlWebpackPluginConfig]
}
