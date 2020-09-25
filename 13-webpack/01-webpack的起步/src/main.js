//2.新建入口js文件main.js 导入mathUtil.js文件，并调用
const {add, mul} = require("./mathUtils.js")

console.log(add(10, 20));
console.log(mul(10, 20));

import info from './info'
console.log(info.name);
console.log(info.age);