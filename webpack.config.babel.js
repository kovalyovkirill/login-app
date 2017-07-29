import path from 'path'
import * as webpack from 'webpack'

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './src/static')
  },
  devServer: {
    hot: true,
    publicPath: '/',
    contentBase: path.join(__dirname, "./src/static"),
    compress: true,
    port: 9090
  },
};