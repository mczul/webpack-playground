const path = require('path');

const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
    },
    output: {
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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
                test: /\.jpe?g$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contentHash].[ext]',
                            outputPath: 'images',
                        }
                    }
                ]
            },
            // Texts
            {
                test: /\.txt$/i,
                use: [
                    {loader: 'raw-loader', options: {}}
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css'
        }),
    ]
}