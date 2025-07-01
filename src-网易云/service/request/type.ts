import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HYInterceptors<T = any> {
  requestSuccessFn?: (
    config: AxiosRequestConfig
  ) => AxiosRequestConfig | Promise<AxiosRequestConfig>
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T | Promise<T>
  responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: HYInterceptors<T>
}
