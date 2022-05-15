// react 17
// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './app'

// ReactDom.render(<App/>, document.querySelector('#root'))

// react 18
import React from 'react';
import ReactDom from 'react-dom/client';
import App from './app'

const dom:any = document.querySelector('#root')
const root = ReactDom.createRoot(dom)

root.render(<App/>)
