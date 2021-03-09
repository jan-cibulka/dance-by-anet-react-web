const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

console.log("START");
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log("Welcome to development");
}

module.exports = {
  mode: "development",
  watch: true,
  entry: ["./src/index.tsx"],
  devtool: "inline-source-map",
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
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "app.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),

    new Dotenv({
     path: '.env.' + process.env.NODE_ENV
      //path: ".env.development",
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    liveReload: true,
    port: 8000,
    historyApiFallback: true,
    writeToDisk: true,
  },
};
