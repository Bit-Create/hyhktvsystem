import axios from 'axios'

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:12001',
    timeout: 10000
  })
  //
  //2. axios的拦截器
  // instance.interceptors.request.use(config => {
  //   return config
  // }, error => {
  // });
  // 2.2 响应式拦截
  instance.interceptors.response.use(res => {
    return res.data
  }), ess => {
    console.log(err)
  }

  //3. 发送网络请求
  return instance(config)
}
