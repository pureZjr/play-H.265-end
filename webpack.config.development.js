const path = require('path')
const webpack = require('webpack')
const _externals = require('externals-dependencies')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: {
        app: [
            // 如果polyfill放在这里，打包的时候将不会被external,必须在js里require才能有效external
            // 'babel-polyfill',
            path.join(__dirname, 'app.ts')
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    target: 'node',
    // 移除掉所有绝对路径的引用，只保留以.开头的，也就是相对路径的引用
    externals: /^(?![.])./,
    externals: _externals(),
    externals: [nodeExternals()],
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['ts-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.js/,
                use: ['babel-loader'],
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        })
    ]
}
