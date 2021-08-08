const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'none',
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          esModule: false,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp4|ogv|webm|woff|eot|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  devServer: {
    port: 8080,
    open: true,
    // router 같은 것을 쓸 때 새로고침 시 Cannot GET /signup 이런 에러가 뜨는 것을 해결
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // changeOrigin: true,
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'src/index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'style.css',
    // }),
  ],
};
