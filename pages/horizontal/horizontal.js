// pages/horizontal/horizontal.js
Page({
  data:{
    x:"",
    y:"",
    z:"",
    animationData: {}
  },
  onLoad:function(options){
    
    
  },
  onReady:function(){
    // 页面渲染完成
    var self = this
    // 页面初始化 options为页面跳转所带来的参数
    wx.onAccelerometerChange(function(res) {
      self.setData({
        x:res.x,
        y:res.y,
        z:res.z
      })
      var animation = wx.createAnimation()

      self.animation = animation

      animation.translate(-(self.data.x*100), (self.data.y*100)).step()

      self.setData({
        animationData:animation.export()
      })
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