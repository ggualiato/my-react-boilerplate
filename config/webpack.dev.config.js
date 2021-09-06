const webpack = require("webpack");
const path = require("path");
const envVariables = require("./utils/envVariables");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js?x$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    plugins: [new webpack.DefinePlugin(envVariables("development"))],
    devtool: "source-map",
    devServer: {
        overlay: true,
        open: true,
        contentBase: path.join(__dirname, "..", "public"),
        historyApiFallback: true,
        publicPath: "/dist/",
        port: 3000,
    },
};
