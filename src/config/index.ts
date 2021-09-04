
const env = import.meta.env.MODE || 'prod'
const EnvConfig: any = {
  dev: {
    baseApi: '/',
    mockApi: ''
  },
  test: {
    baseApi: '//test.baidu.com',
    mockApi: ''
  },
  prod: {
    baseApi: '',
    mockApi: 'baidu.com'
  }
}
export default {
  env,
  mock: true,
  ...EnvConfig[env]
}
