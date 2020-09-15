const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const path = require("path");

module.exports = {
  entry: "./web/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: ".(js|css)$",
      filename: "index.html",
      template: "web/index.html",
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),

    // Remove the unused JS file.
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ["*.js"],
    }),
  ],
};
