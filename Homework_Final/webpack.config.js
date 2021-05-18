const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            filename: "index.[hash].html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.[hash].css",
        })
    ],
};