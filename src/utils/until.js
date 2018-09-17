/**
 * API配置文件
 */
const apiPath = process.env.NODE_ENV === 'production' ? '/' : '/api/' // api
/**
 * 二级域名
 */
const apiSlDomain = {
  default: '/'
}

const logo = 'shuguang'

module.exports = {
  apiPath,
  logo
}
