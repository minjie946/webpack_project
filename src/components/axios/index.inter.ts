/** 
 * 对应的接口的定义
 */
import { Method, AxiosRequestConfig, AxiosResponse } from 'axios'

/** 请求接口定义 */
export interface URLInterface {
  /** 请求的路径 */
  path: string
  /** 请求的类型 */
  type?: Method
  [key: string]: any
}

/** 函数的请求配置 */
export interface RequestMethodProps extends AxiosRequestConfig {
  /** 关闭取消重复请求： 默认false 不关闭 */
  closeCancelRequest?: boolean
  /** 重复请求的标识的key */
  tokenKey?: string
  /** 合并请求头： 默认 true */
  mergeHeader?: boolean
  /** 其余的值 */
  [key: string]: any
}

/** axios的参数配置 */
export interface AxiosProps {
  /** 请求的域名等 */
  requestConfig?: RequestConfigProps
  /** 超时的时间 */
  timeout?: number
  /** 关闭取消重复请求： 默认false 不关闭 */
  closeCancelRequest?: boolean
  /** 动态请求头 */
  onDynamicHeader?: () => any
  /**
   * 处理请求之后的数据: 业务数据处理
   * @param {AxiosResponse} response 响应的数据
   * @param {RequestMethodProps} config 函数请求的配置
   * @param {*} axios 当前请求的实体
   * @returns {Promise<any>}
   */
  onHandleResponseData?: (response: AxiosResponse, config?: RequestMethodProps, axios?: any) => Promise<any>
}

/** 服务名 */
export interface ServiceConfigProps {
  /** 服务名称 */
  name: string
  /** 请求头 */
  header?: any
  /** 超时的时间 */
  timeout?: number
}

/** 域名数组 */
export interface DomainAryProps {
  /** 域名 */
  domainName: string
  /** 请求头 */
  headers?: any
  /** 超时的时间 */
  timeout?: number
  /** 服务名 */
  serviceName?: (string | ServiceConfigProps)[]
}

/** 请求配置 */
export interface RequestConfigProps {
  /** 基础的域名 */
  domainName: string
  /** 基础的请求头 */
  headers?: any
  /** 超时的时间 */
  timeout?: number
  /** 详细的配置 */
  domainAry?: DomainAryProps[]
}

/** 处理的函数 */
export interface HandleRequestResponse {
  /** 请求域名 */
  baseURL?: string
  /** 请求头 */
  header?: any
  /** 请求超时的时间 */
  timeout?: number
}
