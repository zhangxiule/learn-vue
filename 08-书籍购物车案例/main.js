const app = new Vue({
  el: "#app",
  data: {
    books: [{
        name: "《算法导论》",
        beginDate: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.00,
        count: 1
      },
    ]
  },
  methods:{
    // 可直接用过滤器实现
    getFinalPrice(price){
      return '¥' + price.toFixed(2)
    },
    increment(item){
      item.count++
    },
    decrement(item){
      item.count--
    },
    removeHandle(index){
      this.books.splice(index, 1)
    }
  },
  filters:{
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0
      // 1. 普通for循环
      // for (let i = 0; i < this.books.length; i++){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice
      // 2. 增强for循环
      // for (let i in this.books){
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice
      // 3. for of
      // for (const book of this.books){
      //   totalPrice += book.price * book.count
      // }
      // return totalPrice
      // 4. 高阶函数
      // return this.books.map(function(book){
      //   return book.price * book.count
      // }).reduce(function(preValue, curValue){
      //   return preValue + curValue
      // }, 0)

      return this.books.map(book => book.price * book.count).reduce((preValue, curvalue) => preValue + curvalue)

    }
  }
})

const nums = [2,3,5,1,77,55,100,200]
// 1.filter过滤函数,filter中的回调函数有一个要求，必须返回一个boolean值
// let newNums = nums.filter(function(num){
//   return num < 100
// })

// filter箭头函数
let newNums = nums.filter(num => num < 100)
console.log(newNums)

// map函数的使用
// let newNums2 = newNums.map(function(n){
//   return n * 2
// })

//map 箭头函数
let newNums2 = newNums.map(num => num * 2)
console.log(newNums2)

// reduce函数
// reduce函数同样会遍历数组每一项，传入回调函数和‘0’为参数，0表示回调函数中preValue初始值为0，回调函数中参数preValue是每一次回调函数function返回的值，currentValue是当前值
// let newNums3 = newNums2.reduce(function(preValue, curvalue){
//   return preValue += curvalue
// }, 0)

// reduce箭头函数
let newNums3 = newNums2.reduce((preValue, curvalue) => preValue + curvalue)
console.log(newNums3)

// 结合三个箭头函数
let total = nums.filter(num => num < 100).map(num => num * 2).reduce((preValue, curvalue) => preValue + curvalue)
console.log(total)
