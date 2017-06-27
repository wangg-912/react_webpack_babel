var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 设置常用路径

var ROOT_PATH = path.resolve(__dirname);
//var APP_PATH = path.resolve(ROOT_PATH,"Components");
var APP_PATH = path.resolve(ROOT_PATH,"Login");
var BUILD_PATH = path.resolve(ROOT_PATH,"build");

module.exports = {
    entry:{
        "app":path.resolve(APP_PATH,"index.jsx")
    },
    output:{
        path:BUILD_PATH,
        filename:"bundle.js"
    },
    node: {
        fs: "empty"
    },
    devtool: 'source-map',
    module: {
        loaders:[{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        },
        { 
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
      }]
     },
     resolve: {
       modules: [__dirname, 'node_modules'],
        alias:{
        },
        extensions: ['*','.js','.jsx']
    },
    plugins:[
         new HtmlwebpackPlugin({
            title: 'Webpack-demos',
            template: './src/tpl/app.html', //加载模板
            inject: 'body' 

        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:9000'
        })
    ]
}
