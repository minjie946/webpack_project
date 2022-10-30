import React from 'react'
import { Card, Space, Button } from 'antd'
import { allSettled } from '@util/index'
import type { AllSettledResponse } from '@util/index'
import { BaseAxios } from '@components/axios'
import { URLInterface } from '@components/axios/index.inter'

const url:URLInterface = { path: 'https://api.apishop.net/common/weather/get15DaysWeatherByArea' }
const axios = new BaseAxios()

export const CancelItem = () => {
  /** 同时发送取消重复的请求 */
  const requestURLMore = () => {
    // 两个请求会取消一个请求
    allSettled([
      axios.request(url, {}), // 发送第二个的时候被取消
      axios.request(url, {}), // 发送
    ]).then((responseAry:AllSettledResponse[]) => {
      responseAry.forEach((response:AllSettledResponse, index: number) => {
        if (response.status === 'success') {
          console.log('success:' + index, response.value)
        } else {
          console.log('failure:' + index, response.value)
        }
      })
    })
  }

  /** 函数指定是否关闭取消请求 */
  const requestURLFun = () => {
    // 发送了三个请求会取消一个请求
    const closeCancelRequest = true
    allSettled([
      axios.request(url, {}, { closeCancelRequest }), // 发送
      axios.request(url, {}, { closeCancelRequest }), // 发送
      axios.request(url, {}, { closeCancelRequest: false }), // 发送第四个的时候被取消
      axios.request(url, {}, { closeCancelRequest: false }), // 发送
    ]).then((responseAry:AllSettledResponse[]) => {
      responseAry.forEach((response:AllSettledResponse, index: number) => {
        if (response.status === 'success') {
          console.log('success:' + index, response.value)
        } else {
          console.log('failure:' + index, response.value)
        }
      })
    })
  }

  /** 取消指定请求 */
  const requestURL = () => {
    const tokenKey = axios.createMapKey()
    axios.request(url, {}, { tokenKey }).then((res) => {
      console.log('success:', res)
    }).catch((err) => {
      console.log('error:', JSON.stringify(err))
    })
    setTimeout(() => {
      axios.onCancelRequest(tokenKey)
    }, 200)
  }
  return <Card>
    <Space>
      <Button type='primary' onClick={requestURLMore}>取消重复的请求</Button>
      <Button type='primary' onClick={requestURLFun}>函数指定是否关闭取消请求</Button>
      <Button type='primary' onClick={requestURL}>取消指定的请求</Button>
    </Space>
  </Card>
}