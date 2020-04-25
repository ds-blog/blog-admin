import axios from 'axios'
import NProgress from 'nprogress'
import store from '@/store'

const http = axios.create({
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  http.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  http.defaults.baseURL = 'http://prod.xxx.com'
}

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    NProgress.start()
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = localStorage.getItem('X-Token')
    }
    return config
  },
  (error) => Promise.reject(error)
)
// 响应拦截器
http.interceptors.response.use((response) => {
  console.log('response', response)
  if (response.status === 200) {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.data.code === 511) {
      // 未授权调取授权接口
    } else if (response.data.code === 510) {
      // 未登录跳转登录页
    } else {
      return Promise.resolve(response.data)
    }
  } else {
    // 否则的话抛出错误
    NProgress.done()
    return Promise.reject(response)
  }
}, (error) => {
  // 我们可以在这里对异常状态作统一处理
  if (error.response.status) {
    // 处理请求失败的情况
    // 对不同返回码对相应处理
    return Promise.reject(error.response)
  }
})

export default http
