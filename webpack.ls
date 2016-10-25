module.exports = do
  entry: './index.ls'
  output:
    path: './dist'
    filename: 'hello.js'
  module:
    loaders: [
      * test: /\.ls$/
        loader: \livescript-loader
    ]
  resolve:
    extensions: ['', '.js', '.ls']
