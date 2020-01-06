/**
 * 送ajax请求的函数,函数的返回值是promise
 * 1:处理post请求的请求参数，转换成urlencode格式（默认json格式）===》请求拦截器
 * 2：让成功的结果不是response而是responsedata===》相应拦截器的成功回调
 * 3：统一出路请求的错误===》响应拦截器的失败回调
 * 
 */
import axios from 'axios'
import qs from 'qs'

//请求拦截器
axios.interceptors.request.use(config => {
  const {method,data} = config
  if (method.toUpperCase() ==="POST" && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
//响应拦截器
axios.interceptors.response.use(response =>{
  return response.data
},error =>{
  alert('请求异常'+error.message)
  //终端promise链
  return new Promise(() => {})
})


export default axios