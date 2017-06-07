// pages/txt/txt.js
Page({
  data:{
     hidden:"hidden",
     imgurl:"../../../images/add.png"
  },
  more:function(){
    if(this.data.hidden=="hidden"){
      this.setData({
        hidden:"",
        imgurl:"../../../images/cancel.png"
      })
    }else{
      this.setData({
        hidden:"hidden",
        imgurl:"../../../images/add.png"
      })
    }
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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