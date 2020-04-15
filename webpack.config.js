const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer: {
    host: '10.8.6.234',
    port: '8081',
    open: true,
    progress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }]
              ["@babel/plugin-transform-runtime"]
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}