import envString from './environment'

export default class Storage {
  constructor() {
    this.envString = envString()
    this.storage = new Map()
  }

  getItem(key) {
    if (this.envString === 'mnp') {
      return wx.getStorageSync(key)
    } else if (this.envString === 'wechat') {
      return window.localStorage.getItem(key)
    } else if (this.envString === 'node') {
      return this.storage.get(key)
    } else {
      return window.localStorage.getItem(key)
    }
  }

  setItem(key, value) {
    if (this.envString === 'mnp') {
      wx.setStorageSync(key, value)
    } else if (this.envString === 'wechat') {
      window.localStorage.setItem(key, value)
    } else if (this.envString === 'node') {
      this.storage.set(key, value)
    } else {
      window.localStorage.setItem(key, value)
    }
  }
}
