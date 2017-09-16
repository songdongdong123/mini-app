const api = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetail: {},
    loading: true,
    unloading: false
  },

  /**
   * 自定义时间处理函数
   * 
  */
  methods: {
    getmovieDetail (id) {
      return new Promise((reslove, reject) => {
        api.getDatas('https://api.douban.com/v2/movie/subject/' + id).then(res => {
          if (res.statusCode === 200) {
            reslove(res.data)
          }
        })
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.methods.getmovieDetail(options.id).then(res => {
      this.setData({
        movieDetail: res,
        loading: false,
        unloading: true
      })
      console.log(this.data.movieDetail)
    })
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