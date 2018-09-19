const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './index.html'
});

const providePluginJQuery = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});

const copyWebpackPlugin = new CopyWebpackPlugin([
    { from: './images', to: './images' },
    { from: './webfonts', to: './webfonts' },
    { from: './styles/all.min.css', to: './styles/all.min.css' }
]);

module.exports = {
    entry: {
        js: ['./scripts/setCss.js', './scripts/main.js', './scripts/main-mobile.js', './scripts/panels.js'],
        css: ['./styles/main.scss']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    },
    plugins: [
        copyWebpackPlugin,
        htmlWebpackPlugin,
        providePluginJQuery
    ],
    mode: 'development'
};
