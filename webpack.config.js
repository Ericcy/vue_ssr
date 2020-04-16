const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css为单独文件

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
      filename: 'index.html',
      minify: {
        removeComments: true, // 去除html的注释
        collapseWhitespace: true, // 清除html中的空格换行符
        minifyCSS: true, // 压缩html中的css
        minifyJs: true, // 压缩html中的js
        removeEmptyElements: true, // 清除html中内容为空的元素
        caseSensitive: true, // 以区分大小写的方式处理自定义标签内的属性。
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
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
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              ["@babel/plugin-transform-runtime"]
            ]
          }
        },
        exclude: /node_modules/
      },
      { // css-loader 解析css语法 style-loader 是吧css插入到head中。loader的执行顺序是从右到左从下到上
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}