const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './index.html'
});

module.exports = {
    entry: {
        js: './main.js',
        css: './main.scss'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            "jquery": path.resolve('node_modules', 'jquery/src/tilt.jquery.js')
        },
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        htmlWebpackPlugin
    ],
    mode: 'development'
};