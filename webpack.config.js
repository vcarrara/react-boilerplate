const HtmlWebPackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        'react-boilerplate': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/dist`,
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
}
