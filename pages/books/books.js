const api = require('../../utils/api.js')
// pages/books/books.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotArr: [],
    hotFictionArr: [],
    proseArr: [],
    loading: true
  },

  /**
   * 事件处理函数
   * 
  */
  getHotBooks: function () {
    api.getDatas('https://api.douban.com/v2/book/search?tag=%E7%83%AD%E9%97%A8&count=5').then(res => {
      let temp = res.data.books
      this.setData({
        hotArr: temp,
        loading: false
      })
    })
  },
  getHotFiction: function () {
    if (!this.data.hotFictionArr.length) {
      api.getDatas('https://api.douban.com/v2/book/search?tag=%E5%B0%8F%E8%AF%B4&count=5').then(res => {
        this.setData({
          hotFictionArr: res.data.books
        })
      })
    }
  },
  getProse: function () {
    if (!this.data.proseArr.length) {
      api.getDatas('https://api.douban.com/v2/book/search?tag=%E6%95%A3%E6%96%87&count=10').then(res => {
        this.setData({
          proseArr: res.data.books
        })
      })
    }
  },
  toDetail: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      //目的页面地址
      url: "bookdetail/bookdetail?id=" + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotBooks()
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
    this.getHotFiction()
    this.getProse()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
