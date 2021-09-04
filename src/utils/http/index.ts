import axios, {AxiosInstance, AxiosRequestConfig} from 'axios'
import config from '../../config'
import {ElMessage} from "element-plus";
const instance = axios.create({
  baseURL: config.baseURL,
  timeout: 8000
})

instance.interceptors.request.use(request => {
  const headers = request.headers
  if (!headers.Authorization) headers.Authorization = 'Bear Jack'
  return request
})

instance.interceptors.response.use(response => {
  const { code, data, msg } = response.data
  if (code === 200){
    return data
  }else if (code === 40001){
    ElMessage.error('错误')
    return Promise.reject('错误')
  }else {
    ElMessage.error(msg)
    return Promise.reject(msg)
  }
})

/**
 * 请求的核心函数
 * @param options  请求配置
 */
// function request (options: AxiosRequestConfig) {
//   options.method = options.method || 'get'
//   if (options.method.toLocaleLowerCase() === 'get'){
//     options.params = options.data
//   }
//
//   if (config.env === 'prod'){
//     instance.defaults.baseURL = config.baseApi
//   }else {
//     instance.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
//
//   }
//   return instance(options)
// }

export default instance

