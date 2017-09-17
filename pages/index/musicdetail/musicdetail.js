const api = require('../../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicdetail: {},
    otherSongs: [],
    authorStr: '',
    tagStr: '',
    loading: true
  },

  /**
   * 自定义事件处理
   * */
   handleStr: function (arr) {
    let tempStr = ''
    for (let list of arr) {
      tempStr += list.name + '/'
    }
    tempStr = tempStr.slice(0, tempStr.length - 1)
    return tempStr
   },
   getMusicDetail: function (id) {
    api.getDatas('https://api.douban.com/v2/music/' + id).then(res => {
      let authors = this.handleStr(res.data.author)
      let tags = this.handleStr(res.data.tags)
      this.setData({
        musicdetail: res.data,
        authorStr: authors,
        tagStr: tags,
        loading: false
      })
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = '26342954'
    console.log(options.id)
    this.getMusicDetail(options.id)
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