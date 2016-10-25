require! webpack

minify = -1 != process.argv.index-of \--minify

module.exports = do
  entry: [
    './index.ls'
  ]
  output:
    path: './dist'
    filename: if minify then 'hello.min.js' else 'hello.js'
  module:
    loaders: [
      * test: /\.ls$/
        exclude: /node_modules/
        loader: \livescript-loader
    ]
  resolve:
    extensions: ['', '.js', '.ls']
  plugins: if minify then [new webpack.optimize.UglifyJsPlugin compress: warnings: false] else []

# When minify, append library target
if minify
  module.exports.output <<< do
    library-target: \var
    library: 'Boilerplate'
