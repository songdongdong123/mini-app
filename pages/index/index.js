//index.js
//获取应用实例
const app = getApp()

const api = require('../../utils/api.js')

Page({
  data: {
    booksArr: [],
    movieArr: [],
    loading: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getBooks()
    this.getMovie()
  },
  getBooks: function () {
    api.getDatas('https://api.douban.com/v2/book/search?tag=小说&count=4').then(res => {
      this.setData({
        booksArr: res.data.books,
        loading: false
      })
    })
  },
  getMovie: function () {
    api.getDatas('https://api.douban.com/v2/movie/search?tag=%E5%96%9C%E5%89%A7&count=4').then(res => {
      this.setData({
        movieArr: res.data.subjects
      })
    })
  }
})
