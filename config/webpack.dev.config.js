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
        devMiddleware: {
            publicPath: "/dist/",
        },
        static: {
            directory: path.join(__dirname, "..", "public"),
        },
        client: { overlay: true },
        open: true,
        historyApiFallback: true,
        port: 3000,
    },
};
