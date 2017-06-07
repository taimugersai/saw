// pages/watch/watch.js
Page({
  data:{
    hours1:0,
    hours2:0,
    minutes1:0,
    minutes2:0,
    seconds1:0,
    seconds2:0,
    ms1:0,
    ms2:0,
    status:"开始",
    timer:"",
    list:[]
  },
  start:function(){
    var self = this
    var timer;
    if(self.data.status=="开始"||self.data.status=="继续"){
      self.setData({
        status:"暂停"
      })
      timer= setInterval(
      function(){
        self.setData({
          ms2:self.data.ms2+1
        })
        if(self.data.ms2==10){
          var ms2 = 0;
          self.setData({
            ms2:ms2,
            ms1:self.data.ms1+1
          })
        }
        if(self.data.ms1==10){
           var ms1 = 0;
          self.setData({
            ms1:ms1,
            seconds2:self.data.seconds2+1
          })
        }
        if(self.data.seconds2==10){
           var seconds2 = 0;
          self.setData({
            seconds1:self.data.seconds1+1,
            seconds2:seconds2
          })
        }
         if(self.data.seconds1==6){
           var seconds1 = 0;
          self.setData({
            seconds1:seconds1,
            minutes2:self.data.minutes2+1,
          })
        }
        if(self.data.minutes2==10){
           var minutes2 = 0;
          self.setData({
            minutes2:minutes2,
            minutes1:self.data.minutes1+1,
          })
        }
        if(self.data.minutes1==6){
           var minutes1 = 0;
          self.setData({
            hours2:self.data.hours2+1,
            minutes1:minutes1
          })
        }
         if(self.data.hours2==10){
           var hours2 = 0;
          self.setData({
            hours2:hours2,
            hours1:self.data.hours1+1,
          })
        }
      },10)
      self.setData({
        timer:timer
      })
    }else if(self.data.status=="暂停"){
      console.log(self.data.timer)
      clearInterval(self.data.timer)
      self.setData({
        status:"继续"
      })
    }
  },
  reset:function(){
    this.setData({
      hours1:0,
      hours2:0,
      minutes1:0,
      minutes2:0,
      seconds1:0,
      seconds2:0,
      ms1:0,
      ms2:0,
      status:"开始",
      timer:"",
      list:[]
    })
  },
  add:function(){
    var self=this;
    var time = self.data.hours1+self.data.hours2+":"+self.data.minutes1+self.data.minutes2+":"+self.data.seconds1+self.data.seconds2+"."+self.data.ms1+self.data.ms2
    self.data.list.push(time)
    self.setData({
      list:self.data.list
    })
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