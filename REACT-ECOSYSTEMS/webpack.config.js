const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['.*', '.js', '.jsx']},
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        // devMiddleware: {
        //     //contentBase: path.join(__dirname, 'public/'),
        //     index: true,
        //     mimeTypes: { phtml: 'text/html' },
        //     publicPath: 'http//localhost:/3000/dist/',
        //     serverSideRender: true,
        //     writeToDisk: true,
        //   },
        //contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        //publicPath: 'http//localhost:/3000/dist/',
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};