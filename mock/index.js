import Mock from 'mockjs'
import indexApi from './api'

const mocks = [
  ...indexApi
]

Mock.setup({
  timeout: '100-800'
})

mocks.map(route => {
  Mock.mock(new RegExp(route.url), route.type, route.response)
})