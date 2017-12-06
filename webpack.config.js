const webpack = require('webpack')
const path = require('path')


const config = {
    context: path.resolve(__dirname, 'app'),
    entry: "./app.jsx",
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
            Main: path.resolve(__dirname, 'app/components/Main/Main.jsx'),
            GiphyFinder: path.resolve(__dirname, 'app/components/GiphyFinder/GiphyFinder.jsx'),
            GiphyGrid: path.resolve(__dirname, 'app/components/GiphyGrid/GiphyGrid.jsx'),
            GiphyGridItem: path.resolve(__dirname, 'app/components/GiphyGrid/GiphyGridItem.jsx'),
            SearchBar: path.resolve(__dirname, 'app/components/SearchBar/SearchBar.jsx'),
        }
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname),
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['react', 'es2017', 'stage-0']
                  }
                }
            }
        ]
    }
}

module.exports = config;
