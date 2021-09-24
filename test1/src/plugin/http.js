import axios from 'axios'

export default {
  install: function (Vue, options) {
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    let instance = axios.create(options || {})
    instance.interceptors.request.use(function (config) {
      // Do something before request is sent
      config.url = Vue.prototype.$urlPrefix + config.url
      return config
    })
    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      const res = error.response || {status: 404}
      res.data = {
        code: -res.status,
        message: error
      }
      return Promise.reject(res)
      // Do something with response error
    })
    Vue.$http = instance
    Vue.prototype.$http = instance
  }
}
