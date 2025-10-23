const WEBPACK = require('webpack');
const PATH = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
resolve: {
    extensions: ['.js', '.jsx']
},
context: __dirname,
entry: {
    app: ['./src/index.jsx'] // app: ['./MY_FOLDER_INPUT/MY_FILE_INDEX.jsx']
},
output = {
    path: PATH.join(__dirname, '/MY_FOLDER_OUTPUT'),
    filename: 'index.js'
},
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
},
// plugins: [
//     // ...

//     new CopyWebpackPlugin({
//         patterns: [
//             { from: 'node_modules/@microsoft/office-js/dist', to: 'assets/office-js' }
//         ]
//     })
// ]
};