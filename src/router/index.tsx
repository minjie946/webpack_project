import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Login from '@pages/login';
import HomePage from '@pages/home';
import { CancelItem } from '@pages/other/Cancel';

const RootRouter = () => {
  return <HashRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<HomePage/>}>
        <Route path='cancel' element={<CancelItem/>}></Route>
      </Route>
    </Routes>
  </HashRouter>
}

export default RootRouter;