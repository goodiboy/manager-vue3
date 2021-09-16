import axios from 'axios'
import config from '@/config'
import { ElMessage } from 'element-plus'
import router from '@/router'

//设置自定义报错
const TOKEN_INVALID = 'Token认证失败,请重新登陆'
const NETWORK_ERROR = '网络请求异常,请稍后重试'

// 错误码
export enum MsgCode {
  SUCCESS = 200,
  PARAM_ERROR = 501, // 参数错误
  USER_ACCOUNT_ERROR = 402, //账号或密码错误
  USER_LOGIN_ERROR = 400, // 用户未登录
  BUSINESS_ERROR = 500, //业务请求失败
  AUTH_ERROR = 401 // 认证失败或TOKEN过期
}

// 创建axios实例对象,添加全局配置
const axiosInstance = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

axiosInstance.interceptors.request.use((request) => {
  const headers = request.headers
  if (!headers.Authorization) headers.Authorization = 'Bear goodiboy'
  return request
})

axiosInstance.interceptors.response.use((response) => {
  const { code, data, msg } = response.data
  if (code === 200) {
    return data
  } else if (code === MsgCode.AUTH_ERROR) {
    ElMessage.error(TOKEN_INVALID)
    setTimeout(() => {
      router.push('/login')
    })
    return Promise.reject(response)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
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

export default axiosInstance
