const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWepackPlugin({
      title: "Plugins",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};
