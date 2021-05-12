import Mock from 'mockjs'
import testApi from './api/test'

const mocks = [
  ...testApi
]

Mock.setup({
  timeout: '100-800'
})

mocks.map(route => {
  Mock.mock(new RegExp(route.url), route.type, route.response)
})