import React from 'react'
import { Row, Col } from 'antd'
import { CancelItem } from './page/Cancel'
import { ServiceItem } from './page/Service'
import avatar from '@assets/avatar.png'
import './app.less'

export default () => {


  return <div className='div-container'>
    <p>hello world</p>
    <img src={avatar} />
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <div className='div-btn'>跳转</div>
      </Col>
      <Col span={24}>
        <CancelItem />
      </Col>
      <Col span={24}>
        <ServiceItem />
      </Col>
    </Row>
  </div>
}
