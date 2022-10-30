/** 
 * 全局的捕获异常之后展示错误的界面
 */
import React from 'react'
import { Result } from 'antd';

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor (props:any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error:any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch (error:any, errorInfo:any) {
    console.log(error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <Result
        status="500"
        title="error"
        subTitle="Sorry, something went wrong."
      />;
    }
    return this.props.children
  }
}