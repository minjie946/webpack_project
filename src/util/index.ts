export interface AllSettledResponse {
  /** 成功:success 失败:failure */
  status: 'success'|'failure'
  /** 返回的信息 */
  value: any
}

/**
 * 异步请求，返回对应的结果
 * * { status: 'fulfilled', value: res } 成功
 * * { status: 'rejected', reason: error } 失败
 * @param promises
 * @returns
 */
export const allSettled = (promises:Promise<any>[]):Promise<AllSettledResponse[]> => {
  return new Promise(resolve => {
    const data:AllSettledResponse[] = []
    const len = promises.length
    let count = len
    for (let i = 0; i < len; i += 1) {
      const promise:Promise<any> = promises[i]
      promise.then(res => {
        data[i] = { status: 'success', value: res }
      }, error => {
        data[i] = { status: 'failure', value: error }
      }).finally(() => { // promise has been settled
        if (!--count) resolve(data)
      })
    }
  })
}