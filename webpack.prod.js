const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path");

console.log("START");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  console.log("Welcome to production");
}
module.exports = {
  mode: "production",
  entry: ['./src/index.tsx'],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: `npm${__dirname}/public`,
    publicPath: '/',
    filename: 'app.min.js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
    
      inject: 'body',
      //favicon: path.resolve(__dirname, 'assets', 'fanicons', 'fanicon.png'),
      minify: {
          minifyCSS: true,
          minifyJS: true,
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          preserveLineBreaks: false,
          removeAttributeQuotes: true,
          removeComments: true
      }
  }),
    new Dotenv({
     path: '.env.' + process.env.NODE_ENV
      //path: ".env.development",
    }),
  ],
};
