import React, { useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import Lotus from '@pages/lotus/index'
import Zongzi from '@pages/zongzi/index'

export default () => {

  return <HashRouter>
    <Routes>
      <Route path='/lotus' element={<Lotus/>}/>
      <Route path='/zongzi' element={<Zongzi/>}/>
    </Routes>
  </HashRouter>
}
