//1.导入node的path包获取绝对路径
const path = require('path')

//2.配置webpack的入口和出口
module.exports = {
  mode: 'development',
  entry: './src/main.js',  //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), //动态获取打包后的文件路径,path.resolve拼接路径
    filename: 'bundle.js',  //打包后的文件名
    publicPath: 'dist/'     //打包的文件目录
  },
  module: {
    rules: [
      {
        test: /\.css$/,   //正则表达式匹配css文件
        //css-loader只负责css文件加载，不负责解析，要解析需要使用style-loader
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,  //正则表达式匹配lss文件
        loader: ['style-loader', 'css-loader', 'less-loader'], // compiles Less to CSS
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, //图片小于8KB时候将图片转成base64字符串，大于8KB自动使用file-loader
              name: 'img/[name].[hash:8].[ext]'//img表示文件父目录，[name]表示文件名,[hash:8]表示将hash截取8位[ext]表示后缀
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}