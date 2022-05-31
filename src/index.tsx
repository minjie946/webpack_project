import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'
import './index.less'

const Dom = createRoot(document.querySelector('#root')!)
Dom.render(<App/>)
