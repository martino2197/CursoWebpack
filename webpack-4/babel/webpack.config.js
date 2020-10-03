const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "js/[name].js",
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWepackPlugin({
      title: "webpack-dev-server",
    }),
  ],
};
