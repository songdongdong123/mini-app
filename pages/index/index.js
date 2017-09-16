//index.js
//获取应用实例
const app = getApp()

const api = require('../../utils/api.js')

Page({
  data: {
    styleTags: ['OST','POP', 'indie', '民谣'],
    countryTags: ['中国', '台湾', '香港', '英国', '美国', '法国', '德国', '韩国'],
    artistTags: ['周杰伦', '陈奕迅', '五月天', '苏打绿', '蔡健雅', '王力宏', '朴树', '张国荣', '许巍', '范晓萱', '林俊杰'],
    styleTagsArr: [],
    artistArr: [],
    countryArr: [],
    cur1: 0,
    cur2: -1,
    cur3: -1,
    loading: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(this.data)
    this.getMusics(this.data.styleTags[this.data.cur1])
    // this.getMovie()
  },
  getMusics: function (tag) {
    api.getDatas('https://api.douban.com/v2/music/search?tag=' + tag).then(res => {
      // this.setData({
      //   booksArr: res.data.books,
      //   loading: false
      // })
      console.log(res)
    })
  },
  toDetail: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      //目的页面地址
      url: "bookdetail/bookdetail?id=" + id
    })
  },
  toMovieDetail: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: "moviedetail/moviedetail?id=" + id
    })
  },
  changeClass1: function (e) {
    this.setData({
      cur1: e.currentTarget.dataset.num,
      cur2: -1,
      cur3: -1
    })
    console.log(e.currentTarget.dataset.tag)
  },
  changeClass2: function (e) {
    this.setData({
      cur2: e.currentTarget.dataset.num,
      cur1: -1,
      cur3: -1
    })
  },
  changeClass3: function (e) {
    this.setData({
      cur3: e.currentTarget.dataset.num,
      cur2: -1,
      cur1: -1
    })
  }
})
