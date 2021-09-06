const webpack = require("webpack");
const envVariables = require("./utils/envVariables");

module.exports = {
    mode: "production",
    plugins: [new webpack.DefinePlugin(envVariables("production"))],
};
