import Cookies from 'js-cookie'
import jwt from 'jwt-decode'

const cookies:any = {}

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */
cookies.set = function (name = 'default', value = '', cookieSetting = {}) {
  // const currentCookieSetting = {
  //   expires: 1
  // }//过期时间为1天的cookie
  const currentCookieSetting = {
    
  }//会话型cookie，关闭浏览器即被删除
  Object.assign(currentCookieSetting, cookieSetting)
  Cookies.set(`ljw-${name}`, value, currentCookieSetting)
}

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = 'default') {
  return Cookies.get(`ljw-${name}`)
}

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
  return Cookies.get()
}

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = 'default') {
  return Cookies.remove(`ljw-${name}`)
}

cookies.verify = function (token='') {
  const info = jwt(token)
  return info
}

export default cookies