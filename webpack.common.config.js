const path = require('path');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/index.ts',
        vendor: './src/vendor.ts',
    },
    output: {
        filename: '[name].[contenthash].js',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[contenthash][ext][query]'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // TypeScript
            {
                test: /\.ts$/i,
                use: [
                    { loader: 'ts-loader' }
                ],
                exclude: /node_modules/i
            },
            // SCSS / CSS
            {
                test: /\.scss$/i,
                use: [
                    // Export CSS to file
                    MiniCssExtractPlugin.loader,
                    // Load CSS to JS
                    'css-loader',
                    // Compile SCSS to CSS
                    'sass-loader'
                ]
            },
            // Images
            {
                test: /\.(jpe?g|png)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ]
}