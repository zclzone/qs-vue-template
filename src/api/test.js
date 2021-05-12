import request from '@/utils/request'

export const test = (query) => {
  return request({
    url: '/test',
    method: 'get',
    params: query
  })
}