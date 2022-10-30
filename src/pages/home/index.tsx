import React from "react";
import { Outlet } from 'react-router-dom';

export default () => {
  return <div className='ss'>
    home
    <Outlet></Outlet>
  </div>
}