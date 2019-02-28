import BasicApi from './index'

class CommonApi extends BasicApi {
  getData (url, config) {
    return this.get(url, config)
  }
  getList (config) {
    return this.get('/api/mock2', config)
  }
  login (url, data, config) {
    return this.post(url, data, config)
  }
}

const commonApi =  new CommonApi()

export default commonApi