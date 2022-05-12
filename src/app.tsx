import React from 'react'
import { Button, Row, Col } from 'antd'
import avatar from '@assets/avatar.png'
import './app.less'

export default () => {
  console.log(process.env.tag)
  console.log(process.env.version)
  return <div className='div-container'>
    <p>hello world</p>
    <img src={avatar}/>
    <Row gutter={[10, 10]}>
      <Col>
        <div className='div-btn'>跳转</div>
      </Col>
      <Col>
        <Button type='primary'>跳转</Button>
      </Col>
    </Row>
  </div>
}
