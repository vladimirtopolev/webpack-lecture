const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //  01 teach webpack to handle css-files
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },

            // 02 teach webpack to handle any including image resources
            { test: /\.(png|jpg|jpeg)/, use: ['file-loader'] }
        ]
    }
}