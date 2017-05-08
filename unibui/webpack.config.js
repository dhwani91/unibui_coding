var webpack = require('webpack');

module.exports = {
    entry: [
        './index.js'
    ],
    output: {
        path: './',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: 8080,
        headers: {
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};