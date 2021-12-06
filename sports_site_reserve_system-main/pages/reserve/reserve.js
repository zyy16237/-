// pages/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"",
    siteVariety:[
        {
            img_src:"/icon/sites/健身房.png",
            name:"健身房"
        },
        {
            img_src:"/icon/sites/乒乓球.png",
            name:"乒乓球"
        },
        {
            img_src:"/icon/sites/足球.png",
            name:"足球"
        },
        {
            img_src:"/icon/sites/篮球.png",
            name:"篮球"
        },
        {
            img_src:"/icon/sites/排球.png",
            name:"排球"
        },
        {
            img_src:"/icon/sites/羽毛球.png",
            name:"羽毛球"
        },
        {
            img_src:"/icon/sites/网球.png",
            name:"网球"
        },
        {
            img_src:"/icon/sites/台球.png",
            name:"台球"
        },
    ],
    activitySwiper:[
        {
            img_src:'/icon/activity.jpeg'
        },
        {
            img_src:'/icon/activity.jpeg'
        }
    ],
    siteSwiper:[
        {
            img_src:'/icon/site1.jpg'
        },
        {
            img_src:'/icon/site2.jpg'
        },
        {
            img_src:'/icon/site3.jpg'
        },
    ]
  },
  getAddress:function(){
    var that = this;
    wx.chooseLocation({
      latitude: 0,
      desc: '应用需要获取你的位置信息',
      success:function(res){
          console.log(res);
        that.setData({address:res.address});
      }
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})