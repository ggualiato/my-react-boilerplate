const webpack = require("webpack");
const path = require("path");

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
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development"),
            },
        }),
    ],
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
