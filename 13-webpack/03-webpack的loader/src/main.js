//  1.新建入口js文件main.js 导入mathUtil.js文件，并调用
const {add, mul} = require("./js/mathUtils.js")

console.log(add(10, 20));
console.log(mul(10, 20));

//  2.使用es6语法导入
import info from './js/info'
console.log(info.name);
console.log(info.age);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')