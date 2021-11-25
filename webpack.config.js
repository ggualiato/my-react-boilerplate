const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const webpackDevConfig = require("./config/webpack.dev.config");
const webpackProdConfig = require("./config/webpack.prod.config");

const commonConfig = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", "jsx"],
    },
    module: {
        rules: [
            {
                test: /\.ts|tsx$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js?x$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: "[path][name].[contenthash].[ext]",
                },
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
};

module.exports = (env) => {
    if (env.prod) {
        return merge(commonConfig, webpackProdConfig);
    }

    if (env.dev || env.WEBPACK_SERVE) {
        return merge(commonConfig, webpackDevConfig);
    }
};
