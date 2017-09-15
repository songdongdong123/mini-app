
const getBooks = (url) => {
 return new Promise((resolve,reject) => {
   wx.request({
     url: url,
     method: 'GET',
     header: {
       "Content-Type": "json"
     },
     success: function (res) {
       resolve(res)
     }
   })
 })
}
module.exports = {
  getDatas: getBooks
}