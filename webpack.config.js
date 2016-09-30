var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./public/js/main.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + '/public/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.scss$/, loader: "style!css?sourceMap!postcss!sass?sourceMap" },
      { test: /\.(?:jpe?g|gif|svg|woff2?|ttf|eot)(?:\?(?:v=)?(?:\.|\w)+)?$/, loader: "file" }
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  postcss: function () {
    return [autoprefixer];
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
