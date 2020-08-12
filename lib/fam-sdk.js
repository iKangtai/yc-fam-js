'use strict'
import Storage from './storage'
import envString from './environment'
const sha1 = require('js-sha1')
const axios = require('axios')
const md5 = require('md5')

export default class YCFam {
  /**
   *
   * @param {String} appId 应用 Id，由 yuncheng 分配
   * @param {String} appSecret 应用密钥，由 yuncheng 分配
   * @param {String} unionId 用户唯一标识符。同一个应用內，两个用户不能重复
   */
  constructor(appId, appSecret, unionId) {
    this.appId = appId
    this.appSecret = appSecret
    this.unionId = unionId
    this.sessionId = 'BE64E196C20D91D3D75DACFEB9800272'
    this.storage = new Storage()
    this.baseURL = 'https://testsaas.shecarefertility.com'
    this.envString = envString()
  }

  getCTS() {
    return ((new Date().getTime() / 1000) | 0) + ''
  }

  /**
   * 返回算法签名，用于接口校验
   * @param {String} cTS 时间戳，单位秒
   * @returns {String} SHA1 加密字符串
   */
  getSigns(cTS) {
    if (!cTS || cTS.length === 0) {
      cTS = this.getCTS()
    }
    return sha1(this.appId + this.appSecret + cTS + 'yunchengSaas')
  }

  commonGetParams() {
    let dataURL = '?'
    dataURL += 'appId=' + this.appId
    let cTS = this.getCTS()
    dataURL += '&signs=' + this.getSigns(cTS)
    dataURL += '&ts=' + cTS
    dataURL += '&sessionId=' + this.sessionId
    dataURL += '&version=v2'
    return dataURL
  }

  /**
   * 发起算法请求
   * @param {String} debugId 格式为 UUID 的字符串，用于唯一标记一次请求
   * @param {Object} input 算法的输入项
   * @returns {Promise} 返回算法请求结果
   */
  getFAMDays(debugId, input) {
    let newKey = md5(input) + ''
    let oldResult = this.storage.getItem(newKey)
    if (oldResult) {
      return new Promise((resolve) => {
        resolve(JSON.parse(oldResult))
      })
    }
    let data = Object.assign(
      {
        appId: this.appId,
        unionId: this.unionId,
        debugId: debugId
      },
      { data: input }
    )
    if (this.envString === 'mnp') {
      return this.getFAMDaysForMNP(newKey, data)
    } else {
      return this.getFAMDaysForH5(newKey, data)
    }
  }

  getFAMDaysForMNP(newKey, data) {
    const self = this
    return new Promise((resolve, reject) => {
      wx.request({
        method: 'post',
        url:
          self.baseURL +
          '/custom/al/yuncheng/famGetDay' +
          self.commonGetParams(),
        data: data,
        success(res) {
          if (res.data.code === 200) {
            // Local storage can only save strings
            self.storage.setItem(newKey, JSON.stringify(res.data))
            resolve(res.data)
          } else {
            reject(new Error(res.data.message))
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }

  getFAMDaysForH5(newKey, data) {
    const self = this
    let reqInstance = axios.create()
    return new Promise((resolve, reject) => {
      reqInstance({
        method: 'post',
        url:
          self.baseURL +
          '/custom/al/yuncheng/famGetDay' +
          self.commonGetParams(),
        data: data
      })
        .then((res) => {
          if (res.data.code === 200) {
            // Local storage can only save strings
            self.storage.setItem(newKey, JSON.stringify(res.data))
            resolve(res.data)
          } else {
            reject(new Error(res.data.message))
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
