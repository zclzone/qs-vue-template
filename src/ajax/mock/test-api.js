const msg = "Hello, QS Vue Template!"
export default [
  {
    url: '/test',
    type: 'get',
    response: config => {
      return {
        status: "OK",
        data: msg
      }
    }
  },
]