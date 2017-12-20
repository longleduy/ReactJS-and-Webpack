const path = require('path');
// TODO: Export file css ra file riêng
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
    "bootstrap",
    "jquery",
    "react",
    "react-dom",
];
module.exports = {
    entry: {
        bundle: './src/JobManager/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/jobManager',
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [

            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            // TODO: Load css
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            //TODO: Load các loại file ( font, img...)
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf|\.mp3$|\.wav$/
            }
        ]
    },
    plugins: [
        // TODO: Cấu hình để sử dụng đc jquery
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'windown.$': 'jquery',
            'windown.jQuery': 'jquery'
        }),
        /* TODO: Optimize bundle.js và vendor.js => giảm kích thước file
               Thêm manifest: khi build lại project sẽ chỉ load lại những gói file có sự thay đổi ( thường là bundle.js) */ 
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor','manifest']
        }),
        // TODO: Sinh ra file index.html trong gói bundle
        new HtmlWebpackPlugin({
            template : 'src/JobManager/index.html'
        })
    ],
    //TODO: Trace log
    devtool: '#eval-inline-source-map',
}
