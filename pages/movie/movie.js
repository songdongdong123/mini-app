// pages/movie/movie.js
const api = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotShowing: [],
    comingSoon: [],
    loading: true
  },

  /**
   * 事件处理函数
   * 
  */
  getHotShowing: function () {
    api.getDatas('https://api.douban.com/v2/movie/in_theaters').then(res => {
      this.setData({
        hotShowing: res.data.subjects,
        loading: false
      })
    })
  },
  getComingSoon: function () {
    api.getDatas('https://api.douban.com/v2/movie/coming_soon').then(res => {
      this.setData({
        comingSoon: res.data.subjects
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotShowing()
    this.getComingSoon()
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