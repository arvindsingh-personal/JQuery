const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean:true,
  },
  devServer:{
   static:{
    directory:path.resolve(__dirname,'dist')
   },
  port:4500,
  open:true,
  hot:true,
  compress:true,
  historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-env','@babel/preset-react'],
          }
        }
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Hangman Game',
      filename:'index.html',
      template:'src/template.html',
    })
  ]
}