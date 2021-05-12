/**
 * 格式化时间
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{M}-{d} {h}:{m}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    M: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  const time_str = format.replace(/{([yMdhmsw])+}/g, (result, key) => {
    const value = formatObj[key]
    // 注意: getDay() 0 表示周日
    if (key === 'w') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * @param {Object|number|string} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * 到某一个时间的倒计时
 * @param {Object|number|string} time 
 * @returns {string}
 */
export function getEndTime(time) {
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

/**
 * 将Promise返回的resolve和reject结果转换成数组
 * @param {Promise} promise 
 * @returns {Array} [error,res]
 */
export function to(promise) {
  return promise.then(res => [null, res]).catch(err => [err])
}

/**
 * 获取一个唯一的guid
 * @returns {string}
 */
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

/**
 * 从数组中随机获取元素
 * @param {Array} arr 
 * @returns {*}
 */
export function randomOne(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


