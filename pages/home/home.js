// pages/home/home.js
Page({
  data:{
    name:'zhengqiwei',
    age:20,
    count:0
  },
  handleClick(){
    this.setData({
      count: this.data.count + 1
    })
    console.log('test')
  }
  
})