const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// import london from './images/london.JPG';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './index.html'
});

// const copyWebpackPlugin = new CopyWebpackPlugin([
//     { from: './images', to: './images' }
// ]);

module.exports = {
    entry: {
        js: ['./main.js', './main-m.js'],
        css: './styles/main.scss'
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
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        // copyWebpackPlugin,
        htmlWebpackPlugin
    ],
    mode: 'development'
};
