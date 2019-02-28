import axios from 'axios'
// 是否开启mock数据
const isMockData = true;
// 开发环境才mock数据
if (process.env.NODE_ENV === 'development' && isMockData) {
  require('../mock/data')
  require('../mock/login')
}
console.log(process.env.NODE_ENV)

class BasicApi {
  constructor () {
    this.$http = axios.create({
      baseURL: '',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      timeout: 60 * 1000
    })
  }
  get (url, config) {
    return this.$http.get(url, config)
  }
  post (url, data, config) {
    return this.$http.post(url, data, config)
  }
  put (url, data, config) {
    return this.$http.put(url, data, config)
  }
  patch (url, data, config) {
    return this.$http.patch(url, data, config)
  }
  delete (url, config) {
    return this.$http.delete(url, config)
  }
}

export default BasicApi;