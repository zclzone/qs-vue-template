import axios from 'axios'

const service = axios.create({
  timeout: 30000,
  withCredentials: false,
})

service.interceptors.request.use(
  config => {
    // if (config.method === 'post') {
    //   config.url = '...' + config.url
    // }
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