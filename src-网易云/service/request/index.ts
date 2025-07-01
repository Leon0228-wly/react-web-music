import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { HYRequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => Promise.reject(err)
    )

    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => Promise.reject(err)
    )

    // 实例级别请求拦截
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn as
        ((config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>) | undefined,
      config.interceptors?.requestFailureFn
    )

    // 实例级别响应拦截
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn as
        ((res: unknown) => any) | undefined,
      config.interceptors?.responseFailureFn
    )
  }

  async request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    // 请求拦截处理
    let finalConfig = config
    if (config.interceptors?.requestSuccessFn) {
      finalConfig = await config.interceptors.requestSuccessFn(
        finalConfig as unknown as InternalAxiosRequestConfig
      ) as HYRequestConfig<T>
    }

    return new Promise((resolve, reject) => {
      this.instance.request<T, T>(finalConfig)
        .then((res) => {
          // 响应拦截处理
          if (config.interceptors?.responseSuccessFn) {
            resolve(config.interceptors.responseSuccessFn(res))
          } else {
            resolve(res)
          }
        })
        .catch((err) => {
          if (config.interceptors?.responseFailureFn) {
            reject(config.interceptors.responseFailureFn(err))
          } else {
            reject(err)
          }
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
