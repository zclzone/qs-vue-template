const msg = "Hello, QS Template Vue!"
export default [
  {
    url: '/test',
    type: 'get',
    response: config => {
      return {
        msg
      }
    }
  },
]