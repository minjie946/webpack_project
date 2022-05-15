import React from 'react'
import { Card, Space, Button } from 'antd'
import { BaseAxios } from '@components/axios'
import { allSettled } from '@util/index'
import type { AllSettledResponse } from '@util/index'
import { URLInterface, RequestConfigProps } from '@components/axios/index.inter'

const url1:URLInterface = {
  path: 'common1/weather/get15DaysWeatherByArea' // 请求路径不包含域名
}
const url2:URLInterface = {
  path: 'common2/weather/get15DaysWeatherByArea'
}
const url3:URLInterface = {
  path: 'common3/weather/get15DaysWeatherByArea'
}
const url4:URLInterface = {
  path: 'common4/weather/get15DaysWeatherByArea'
}

const config:RequestConfigProps = {
  domainName: 'https://api.apishop.net',
  headers: { Test: 'tes-a' },
  timeout: 45000,
  domainAry: [
    {
      domainName: 'https://api.apishop.net1',
      headers: { Test: 'tes-b' },
      timeout: 40000,
      serviceName: ['common1/', 'common2/'] // 不同的服务名
    },
    {
      domainName: 'https://api.apishop.net2',
      headers: { Test: 'tes-c' },
      serviceName: ['common3/', 'common4/']
    }
  ]
}

const axios = new BaseAxios({
  requestConfig: config,
  closeCancelRequest: true // 关闭重复的请求
})

export const ServiceItem = () => {
  const request = () => {
    allSettled([
      axios.request(url1), // 按照对应的域名来请求
      axios.request(url2), // 按照对应的域名来请求
      axios.request(url3), // 按照对应的域名来请求
      axios.request(url4), // 按照对应的域名来请求
      axios.request(url1, {}, { headers: { Test2: 'tes-d' } }), // 合并了请求头
      axios.request(url2, {}, { headers: { Test3: 'tes-d' }, mergeHeader: false }), // 覆盖请求头
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
  return <Card>
    <Space>
      <Button type='primary' onClick={request}>发送请求</Button>
    </Space>
  </Card>
}