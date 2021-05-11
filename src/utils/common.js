const to = promise => {
  return promise.then(res => [null, res]).catch(err => [err])
}
const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
// 从数组中随机获取元素
const randomOne = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}
// 到某一个时间的倒计时
const getEndTime = (time) => {
  const startDate = new Date() //开始时间，当前时间
  const endDate = new Date(time) //结束时间，需传入时间参数
  const t = endDate.getTime() - startDate.getTime() //时间差的毫秒数
  const d = 0,
    h = 0,
    m = 0,
    s = 0
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24)
    h = Math.floor(t / 1000 / 60 / 60 % 24)
    m = Math.floor(t / 1000 / 60 % 60)
    s = Math.floor(t / 1000 % 60)
  }
  return "剩余时间" + d + "天 " + h + "小时 " + m + " 分钟" + s + " 秒"
}

export { to, guid, randomOne, getEndTime }