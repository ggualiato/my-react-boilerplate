const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
require("dotenv").config();

module.exports = (env) => {
    return {
        entry: "./src/app.js",
        mode: "development",
        output: {
            path: path.join(__dirname, "public", "dist"),
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
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
        devtool: env.prod ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/",
        },
    };
};
