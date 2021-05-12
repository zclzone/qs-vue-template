import request from '@/utils/request'

export const test = (params) => {
  return request({
    url: '/test',
    method: 'get',
    params
  })
}