const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    /** 配置解析规则 */
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    /** 配置模块loader */
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'poplar',
            template: path.resolve(__dirname, './index.html'),
        }),
    ],
    devServer: {
        static: './dist',
        hot: true,
        port: 7777,
    },
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
}
