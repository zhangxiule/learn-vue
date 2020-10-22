//导入webpack-merge对象
const webpackMerge = require('webpack-merge')
//导入base.config.js
const baseConfig = require('./base.config')
//使用webpackMerge将baseConfig和dev.config的内容合并
module.exports = webpackMerge.merge(baseConfig, {
  devServer: {    //配置webpack-dev-server，注意与webpack、webpack-cli版本可能会有冲突
    contentBase: './dist',
    host: 'localhost',
    port: 8080,
    open: true
  }
})