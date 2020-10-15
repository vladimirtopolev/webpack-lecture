const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/index.js',
        admin: './src/admin.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    //devtool: 'source-map'
}