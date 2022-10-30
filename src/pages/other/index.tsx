import React, { createContext } from 'react'
import { Row, Col } from 'antd'
import { CancelItem } from '@pages/other/Cancel'
import { ServiceItem } from '@pages/other/Service'
import ErrorBoundary from '@pages/error/ErrorBoundary'
import avatar from '@assets/avatar.png'
import './app.less'

export const ContentStore = createContext({ name: 'lisi' })

export default () => {
  return <div className='div-container'>
    <ContentStore.Provider value={{ name: 'zhangsan' }}>
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
          <ErrorBoundary>
            <ServiceItem />
          </ErrorBoundary>
        </Col>
      </Row>
    </ContentStore.Provider>
  </div>
}
