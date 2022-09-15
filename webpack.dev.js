const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const config = merge(commonConfig, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
      watch: true
    },
    port: 3000,
    historyApiFallback: true
  },
  devtool: "eval-source-map"
});

module.exports = config;
