// pages/weather/weather.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    wx.request({
      url: 'https://free-api.heweather.com/v5/', //仅为示例，并非真实的接口地址
      data: {
        city: '无锡' ,
        key: 'b17f0acadb714cdb9111c8e45d228c0c'
      },
      success: function(res) {
        console.log(res.data)
      }
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})