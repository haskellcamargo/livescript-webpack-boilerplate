module.exports = do
  entry: [
    './index.ls'
  ]
  output:
    path: './dist'
    filename: 'hello.js'
  module:
    loaders: [
      * test: /\.ls$/
        exclude: /node_modules/
        loader: \livescript-loader
    ]
  resolve:
    extensions: ['', '.js', '.ls']
