/**
 * 认证接口
 * @type {{ login: ((params?)) }}
 */

// 拦截器
import Ajax from '@/utils/fetch'
import until from '@/utils/until'
import Qs from 'qs'
let base = until.apiPath

const authApi = {
  /**
   * 后台登录
   * @param {String} userName 账号
   * @param {String} password 密码 md5 加密
   * @param {String} opts 配置请求参数
   */
  login(params, opts) {
    const data = Qs.stringify(params)
    return Ajax({
      // url: `${base}authentication/sign-in`,
      url: `${base}authentication/sign-in-auth`,
      method: 'post',
      opts,
      data
    })
    // const data = params
    // // const data = Qs.stringify(params)
    // return Ajax({
    //   url: `${base}dsf/login`,
    //   method: 'post',
    //   data,
    //   opts
    // })
  },

  /**
   * 后台退出
   * @param {String}
   */
  logout(params, opts) {
    return Ajax({
      url: `${base}api/user/logout`,
      method: 'get'
    })
  },

  /**
   * 注册开发商
   * @param {object} developerStr 表单信息
   */
  register(params, opts) {
    const data = Qs.stringify(params)
    return Ajax({
      url: `${base}resources/developer/register`,
      method: 'post',
      opts,
      data
    })
  },
  // 扫码登陆认证
  authenticationSacnCode(params, opts) {
    return Ajax({
      url: `${base}authentication/token/from/qrcode`,
      method: 'get',
      opts
    })
  }
}

export default authApi
