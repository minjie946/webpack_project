/**
 * axios的封装
 */
import qs from 'qs'
import axios, { Axios, AxiosResponse } from 'axios'
import {
  URLInterface, RequestMethodProps, AxiosProps, RequestConfigProps,
  HandleRequestResponse, DomainAryProps, ServiceConfigProps
} from './index.inter'

/** 响应错误的处理逻辑 */
const onRejected = (error: any) => {
  const { message, response } = error
  const err = { code: response ? response.status : 0, message }
  if (response) {
    const { status, data }: AxiosResponse = response
    switch (status) {
      case 400: err.message = `${status} 请求参数有误`; break
      case 401: err.message = `${status} 当前请求需要用户验证`; break
      case 403: err.message = `${status} 服务器已经理解请求，但是拒绝执行它`; break
      case 404: err.message = `${status} 请求路径不存在`; break
      case 405: err.message = `${status} 请求行中指定的请求方法不能被用于请求相应的资源`; break
      case 500: err.message = `${status} 服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理`; break
      case 502: err.message = `${status} 网关错误！`; break
      case 503: err.message = `${status} 由于临时的服务器维护或者过载，服务器当前无法处理请求。`; break
      case 504: err.message = `${status} 响应超时`; break
      case 505: err.message = `${status}  HTTP版本不受支持！`; break
      default: err.message = `${status} ${data?.message || message}`; break
    }
  }
  if (message.includes('timeout')) {
    err.message = '网络请求超时！'
    err.code = 504
  }
  if (message.includes('Network')) {
    err.message = window.navigator.onLine ? '网络未连接' : '网络错误'
    err.code = -7
  }
  if (axios.isCancel(error)) { // 取消了重复请求
    console.log('请求被取消啦（ >_< ):' + err.message)
    return Promise.reject(err)
  } else {
    return Promise.reject(err)
  }
}

/**
 * 根据请求路径返回基础域名和请求头等
 * @param {URLInterface}       url    请求接口
 * @param {RequestConfigProps} config 请求配置
 * @returns {HandleRequestResponse}
 */
const handleRequest = (url: URLInterface, config?: RequestConfigProps):HandleRequestResponse => {
  if (config) {
    const { domainAry, domainName, headers }:RequestConfigProps = config
    // 请求的域名
    let domain: string | undefined
    let header: any
    let timeout: number | undefined
    if (domainAry) { // 判断是否有域名数组，存在则进行查询看是否存在服务
      for (let index = 0; index < domainAry.length; index++) {
        const dm: DomainAryProps = domainAry[index] // 整个域名的
        if (!dm.serviceName) { // 不存在服务名称则跳过
          continue
        } else { // 存在则进行判断
          const service: string | ServiceConfigProps | undefined = dm.serviceName.find((sn: string | ServiceConfigProps) => {
            return typeof sn === 'string' ? url.path.includes(sn) : url.path.includes(sn.name)
          })
          // 存在服务则设置具体的域名和请求头
          if (service) {
            if (typeof service === 'string') { // 具体服务的
              header = dm.headers
              domain = dm.domainName
              timeout = dm.timeout
            } else {
              header = service.header || dm.headers
              domain = dm.domainName
              timeout = service.timeout || dm.timeout
            }
            break
          }
        }
      }
    }
    return {
      baseURL: domain || domainName,
      header: header || headers,
      timeout
    }
  }
  return {}
}

/** 初始化项目 */
export class BaseAxios {
  constructor (config?:AxiosProps) {
    this.closeCancelRequest = config?.closeCancelRequest // 默认是不关闭自动取消重复请求
    this.requestConfig = config?.requestConfig // 请求的配置
    this.timeout = config?.timeout // 请求超时时间
    this.config = config
    this.instance = axios.create()
    // 注册请求和响应的拦截器
    this.initInterceptors()
  }

  /** 请求的配置 */
  private config?: AxiosProps

  /** 请求的配置 */
  private requestConfig?: RequestConfigProps
  /** 请求超时的时间 */
  private timeout?: number

  /** 是否关闭取消重复 */
  private closeCancelRequest?: boolean
  /** 新的请求实例 */
  private instance: Axios
  /** 存储每个请求的值 */
  private pendingMap = new Map()

  /** 生成自定义的key */
  public createMapKey = (): string => {
    // 为了保持唯一性 用时间戳和随机的字符组合生成。
    // 同时判断pendingMap 中是否存在了这个key 存在则重新生成一个
    const hexDigits = '0123456789abcdefghijklmnopqrstuvwxyz'
    let cusStr: string = ''
    for (let i = 0; i < 8; i++) {
      cusStr += hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    const key: string = new Date().getTime().toString() + cusStr
    // 判断是否在pendingMap 中存在，存在的话，重新生成
    return this.pendingMap.has(key) ? this.createMapKey() : key
  }

  /**
   * 生成每个请求唯一的键
   * @param {*} config
   * @returns string
   */
  private getPendingKey = (config: any) => {
    let { url, method, params, data, tokenKey } = config
    if (tokenKey) {
      return tokenKey
    } else {
      if (typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
      return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
    }
  }

  /**
   * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
   * @param {*} config
   */
  private addPending = (config: any) => {
    const pendingKey = this.getPendingKey(config)
    config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
      if (!this.pendingMap.has(pendingKey)) {
        this.pendingMap.set(pendingKey, cancel)
      }
    })
  }

