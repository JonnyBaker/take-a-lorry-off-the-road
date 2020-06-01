const serverless = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: serverless.lib.webpack.isLocal ? 'development' : 'production',
  devtool: 'source-map',
  target: 'node',
  entry: serverless.lib.entries,
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: [nodeExternals()],
};
