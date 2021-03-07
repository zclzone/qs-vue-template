import axios from 'axios'

const service = axios.create({
  timeout: 30000,
  // baseURL: '/api',
  // baseURL: 'http://blog.qszone.com/api',
  baseURL: 'http://sally.qszone.com/api',
  withCredentials: false,
})

service.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      const url = config.url
      url.indexOf('?') === -1 ? config.url = url + '?_=' + (new Date().getTime()) : config.url = url + '&_=' + (new Date().getTime())
    }
    return config
  },
  err => Promise.reject(err)
)

service.interceptors.response.use(
  response => response.data,
  err => Promise.reject(err)
)

export default service