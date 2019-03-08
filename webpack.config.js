const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        path:path.resolve(__dirname, './dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env'],
                }
            },
            {
                test: /\.vue$/,
                loader:'vue-loader',
            },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader',
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                loader:'url-loader',
                exclude: /node_modules/ 
            }
        ]
    },
    resolve:{
        alias:{
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src')
        }
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    devServer:{
        port:5000,
        historyApiFallback: true,
    }
}
