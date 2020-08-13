import envString from './environment'

export default class Storage {
  constructor() {
    this.envString = envString()
    this.storage = new Map()
    this.itemsKey = 'yc_fam_js_cache'
    this.itemsCount = 3
  }

  getItems() {
    let itemsStr = ''
    if (this.envString === 'mnp') {
      itemsStr = wx.getStorageSync(this.itemsKey)
    } else if (this.envString === 'node') {
      itemsStr = this.storage.get(this.itemsKey)
    } else {
      itemsStr = window.localStorage.getItem(this.itemsKey)
    }

    let items = []
    if (itemsStr) {
      items = JSON.parse(itemsStr)
    }
    return items
  }

  getItem(key) {
    let items = this.getItems()
    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      if (item.intput === key) {
        return item.output
      }
    }
    return null
  }

  setItem(key, value) {
    let items = this.getItems()
    while (items.length >= this.itemsCount) {
      items.shift()
    }
    let newItem = {
      intput: key,
      output: value
    }
    items.push(newItem)

    let itemsStr = JSON.stringify(items)
    if (this.envString === 'mnp') {
      wx.setStorageSync(this.itemsKey, itemsStr)
    } else if (this.envString === 'node') {
      this.storage.set(this.itemsKey, itemsStr)
    } else {
      window.localStorage.setItem(this.itemsKey, itemsStr)
    }
  }
}
