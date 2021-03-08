import Mock from 'mockjs'
import testApi from './test-api'

const mocks = [
  ...testApi
]

Mock.setup({
  timeout: '300-2000'
})

mocks.map(route => {
  Mock.mock(new RegExp(route.url), route.type, route.response)
})