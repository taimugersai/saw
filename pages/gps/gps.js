// pages/gps/gps.js
Page({
  data:{
    ew:"",
    sn:"",
    we:"",
    ns:"",
    markers: [{
      latitude: 31.488860,
      longitude: 120.374500,
      name: '夜行侠网络科技',
      desc: '无锡国家软件园金牛座'
    }],
    covers: [{
      latitude: 31.488860,
      longitude: 120.374500,
      iconPath: '../../../images/logo.jpg',
      rotate: 10
    }, {
      latitude: 31.488860,
      longitude: 120.374500,
      iconPath: '../../../images/logo.jpg',
      rotate: 90
    }]
  },
  onLoad:function(options){
    var self = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        self.setData({
          ew:res.longitude,
          sn:res.latitude
        })
        if(res.longitude>0){
           self.setData({
              we:"东经",
            })
        }else{
          self.setData({
              we:"西经",
            })
        }

        if(res.latitude>0){
           self.setData({
              ns:"北纬 ",
            })
        }else{
          self.setData({
              ns:"南纬 ",
            })
        }
      }
    })
  },
  goback:function(){
    wx.navigateBack()
  },
  onReady:function(){
    // 页面渲染完成
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