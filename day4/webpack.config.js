const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: `./src/js/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html'
    })
  ],
  performance: {
    hints: false
  }
}
