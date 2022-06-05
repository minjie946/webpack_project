/**
 * @description 风车
 * @author minjie
 * @Date 2022-06-01 23:14
 * @LastEditTime 2022-06-05 15:42
 * @LastEditors minjie
 */
 import React, { useEffect } from 'react'
 import bg from '@assets/bg.jpg'
 import './index.less'
 
 export default () => {
  useEffect(() => {
    const canvas:any = document.getElementById('windmill-canvas')
    const ctx = canvas.getContext('2d')
    windmillLeaf(ctx)
    // windmillLeafBlue(ctx)
  }, [])

  /** 白色的底 */
  const windmillLeaf = (ctx:any) => {
    // 填充颜色
    const grd=ctx.createRadialGradient(430, 1350, 5, 430, 1350, 180);
    grd.addColorStop(0, "rgb(222, 227, 231)");
    grd.addColorStop(1, "rgb(219, 223, 230)");

    // 阴影颜色
    const grd1=ctx.createRadialGradient(430, 1350, 5, 500, 1500, 440);
    grd1.addColorStop(0, "rgba(124, 140, 164, 0.5)");
    grd1.addColorStop(1, "rgb(222, 227, 231)");

    // 蓝色填充颜色
    const grd2=ctx.createRadialGradient(430, 1350, 5, 430, 1350, 180);
    grd2.addColorStop(0, "rgb(82, 126, 191)");
    grd2.addColorStop(1, "rgb(82, 126, 191)");

    // 蓝色圆心
    ctx.beginPath();
    ctx.arc(431, 1352, 130, 0, 2 * Math.PI);
    // 底色蓝色
    ctx.strokeStyle = grd2
    ctx.fillStyle = grd2
    ctx.fill();

    // 圆心
    ctx.beginPath();
    ctx.arc(430, 1350, 130, 0, 2 * Math.PI);
    // 底色白色
    ctx.strokeStyle = grd
    ctx.fillStyle = grd
    ctx.fill();

    // 附加一层黑色阴影
    ctx.strokeStyle = grd1
    ctx.fillStyle = grd1
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.globalAlpha = 1

    // 右侧的扇叶： 蓝色
    ctx.beginPath();
    // 右侧的扇叶
    ctx.moveTo(540, 1419)
    // 右侧的扇叶底边
    ctx.bezierCurveTo(540, 1419, 524, 1660, 865, 1450);
    // 右侧的扇叶上边
    ctx.bezierCurveTo(800, 1400, 820, 1220, 620, 1260);
    // // 回到圆
    // ctx.bezierCurveTo(620, 1270, 630, 1320, 560, 1350);
    // 底色白色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd2 // 线的颜色
    ctx.fillStyle = grd2
    ctx.fill();
    ctx.stroke()

    // 右侧的扇叶： 白色
    ctx.beginPath();
    // 右侧的扇叶
    ctx.moveTo(524, 1440)
    // 右侧的扇叶底边
    ctx.bezierCurveTo(560, 1490, 524, 1660, 850, 1540);
    // 右侧的扇叶上边
    ctx.bezierCurveTo(800, 1400, 820, 1220, 620, 1270);
    // 回到圆
    ctx.bezierCurveTo(620, 1270, 630, 1320, 560, 1350);
    // 圆弧
    ctx.arcTo(560, 1350, 524, 1440, 130);
    // 底色白色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd // 线的颜色
    ctx.fillStyle = grd
    ctx.fill();
    ctx.stroke()

    // 底部蓝色扇叶： 蓝色
    ctx.beginPath();
    ctx.moveTo(346, 1450)
    // 底部扇叶左边
    ctx.bezierCurveTo(326, 1500, 190, 1580, 340, 1780);
    // 底部扇叶右边
    ctx.bezierCurveTo(340, 1780, 670, 1700, 610, 1460);
    // 回到圆
    ctx.bezierCurveTo(486, 1620, 470, 1480, 470, 1476);
    // 圆弧
    ctx.arcTo(431, 1488, 346, 1450, 130);
    // 蓝色白色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd2 // 线的颜色
    ctx.fillStyle = grd2
    ctx.fill();
    ctx.stroke()


    // 底部白色扇叶： 白色
    ctx.beginPath();
    ctx.moveTo(346, 1450)
    // 底部扇叶左边
    ctx.bezierCurveTo(346, 1470, 200, 1440, 220, 1740);
    // 底部扇叶右边
    ctx.bezierCurveTo(220, 1740, 576, 1750, 566, 1520);
    // 回到圆
    ctx.bezierCurveTo(486, 1620, 430, 1480, 430, 1480);
    // 底色白色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd // 线的颜色
    ctx.fillStyle = grd
    ctx.fill();
    ctx.stroke()

    // // 上侧的扇叶
    // ctx.moveTo(551, 1300)
    // // 上侧的扇叶右侧
    // ctx.bezierCurveTo(640, 1200, 700, 1100, 628, 960);
    // // 上侧的扇叶左侧
    // ctx.bezierCurveTo(528, 990, 390, 1000, 399, 1155);
    // // 回到圆
    // ctx.bezierCurveTo(430, 1160, 460, 1224, 460, 1224);
    // // 左侧的扇叶
    // ctx.moveTo(399, 1224)
    // // 左侧的扇叶上侧
    // ctx.bezierCurveTo(360, 1080, 54, 1138, 54, 1138);
    // // 左侧的扇叶下侧
    // ctx.bezierCurveTo(54, 1138, 110, 1358, 240, 1358);
    // // 回到圆
    // ctx.bezierCurveTo(240, 1308, 300, 1300, 310, 1300);

    // 底色白色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd // 线的颜色
    ctx.fillStyle = grd
    ctx.fill();
    ctx.stroke()

    // 附加一层黑色阴影
    ctx.strokeStyle = grd1
    ctx.fillStyle = grd1
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.stroke()
    ctx.globalAlpha = 1

    ctx.save()
  }

  /** 蓝色的底 */
  const windmillLeafBlue = (ctx:any) => {
    // 蓝色填充颜色
    const grd=ctx.createRadialGradient(430, 1350, 5, 430, 1350, 180);
    grd.addColorStop(0, "rgb(82, 126, 191)");
    grd.addColorStop(1, "rgb(82, 126, 191)");

    // 阴影颜色
    // const grd1=ctx.createRadialGradient(430, 1350, 5, 500, 1500, 440);
    // grd1.addColorStop(0, "rgba(124, 140, 164, 0.5)");
    // grd1.addColorStop(1, "rgb(222, 227, 231)");

    // 圆心
    ctx.beginPath();
    ctx.arc(431, 1352, 130, 0, 2 * Math.PI);
    // 底色白色
    ctx.strokeStyle = grd
    ctx.fillStyle = grd
    ctx.fill();

    // 附加一层黑色阴影
    // ctx.strokeStyle = grd1
    // ctx.fillStyle = grd1
    // ctx.globalAlpha = 0.8
    // ctx.fill();
    // ctx.globalAlpha = 1

    // 白色扇叶
    ctx.moveTo(346, 1450)
    // 底部扇叶左边
    ctx.bezierCurveTo(326, 1500, 190, 1580, 340, 1780);
    // 底部扇叶右边
    ctx.bezierCurveTo(340, 1780, 670, 1700, 610, 1460);
    // // 回到圆
    ctx.bezierCurveTo(486, 1620, 470, 1480, 470, 1470);
    // // 右侧的扇叶
    // ctx.moveTo(524, 1440)
    // // 右侧的扇叶底边
    // ctx.bezierCurveTo(560, 1490, 524, 1660, 850, 1540);
    // // 右侧的扇叶上边
    // ctx.bezierCurveTo(800, 1400, 820, 1220, 620, 1270);
    // // 回到圆
    // ctx.bezierCurveTo(620, 1270, 630, 1320, 560, 1350);
    // // 上侧的扇叶
    // ctx.moveTo(551, 1300)
    // // 上侧的扇叶右侧
    // ctx.bezierCurveTo(640, 1200, 700, 1100, 628, 960);
    // // 上侧的扇叶左侧
    // ctx.bezierCurveTo(528, 990, 390, 1000, 399, 1155);
    // // 回到圆
    // ctx.bezierCurveTo(430, 1160, 460, 1224, 460, 1224);
    // // 左侧的扇叶
    // ctx.moveTo(399, 1224)
    // // 左侧的扇叶上侧
    // ctx.bezierCurveTo(360, 1080, 54, 1138, 54, 1138);
    // // 左侧的扇叶下侧
    // ctx.bezierCurveTo(54, 1138, 110, 1358, 240, 1358);
    // // 回到圆
    // ctx.bezierCurveTo(240, 1308, 300, 1300, 310, 1300);

    // 底色白色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd // 线的颜色
    ctx.fillStyle = grd
    ctx.fill();
    ctx.stroke()

    // 附加一层黑色阴影
    // ctx.strokeStyle = grd1
    // ctx.fillStyle = grd1
    // ctx.globalAlpha = 0.8
    // ctx.fill();
    // ctx.stroke()
    // ctx.globalAlpha = 1

    ctx.save()
  }

   return <div className='windmill-containers'>
     <img className='windmill-bg-img-container' src={bg}/>
      <div className='windmill-body-container'></div>
      <canvas id='windmill-canvas' width={1080} height={1920}/>
   </div>
 }
 