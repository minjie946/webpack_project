/**
 * @description 风车
 * @author minjie
 * @Date 2022-06-01 23:14
 * @LastEditTime 2022-06-04 15:11
 * @LastEditors minjie
 */
 import React, { useEffect } from 'react'
 import './index.less'
 
 export default () => {
  useEffect(() => {

  }, [])
   return <div className='windmill-containers'>
     <div className='windmill-bg-container'>
      <div className='windmill-body-container'>
        {/** 风车的中心圆 */}
        {/* <div className='windmill-body-center'></div> */}
        <div className='windmill-leaf-bottom-container'></div>
        <div className='windmill-leaf-bottom-right-border1'></div>
        <div className='windmill-leaf-bottom-right-border2'></div>
        <div className='windmill-leaf-bottom-top'></div>
      </div>
     </div>
   </div>
 }
 