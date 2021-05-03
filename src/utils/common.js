import axios from '@/ajax'

const to = promise => {
  return promise.then(res => [null, res]).catch(err => [err])
}

const guid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export {
  to, guid, axios
}