const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

const commonConfig = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[contenthash].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

const developmentConfig = {
    ...commonConfig,
    mode: "development",
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "./dist"),
        },
        open: true,
        compress: true,
        hot: true,
        port: process.env.PORT || 8080,
    },
    resolve: {
        fallback: {
            os: require.resolve("os-browserify/browser"),
        },
    },
};

const productionConfig = {
    ...commonConfig,
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};

module.exports = (env, argv) => {
    if (argv.mode === "production") {
        return productionConfig;
    } else {
        return developmentConfig;
    }
};
