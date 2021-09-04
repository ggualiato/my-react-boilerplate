const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const webpackDevConfig = require("./config/webpack.dev.config");
const webpackProdConfig = require("./config/webpack.prod.config");
require("dotenv").config();

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
                test: /\.less$|.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    { loader: "css-loader" },
                    { loader: "less-loader" },
                ],
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
    plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin({ filename: "styles.css" })],
};

module.exports = (env) => {
    if (env.prod) {
        return merge(commonConfig, webpackProdConfig);
    }

    if (env.dev || env.WEBPACK_SERVE) {
        return merge(commonConfig, webpackDevConfig);
    }
};
