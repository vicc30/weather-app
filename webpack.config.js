const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
        publicPath: './docs',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './docs',
    },
    module: {
        rules: [
            {
                //CSS import modules
                test: /\.css/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                //Images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};