  /**
   * 删除重复的请求
   * @param {*} config 请求的配置
   */
  private removePending = (config: any) => {
    const pendingKey = this.getPendingKey(config)
    if (this.pendingMap.has(pendingKey)) {
      const cancelToken = this.pendingMap.get(pendingKey)
      cancelToken('取消请求:' + pendingKey)
      this.pendingMap.delete(pendingKey)
    }
  }

  /** 判断需要进行添加值的情况 */
  private returnReuslt (config: RequestMethodProps): boolean {
    const { closeCancelRequest }: RequestMethodProps = config
    // 函数是否传递参数
    const method: boolean = typeof closeCancelRequest === 'boolean' && !closeCancelRequest
    // 全局的参数
    const global: boolean = typeof closeCancelRequest === 'undefined' && !this.closeCancelRequest
    return (method || global)
  }

  /** 请求失败或者完成之后移除对应的key */
  private responseRemoveCancelToken (config: RequestMethodProps) {
    // 需要移除的key 的情况
    if (this.returnReuslt(config) || this.closeCancelRequest || config.tokenKey) {
      this.removePending(config)
    }
  }

  /** 初始化：注册拦截器 */
  private initInterceptors () {
    this.instance.interceptors.request.use((config: RequestMethodProps) => {
      if (this.returnReuslt(config)) {
        // 取消重复请求: 添加唯一的请求，存在 那么证明正在请求中，直接取消之前的请求 然后添加新的请求
        this.removePending(config)
        this.addPending(config)
      } else if (this.closeCancelRequest || config.tokenKey) { // 关闭的时候只添加成功或失败之后才移除key
        this.addPending(config) // 一直添加覆盖不做自动取消的处理
      }
      return config
    })
    this.instance.interceptors.response.use((response: any) => {
      // 请求成功之后删除当前的请求key
      this.responseRemoveCancelToken(response.config)
      return response
    }, (error) => {
      // 请求失败之后移除Map中的key
      if (error.config) this.responseRemoveCancelToken(error.config)
      return onRejected(error)
    })
  }

  /**
   * 发送请求
   * @param {URLInterface} url 接口
   * @param {*} params 参数
   * @param {RequestMethodProps} config 其余配置
   * @returns {Promise<any>}
   */
  request = (url: URLInterface, params: any = {}, config: RequestMethodProps = {}) => {
    // 接口的配置 默认get请求
    const { path, type = 'get' } = url
    // 自定义函数的获取 
    const { onDynamicHeader, onHandleResponseData }:AxiosProps = this.config || {}
    // 将函数请求中的请求头和接触路径还有超时时间拿出
    const { headers = {}, baseURL: methodBaseURL, timeout: methodTimeout, mergeHeader = true, ...methodConfig } = config
    // 通过路径处理返回对应的域名和请求头、超时时间
    const { header = {}, baseURL, timeout }:HandleRequestResponse = handleRequest(url, this.requestConfig)
    // 整合请求头 基础域名 超时时间；优先级： 函数 > 配置
    // 请求头： 可能是覆盖或者合并的请求头，我们通过新增一个字段来控制是否合并或覆盖
    const dynamicHeader = onDynamicHeader ? onDynamicHeader() : {}
    const baseConfig = {
      baseURL: methodBaseURL || baseURL,
      headers: mergeHeader ? { ...dynamicHeader, ...header,  ...headers } : ({ ...dynamicHeader, ...(headers || header) }),
      timeout: methodTimeout || timeout || this.timeout
    }
    // 发送请求
    const instanceResponse = this.instance.request({
      url: path,
      method: type,
      data: /(post|POST)/.test(type) ? params : undefined, // post请求方式
      params: /(get|GET)/.test(type) ? params : undefined, // get 请求方式
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      ...baseConfig,
      ...methodConfig
    })
    if (onHandleResponseData) {
      return new Promise((resolve, reject) => {
        instanceResponse.then((response) => {
          onHandleResponseData(response, config, this)
          .then((res: any) => resolve(res))
          .catch((err) => reject(err))
        }).catch((err) => reject(err))
      })
    } else {
      return instanceResponse
    }
  }

  /** 取消所有的请求 */
  onCancelRequestAll = () => {
    this.pendingMap.forEach((key: string) => {
      this.removePending(key)
    })
  }

  /** 取消单独的请求 */
  onCancelRequest = (tokenKey: string) => {
    this.removePending({ tokenKey })
  }
}