//index.js
//获取应用实例
const app = getApp()

const api = require('../../utils/api.js')

Page({
  data: {
    styleTags: ['纯音乐', 'POP', 'R&B', '民谣', '	钢琴'],
    countryTags: ['	爱尔兰', '	西班牙', '	意大利', '英国', '美国', '法国', '俄罗斯', '韩国'],
    artistTags: ['周杰伦', '陈奕迅', '五月天', '苏打绿', '蔡健雅', '王力宏', '	蔡依林', '张国荣', '许巍', '范晓萱', '林俊杰'],
    musicArr: [],
    cur1: 0,
    cur2: -1,
    cur3: -1,
    loading: true,
    contentState: false,
    searchVal: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getMusics(this.data.styleTags[0])
    // this.getMovie()
  },
  searchMusic: function (e) {
    // console.log(e)
    this.setData({
      loading: true
    })
    api.getDatas('https://api.douban.com/v2/music/search?tag=' + e.detail.value).then(res => {
      this.handleStr(res.data.musics)
      this.setData({
        musicArr: res.data.musics,
        loading: false,
        contentState: true,
        searchVal: ''
      })
    })
  },
  handleStr: function(music) {
    let strTemp = ''
    for (let list of music) {
      strTemp = ''
      for (let item of list.tags) {
        strTemp += item.name + '/'
      }
      strTemp = strTemp.slice(0, strTemp.length - 1)
      list.targs = strTemp
    }
  },
  getMusics: function (tag) {
    api.getDatas('https://api.douban.com/v2/music/search?tag=' + tag).then(res => {
      this.handleStr(res.data.musics)
      this.setData({
        musicArr: res.data.musics,
        loading: false,
        contentState: true
      })
    })
  },
  toDetail: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      //目的页面地址
      url: "musicdetail/musicdetail?id=" + id
    })
  },
  changeClass1: function (e) {
    this.setData({
      cur1: e.currentTarget.dataset.num,
      cur2: -1,
      cur3: -1,
      loading: true
    })
    console.log(e.currentTarget.dataset.tag)
    this.getMusics(e.currentTarget.dataset.tag)
  },
  changeClass2: function (e) {
    this.setData({
      cur2: e.currentTarget.dataset.num,
      cur1: -1,
      cur3: -1,
      loading: true
    })
    this.getMusics(e.currentTarget.dataset.tag)
  },
  changeClass3: function (e) {
    this.setData({
      cur3: e.currentTarget.dataset.num,
      cur2: -1,
      cur1: -1,
      loading: true
    })
    this.getMusics(e.currentTarget.dataset.tag)
  }
})
