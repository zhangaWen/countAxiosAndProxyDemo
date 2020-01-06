/**
 * 包含多个接口请求函数的模块
 */
import ajax from './ajax'

const BASE = 'api'
export const reqAddress = (longitude,latitude) => ajax({
  method: "GET",
  url: BASE + `/position/${latitude},${longitude}`
})
