export default function envString() {
  // This should first return, for `npm test`
  if (typeof process === 'object') {
    if (typeof process.versions === 'object') {
      if (typeof process.versions.node !== 'undefined') {
        return 'node'
      }
    }
  }
  if (wx.navigateTo) {
    return 'mnp'
  }
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 'wechat'
  }
  return 'brower'
}