/**
 * @description 风车
 * @author minjie
 * @Date 2022-06-01 23:14
 * @LastEditTime 2022-06-11 00:12
 * @LastEditors minjie
 */
import React, { useEffect } from 'react'
import bg from '@assets/bg.jpg'
import './index.less'

const height: number = 1352
const width: number = 431

export default () => {
  useEffect(() => {
    const canvas: any = document.getElementById('windmill-canvas')
    const ctx = canvas.getContext('2d')
    ctx.translate(540, 540);
    windmillCenter(ctx)
    windmillLeafOne(ctx)
    windmillLeafTwo(ctx)
    windmillLeafThree(ctx)
    windmillLeafFour(ctx)
    windmillLeafLineOne(ctx)
    windmillLeafLineTwo(ctx)
    windmillLeafLineThree(ctx)
    windmillLeafLineFour(ctx)
    windmillCenterTop(ctx)
  }, [])

  /** 初始化颜色 */
  const initColor = (ctx: any) => {
    // 白色填充颜色
    const grd = ctx.createRadialGradient(430 - width, 1350 - height, 5, 430 - width, 1350 - height, 180);
    grd.addColorStop(0, "rgb(222, 227, 231)");
    grd.addColorStop(1, "rgb(219, 223, 230)");

    // 白色阴影颜色
    const grd1 = ctx.createRadialGradient(430 - width, 1350 - height, 5, 500 - width, 1500 - height, 540);
    grd1.addColorStop(0, "rgba(124, 140, 164, 1)");
    grd1.addColorStop(1, "rgb(222, 227, 231)");

    // 蓝色填充颜色
    const grd2 = ctx.createRadialGradient(430 - width, 1350 - height, 5, 430 - width, 1350 - height, 180);
    grd2.addColorStop(0, "rgb(82, 126, 191)");
    grd2.addColorStop(1, "rgb(82, 126, 191)");

    // 蓝色阴影颜色
    const grd3 = ctx.createRadialGradient(430 - width, 1350 - height, 5, 520 - width, 1300 - height, 380);
    grd3.addColorStop(0, "rgb(36, 68, 143)");
    grd3.addColorStop(1, "rgb(82, 126, 191)");
    return [grd, grd1, grd2, grd3]
  }

  /** 中心的圆 */
  const windmillCenter = (ctx: any) => {
    const [grd, grd1, grd2, grd3] = initColor(ctx)
    // 蓝色圆心
    ctx.beginPath();
    ctx.arc(431 - width, 1352 - height, 130, 0, 2 * Math.PI);
    // 底色蓝色
    ctx.strokeStyle = grd2
    ctx.fillStyle = grd2
    ctx.fill();

    // 附加一层黑色阴影
    ctx.strokeStyle = grd3
    ctx.fillStyle = grd3
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.globalAlpha = 1
    // 圆心
    ctx.beginPath();
    ctx.arc(430 - width, 1350 - height, 130, 0, 2 * Math.PI);
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
  }

  /** 右侧的扇叶 */
  const windmillLeafOne = (ctx: any) => {
    const [grd, grd1, grd2, grd3] = initColor(ctx)

    // 右侧的扇叶： 蓝色 1
    ctx.beginPath();
    // 右侧的扇叶
    ctx.moveTo(540 - width, 1419 - height)
    // 右侧的扇叶底边
    ctx.bezierCurveTo(540 - width, 1419 - height, 524 - width, 1660 - height, 865 - width, 1450 - height);
    // 右侧的扇叶上边
    ctx.bezierCurveTo(860 - width, 1450 - height, 790 - width, 1170 - height, 610 - width, 1220 - height);
    // 回到圆
    ctx.bezierCurveTo(610 - width, 1235 - height, 570 - width, 1334 - height, 560 - width, 1334 - height);
    // 圆弧
    ctx.quadraticCurveTo(570 - width, 1384 - height, 540 - width, 1419 - height);
    // 底色蓝色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd2 // 线的颜色
    ctx.fillStyle = grd2
    ctx.fill();
    ctx.stroke()

    // 附加一层黑色阴影
    ctx.strokeStyle = grd3
    ctx.fillStyle = grd3
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.globalAlpha = 1

    // 右侧的扇叶： 白色 2
    ctx.beginPath();
    // 右侧的扇叶
    ctx.moveTo(524 - width, 1440 - height)
    // 右侧的扇叶底边
    ctx.bezierCurveTo(560 - width, 1490 - height, 524 - width, 1660 - height, 850 - width, 1540 - height);
    // 右侧的扇叶上边
    ctx.bezierCurveTo(800 - width, 1400 - height, 820 - width, 1220 - height, 620 - width, 1270 - height);
    // 回到圆
    ctx.bezierCurveTo(620 - width, 1270 - height, 630 - width, 1320 - height, 560 - width, 1350 - height);
    // 圆弧
    ctx.quadraticCurveTo(560 - width, 1400 - height, 524 - width, 1440 - height);
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
  }

  /** 底部的扇叶 */
  const windmillLeafTwo = (ctx: any) => {
    const [grd, grd1, grd2, grd3] = initColor(ctx)
    // 底部蓝色扇叶： 蓝色 3
    ctx.beginPath();
    ctx.moveTo(346 - width, 1450 - height)
    // 底部扇叶左边
    ctx.bezierCurveTo(326 - width, 1500 - height, 190 - width, 1580 - height, 340 - width, 1820 - height);
    // 底部扇叶右边
    ctx.bezierCurveTo(340 - width, 1820 - height, 670 - width, 1700 - height, 610 - width, 1460 - height);
    // 回到圆
    ctx.bezierCurveTo(560 - width, 1560 - height, 470 - width, 1476 - height, 470 - width, 1476 - height);
    // 圆弧
    ctx.quadraticCurveTo(420 - width, 1496 - height, 346 - width, 1450 - height);
    // 底色蓝色
    ctx.lineWidth = 1

    const grdbgleft = ctx.createLinearGradient(340 - width, 1780 - height, 610 - width, 1460 - height);
    grdbgleft.addColorStop(0, "#4a75af");
    grdbgleft.addColorStop(0.7, "#315899");
    grdbgleft.addColorStop(1, "#62a5c7");

    ctx.strokeStyle = grdbgleft // 线的颜色
    ctx.fillStyle = grdbgleft
    ctx.fill();
    ctx.stroke()

    // 底部白色扇叶： 白色 4
    ctx.beginPath();
    ctx.moveTo(346 - width, 1450 - height)
    // 底部扇叶左边
    ctx.bezierCurveTo(346 - width, 1470 - height, 200 - width, 1440 - height, 220 - width, 1740 - height);
    // 底部扇叶右边
    ctx.bezierCurveTo(220 - width, 1740 - height, 576 - width, 1750 - height, 566 - width, 1520 - height);
    // 回到圆
    ctx.bezierCurveTo(486 - width, 1580 - height, 430 - width, 1480 - height, 430 - width, 1480 - height);
    // 圆弧
    ctx.quadraticCurveTo(430 - width, 1480 - height, 346 - width, 1450 - height);
    // 底色白色
    ctx.lineWidth = 1
    const grdbgleft2 = ctx.createLinearGradient(220 - width, 1740 - height, 566 - width, 1520 - height);
    grdbgleft2.addColorStop(0, "#c1cad5");
    grdbgleft2.addColorStop(0.7, "#c1cad5");
    grdbgleft2.addColorStop(1, "#c1ccd4");
    ctx.strokeStyle = grdbgleft2 // 线的颜色
    ctx.fillStyle = grdbgleft2
    ctx.fill();
    ctx.stroke()

    // 附加一层黑色阴影
    ctx.strokeStyle = grd1
    ctx.fillStyle = grd1
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.stroke()
    ctx.globalAlpha = 1

    // 左侧的边线
    ctx.beginPath();
    ctx.moveTo(220 - width, 1740 - height);
    ctx.bezierCurveTo(200 - width, 1440 - height, 346 - width, 1470 - height, 346 - width, 1450 - height);
    ctx.bezierCurveTo(346 - width, 1450 - height, 349 - width, 1454 - height, 349 - width, 1454 - height);
    ctx.bezierCurveTo(380 - width, 1454 - height, 200 - width, 1440 - height, 220 - width, 1740 - height);
    ctx.strokeStyle = '#abb6c4'
    ctx.fillStyle = '#a9b4c3'
    ctx.fill();
    ctx.stroke()
    ctx.save();
  }

  /** 左侧的扇叶 */
  const windmillLeafThree = (ctx: any) => {
    const [grd, grd1, grd2, grd3] = initColor(ctx)
    // 左侧的扇叶： 蓝色 5
    ctx.beginPath();
    ctx.moveTo(376 - width, 1232 - height)
    // 左侧的扇叶上侧
    ctx.bezierCurveTo(286 - width, 1122 - height, 14 - width, 1248 - height, 14 - width, 1248 - height);
    // 左侧的扇叶下侧
    ctx.bezierCurveTo(14 - width, 1248 - height, 130 - width, 1460 - height, 300 - width, 1430 - height);
    // // 回到圆
    ctx.bezierCurveTo(230 - width, 1400 - height, 300 - width, 1330 - height, 300 - width, 1330 - height);
    // 圆弧
    ctx.quadraticCurveTo(309 - width, 1280 - height, 376 - width, 1232 - height);
    // 底色蓝色
    ctx.lineWidth = 1
    ctx.strokeStyle = grd2 // 线的颜色
    ctx.fillStyle = grd2
    ctx.fill();
    ctx.stroke()

    // 附加一层黑色阴影
    ctx.strokeStyle = grd3
    ctx.fillStyle = grd3
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.globalAlpha = 1

    ctx.beginPath();
    ctx.moveTo(376 - width, 1232 - height)
    ctx.bezierCurveTo(286 - width, 1122 - height, 14 - width, 1248 - height, 14 - width, 1248 - height);
    ctx.strokeStyle = '#3a88b7'
    ctx.stroke()

    // 左侧的扇叶： 白色 6
    ctx.beginPath();
    ctx.moveTo(399 - width, 1224 - height)
    // 左侧的扇叶上侧
    ctx.bezierCurveTo(360 - width, 1080 - height, 54 - width, 1138 - height, 54 - width, 1138 - height);
    // 左侧的扇叶下侧
    ctx.bezierCurveTo(54 - width, 1138 - height, 110 - width, 1358 - height, 240 - width, 1358 - height);
    // 回到圆
    ctx.bezierCurveTo(240 - width, 1308 - height, 300 - width, 1300 - height, 310 - width, 1300 - height);
    // 圆弧
    ctx.quadraticCurveTo(310 - width, 1300 - height, 399 - width, 1224 - height);
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

    ctx.beginPath();
    ctx.moveTo(399 - width, 1224 - height)
    // 左侧的扇叶上侧
    ctx.bezierCurveTo(360 - width, 1080 - height, 54 - width, 1140 - height, 54 - width, 1138 - height);
    ctx.strokeStyle = '#98b2ce'
    ctx.stroke()

    ctx.save()
  }

  /** 顶部的扇叶 */
  const windmillLeafFour = (ctx: any) => {
    const [grd, grd1, grd2, grd3] = initColor(ctx)
    // 上侧的扇叶： 蓝色 7
    ctx.beginPath();
    ctx.moveTo(545 - width, 1290 - height)
    // 上侧的扇叶右侧
    ctx.bezierCurveTo(640 - width, 1200 - height, 700 - width, 1100 - height, 550 - width, 918 - height);
    // 上侧的扇叶左侧
    ctx.bezierCurveTo(300 - width, 1060 - height, 349 - width, 1090 - height, 349 - width, 1175 - height);
    // 回到圆
    ctx.bezierCurveTo(349 - width, 1175 - height, 460 - width, 1224 - height, 460 - width, 1224 - height);
    // 圆弧
    ctx.quadraticCurveTo(460 - width, 1224 - height, 545 - width, 1290 - height);
    // 底色蓝色
    ctx.lineWidth = 1
    const grdleaftopbulebg = ctx.createRadialGradient(540 - width, 920 - height, 20, 545 - width, 1200 - height, 300);
    grdleaftopbulebg.addColorStop(0, "#20518f");
    grdleaftopbulebg.addColorStop(1, "#7199cd");
    ctx.strokeStyle = grdleaftopbulebg // 线的颜色
    ctx.fillStyle = grdleaftopbulebg
    ctx.fill();
    ctx.stroke()

    // 附加一层黑色阴影
    ctx.strokeStyle = grdleaftopbulebg
    ctx.fillStyle = grdleaftopbulebg
    ctx.globalAlpha = 0.8
    ctx.fill();
    ctx.globalAlpha = 1

    // 上侧的扇叶： 白色 8
    ctx.beginPath();
    ctx.moveTo(551 - width, 1300 - height)
    // 上侧的扇叶右侧
    ctx.bezierCurveTo(640 - width, 1200 - height, 700 - width, 1100 - height, 628 - width, 960 - height);
    // 上侧的扇叶左侧
    ctx.bezierCurveTo(428 - width, 990 - height, 399 - width, 1075 - height, 399 - width, 1075 - height);
    ctx.bezierCurveTo(386 - width, 1125 - height, 399 - width, 1155 - height, 399 - width, 1155 - height);
    // 回到圆
    ctx.bezierCurveTo(399 - width, 1155 - height, 459 - width, 1225 - height, 459 - width, 1225 - height);
    ctx.bezierCurveTo(459 - width, 1225 - height, 551 - width, 1320 - height, 551 - width, 1300 - height);
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

   /** 顶部的叶子: 最上层 */
  const windmillLeafLineOne = (ctx: any) => {
    const [grd, grd1, grd2, grd3] = initColor(ctx)

    // 顶部白色叶片勾勒： 初步勾勒出形状 然后填充底色，之后勾勒边框线
    ctx.beginPath();
    ctx.moveTo(628 - width, 960 - height)
    ctx.bezierCurveTo(428 - width, 990 - height, 390 - width, 1075 - height, 390 - width, 1075 - height);
    ctx.bezierCurveTo(380 - width, 1085 - height, 369 - width, 1175 - height, 369 - width, 1175 - height);
    ctx.bezierCurveTo(369 - width, 1175 - height, 430 - width, 1250 - height, 470 - width, 1270 - height);
    ctx.bezierCurveTo(470 - width, 1270 - height, 484 - width, 1266 - height, 480 - width, 1266 - height);
    ctx.bezierCurveTo(379 - width, 1165 - height, 390 - width, 1100 - height, 400 - width, 1075 - height);
    ctx.bezierCurveTo(409 - width, 1075 - height, 428 - width, 990 - height, 628 - width, 960 - height);
    ctx.lineWidth = 1

    const grdlinebg = ctx.createLinearGradient(320 - width, 1235 - height, 608 - width, 1160 - height);
    grdlinebg.addColorStop(0, "rgba(46, 79, 134, 1)");
    grdlinebg.addColorStop(0.3, "rgba(219, 223, 230, 1)");
    grdlinebg.addColorStop(1, "rgb(219, 223, 230)");

    ctx.strokeStyle = grdlinebg
    ctx.fillStyle = grdlinebg
    ctx.fill();
    ctx.stroke()

    ctx.strokeStyle = grd1
    ctx.fillStyle = grd1
    ctx.globalAlpha = 0.3
    ctx.fill();
    ctx.stroke()
    ctx.globalAlpha = 1

    ctx.beginPath();
    ctx.moveTo(628 - width, 960 - height)
    ctx.bezierCurveTo(428 - width, 990 - height, 400 - width, 1075 - height, 400 - width, 1075 - height);
    ctx.bezierCurveTo(390 - width, 1100 - height, 379 - width, 1165 - height, 476 - width, 1262 - height);
    ctx.bezierCurveTo(486 - width, 1262 - height, 472 - width, 1268 - height, 472 - width, 1268 - height);
    ctx.bezierCurveTo(378 - width, 1168 - height, 380 - width, 1105 - height, 392 - width, 1075 - height);
    ctx.bezierCurveTo(400 - width, 1065 - height, 428 - width, 990 - height, 628 - width, 960 - height);
    ctx.lineWidth = 1
    ctx.strokeStyle = 'rgb(193,197,205)'
    const grdlinebg2 = ctx.createLinearGradient(300 - width, 1075 - height, 628 - width, 960 - height);
    grdlinebg2.addColorStop(0, "rgba(179, 178, 184, 1)");
    grdlinebg2.addColorStop(0.2, "rgba(179, 178, 184, 0.4)");
    grdlinebg2.addColorStop(1, "rgb(163, 167, 180)");
    ctx.fillStyle = grdlinebg2
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(551 - width, 1300 - height)
    // 上侧的扇叶右侧
    ctx.bezierCurveTo(638 - width, 1200 - height, 698 - width, 1100 - height, 628 - width, 960 - height);
    ctx.strokeStyle = '#a0acbd'
    ctx.stroke()

    // 顶部蓝色叶片勾勒
    ctx.beginPath();
    ctx.moveTo(550 - width, 918 - height);
    ctx.bezierCurveTo(400 - width, 994 - height, 350 - width, 1064 - height, 346 - width, 1090 - height);
    ctx.bezierCurveTo(346 - width, 1100 - height, 320 - width, 1210 - height, 328 - width, 1210 - height);
    ctx.bezierCurveTo(326 - width, 1220 - height, 426 - width, 1332 - height, 436 - width, 1322 - height);
    ctx.bezierCurveTo(436 - width, 1322 - height, 480 - width, 1274 - height, 480 - width, 1274 - height);
    ctx.bezierCurveTo(480 - width, 1274 - height, 326 - width, 1190 - height, 354 - width, 1090 - height);
    ctx.bezierCurveTo(350 - width, 1080 - height, 400 - width, 990 - height, 550 - width, 918 - height);

    const grdlinetopbluebg = ctx.createLinearGradient(480 - width, 1304 - height, 328 - width, 1210 - height);
    grdlinetopbluebg.addColorStop(0, "#295c9f");
    grdlinetopbluebg.addColorStop(1, "#579dc5");

    ctx.strokeStyle = grdlinetopbluebg
    ctx.fillStyle = grdlinetopbluebg
    ctx.fill();
    ctx.stroke()

    // 边框
    ctx.beginPath();
    ctx.moveTo(550 - width, 918 - height);
    ctx.bezierCurveTo(400 - width, 994 - height, 350 - width, 1064 - height, 346 - width, 1090 - height);
    ctx.bezierCurveTo(326 - width, 1200 - height, 480 - width, 1274 - height, 480 - width, 1274 - height);
    ctx.bezierCurveTo(326 - width, 1190 - height, 354 - width, 1080 - height, 354 - width, 1090 - height);
    ctx.bezierCurveTo(350 - width, 1080 - height, 400 - width, 990 - height, 550 - width, 918 - height);

    const grdlinetopbluebg2 = ctx.createLinearGradient(550 - width, 918 - height, 480 - width, 1274 - height);
    grdlinetopbluebg2.addColorStop(0, "#295c9f");
    grdlinetopbluebg2.addColorStop(1, "#579dc5");
    ctx.fillStyle = grdlinetopbluebg2
    ctx.strokeStyle = grdlinetopbluebg2
    ctx.fill();
    ctx.stroke()

    ctx.save()

  }

  /** 左侧的叶子: 最上层 */
  const windmillLeafLineTwo = (ctx: any) => {
    ctx.beginPath();
    ctx.moveTo(54 - width, 1138 - height);
    ctx.bezierCurveTo(50 - width, 1138 - height, 100 - width, 1270 - height, 130 - width, 1300 - height);
    ctx.bezierCurveTo(130 - width, 1300 - height, 240 - width, 1430 - height, 300 - width, 1430 - height);
    ctx.bezierCurveTo(320 - width, 1440 - height, 466 - width, 1362 - height, 496 - width, 1330 - height);
    ctx.bezierCurveTo(496 - width, 1330 - height, 450 - width, 1290 - height, 450 - width, 1290 - height);
    ctx.bezierCurveTo(450 - width, 1290 - height, 300 - width, 1378 - height, 240 - width, 1358 - height);
    ctx.bezierCurveTo(120 - width, 1358 - height, 60 - width, 1138 - height, 60 - width, 1138 - height);
    ctx.bezierCurveTo(60 - width, 1138 - height, 54 - width, 1138 - height, 54 - width, 1138 - height);

    const grdlineleft = ctx.createLinearGradient(54 - width, 1138 - height, 190 - width, 1470 - height);
    grdlineleft.addColorStop(0, "#bbc0ca");
    grdlineleft.addColorStop(0.9, "#bbc0ca");
    grdlineleft.addColorStop(1, "#386293");
    ctx.strokeStyle = grdlineleft
    ctx.fillStyle =grdlineleft
    ctx.fill();
    ctx.stroke()

    // 描边
    ctx.beginPath();
    ctx.moveTo(54 - width, 1138 - height);
    ctx.bezierCurveTo(50 - width, 1138 - height, 100 - width, 1270 - height, 130 - width, 1300 - height);
    ctx.bezierCurveTo(130 - width, 1300 - height, 170 - width, 1366 - height, 240 - width, 1368 - height);
    ctx.bezierCurveTo(290 - width, 1380 - height, 400 - width, 1320 - height, 450 - width, 1292 - height);
    ctx.bezierCurveTo(450 - width, 1292 - height, 450 - width, 1290 - height, 450 - width, 1290 - height);
    ctx.bezierCurveTo(450 - width, 1290 - height, 300 - width, 1378 - height, 240 - width, 1358 - height);
    ctx.bezierCurveTo(120 - width, 1358 - height, 60 - width, 1138 - height, 60 - width, 1138 - height);
    ctx.bezierCurveTo(60 - width, 1138 - height, 54 - width, 1138 - height, 54 - width, 1138 - height);

    const grdlineleftline = ctx.createLinearGradient(54 - width, 1138 - height, 130 - width, 1350 - height);
    grdlineleftline.addColorStop(0, '#d1dcea');
    grdlineleftline.addColorStop(1, "#aab6c7");
    ctx.strokeStyle = grdlineleftline
    ctx.fillStyle = grdlineleftline
    ctx.fill();
    ctx.stroke()

    // 蓝色描边
    ctx.beginPath();
    ctx.moveTo(14 - width, 1248 - height);
    ctx.bezierCurveTo(10 - width, 1258 - height, 136 - width, 1420 - height, 220 - width, 1434 - height);
    ctx.bezierCurveTo(228 - width, 1440 - height, 340 - width, 1464 - height, 340 - width, 1464 - height);
    ctx.bezierCurveTo(400 - width, 1444 - height, 480 - width, 1350 - height, 500 - width, 1340 - height);
    ctx.bezierCurveTo(500 - width, 1340 - height, 450 - width, 1300 - height, 450 - width, 1300 - height);
    ctx.bezierCurveTo(450 - width, 1300 - height, 280 - width, 1444 - height, 220 - width, 1426 - height);
    ctx.bezierCurveTo(130 - width, 1406 - height, 8 - width, 1248 - height, 14 - width, 1248 - height);

    const grdbuleleft = ctx.createLinearGradient(340 - width, 1248 - height, 340 - width, 1464 - height);
    grdbuleleft.addColorStop(0, "#3d80bd");
    grdbuleleft.addColorStop(0.7, "#3d80bd");
    grdbuleleft.addColorStop(1, '#5c9bc1');
    ctx.strokeStyle = grdbuleleft
    ctx.fillStyle = grdbuleleft
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(14 - width, 1248 - height);
    ctx.bezierCurveTo(10 - width, 1258 - height, 136 - width, 1420 - height, 220 - width, 1434 - height);
    ctx.bezierCurveTo(290 - width, 1450 - height, 450 - width, 1300 - height, 454 - width, 1308 - height);
    ctx.bezierCurveTo(454 - width, 1308 - height, 450 - width, 1300 - height, 450 - width, 1300 - height);
    ctx.bezierCurveTo(454 - width, 1308 - height, 450 - width, 1300 - height, 450 - width, 1300 - height);
    ctx.bezierCurveTo(450 - width, 1300 - height, 280 - width, 1444 - height, 220 - width, 1426 - height);
    ctx.bezierCurveTo(130 - width, 1406 - height, 8 - width, 1248 - height, 20 - width, 1248 - height);
    ctx.bezierCurveTo(20 - width, 1248 - height, 14 - width, 1248 - height, 14 - width, 1248 - height);
    ctx.strokeStyle = '#4979b8'
    const grdlinebuleleft = ctx.createLinearGradient(340 - width, 1248 - height, 340 - width, 1464 - height);
    grdlinebuleleft.addColorStop(0, "#4887b8");
    grdlinebuleleft.addColorStop(1, '#3682b8');
    ctx.fillStyle = grdlinebuleleft
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(340 - width, 1464 - height);
    ctx.bezierCurveTo(400 - width, 1444 - height, 480 - width, 1342 - height, 500 - width, 1340 - height);
    ctx.strokeStyle = '#4979b8'
    ctx.stroke()

    ctx.save()
  }

  /** 底部的叶子: 最上层 */
  const windmillLeafLineThree = (ctx: any) => {
    ctx.beginPath();
    ctx.moveTo(220 - width, 1740 - height);
    ctx.bezierCurveTo(220 - width, 1740 - height, 576 - width, 1750 - height, 566 - width, 1520 - height);
    ctx.bezierCurveTo(576 - width, 1450 - height, 434 - width, 1314 - height, 430 - width, 1314 - height);
    ctx.bezierCurveTo(430 - width, 1314 - height, 434 - width, 1314 - height, 470 - width, 1274 - height);
    ctx.bezierCurveTo(470 - width, 1274 - height, 620 - width, 1430 - height, 620 - width, 1430 - height);
    ctx.bezierCurveTo(600 - width, 1490 - height, 580 - width, 1540 - height, 580 - width, 1540 - height);
    ctx.bezierCurveTo(550 - width, 1693 - height, 380 - width, 1744 - height, 220 - width, 1740 - height);

    const grdlineleftbg = ctx.createRadialGradient(220 - width, 1740 - height, 100, 220 - width, 1740 - height, 580);
    grdlineleftbg.addColorStop(0, "#9bacc1");
    grdlineleftbg.addColorStop(0.7, "#dde2e6");
    grdlineleftbg.addColorStop(1, "#7e92aa");
    ctx.strokeStyle = grdlineleftbg
    ctx.fillStyle = grdlineleftbg
    ctx.fill();
    ctx.stroke()

    // 右侧边线
    ctx.beginPath();
    ctx.moveTo(220 - width, 1740 - height);
    ctx.bezierCurveTo(220 - width, 1740 - height, 576 - width, 1750 - height, 566 - width, 1520 - height);
    ctx.bezierCurveTo(576 - width, 1450 - height, 434 - width, 1314 - height, 430 - width, 1314 - height);
    ctx.bezierCurveTo(430 - width, 1314 - height, 432 - width, 1314 - height, 434 - width, 1312 - height);
    ctx.bezierCurveTo(434 - width, 1312 - height, 566 - width, 1420 - height, 576 - width, 1520 - height);
    ctx.bezierCurveTo(576 - width, 1550 - height, 580 - width, 1744 - height, 220 - width, 1740 - height);

    const grdlineleft = ctx.createLinearGradient(430 - width, 1314 - height, 220 - width, 1740 - height);
    grdlineleft.addColorStop(0, "#c1cad4");
    grdlineleft.addColorStop(0.9, "#c1cad4");
    grdlineleft.addColorStop(1, "#96a6ba");
    ctx.strokeStyle = grdlineleft
    ctx.fillStyle = grdlineleft
    ctx.fill();
    ctx.stroke()

    // 蓝色的
    ctx.beginPath();
    ctx.moveTo(340 - width, 1820 - height);
    ctx.bezierCurveTo(340 - width, 1820 - height, 670 - width, 1700 - height, 610 - width, 1460 - height);
    ctx.bezierCurveTo(590 - width, 1410 - height, 444 - width, 1300 - height, 440 - width, 1304 - height);
    ctx.bezierCurveTo(440 - width, 1304 - height, 490 - width, 1270 - height, 490 - width, 1270 - height);
    ctx.bezierCurveTo(490 - width, 1270 - height, 620 - width, 1380 - height, 620 - width, 1400 - height);
    ctx.bezierCurveTo(630 - width, 1400 - height, 640 - width, 1540 - height, 596 - width, 1610 - height);
    ctx.bezierCurveTo(546 - width, 1740 - height, 340 - width, 1820 - height, 340 - width, 1820 - height);
    const grdbgbuleleft = ctx.createLinearGradient(490 - width, 1270 - height, 596 - width, 1610 - height);
    grdbgbuleleft.addColorStop(0, "#3768a0");
    grdbgbuleleft.addColorStop(0.3, "#6aadcc");
    grdbgbuleleft.addColorStop(1, "#6aadcc");
    ctx.strokeStyle = grdbgbuleleft
    ctx.fillStyle = grdbgbuleleft
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(340 - width, 1820 - height);
    ctx.bezierCurveTo(340 - width, 1820 - height, 670 - width, 1700 - height, 610 - width, 1460 - height);
    ctx.bezierCurveTo(590 - width, 1410 - height, 444 - width, 1300 - height, 440 - width, 1304 - height);
    ctx.bezierCurveTo(440 - width, 1304 - height, 444 - width, 1304 - height, 444 - width, 1304 - height);
    ctx.bezierCurveTo(448 - width, 1298 - height, 618 - width, 1420 - height, 616 - width, 1460 - height);
    ctx.bezierCurveTo(618 - width, 1450 - height, 636 - width, 1570 - height, 586 - width, 1630 - height);
    ctx.bezierCurveTo(538 - width, 1740 - height, 340 - width, 1820 - height, 340 - width, 1820 - height);
    const grdbgbuleleft2 = ctx.createLinearGradient(440 - width, 1304 - height, 340 - width, 1820 - height);
    grdbgbuleleft2.addColorStop(0, "#3d679c");
    grdbgbuleleft2.addColorStop(0.3, "#6aadcc");
    grdbgbuleleft2.addColorStop(1, "#467fb7");
    ctx.strokeStyle = grdbgbuleleft2
    ctx.fillStyle = grdbgbuleleft2
    ctx.fill();

    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(490 - width, 1270 - height);
    ctx.bezierCurveTo(490 - width, 1270 - height, 620 - width, 1380 - height, 620 - width, 1400 - height);
    ctx.strokeStyle = '#325899'
    ctx.stroke()
    
    ctx.save()
  }

  /** 右侧的叶子: 最上层 */
  const windmillLeafLineFour = (ctx: any) => {
    ctx.beginPath();
    ctx.moveTo(850 - width, 1540 - height);
    ctx.bezierCurveTo(800 - width, 1400 - height, 820 - width, 1220 - height, 620 - width, 1274 - height);
    ctx.bezierCurveTo(608 - width, 1270 - height, 496 - width, 1350 - height, 496 - width, 1348 - height);
    ctx.bezierCurveTo(496 - width, 1348 - height, 438 - width, 1294 - height, 438 - width, 1294 - height);
    ctx.bezierCurveTo(438 - width, 1294 - height, 580 - width, 1240 - height, 580 - width, 1240 - height);
    ctx.bezierCurveTo(580 - width, 1240 - height, 700 - width, 1256 - height, 700 - width, 1256 - height);
    ctx.bezierCurveTo(820 - width, 1270 - height, 800 - width, 1400 - height, 850 - width, 1540 - height);

    const grdbgleft = ctx.createLinearGradient(440 - width, 1304 - height, 340 - width, 1820 - height);
    grdbgleft.addColorStop(0, "#b8c1ca");
    grdbgleft.addColorStop(0.3, "#b8c1ca");
    grdbgleft.addColorStop(1, "#b8c1ca");
    ctx.strokeStyle = grdbgleft
    ctx.fillStyle = grdbgleft
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(850 - width, 1540 - height);
    ctx.bezierCurveTo(798 - width, 1400 - height, 810 - width, 1220 - height, 620 - width, 1274 - height);
    ctx.bezierCurveTo(608 - width, 1270 - height, 500 - width, 1348 - height, 496 - width, 1348 - height);
    ctx.bezierCurveTo(506 - width, 1348 - height, 580 - width, 1252 - height, 700 - width, 1256 - height);
    ctx.bezierCurveTo(820 - width, 1270 - height, 800 - width, 1400 - height, 850 - width, 1540 - height);

    const grdlineleft = ctx.createLinearGradient(496 - width, 1348 - height, 850 - width, 1540 - height);
    grdlineleft.addColorStop(0, "#bfc8cb");
    grdlineleft.addColorStop(0.4, "#bfc8cb");
    grdlineleft.addColorStop(1, "#c4d1e7");

    ctx.strokeStyle = grdlineleft
    ctx.fillStyle = grdlineleft
    ctx.fill();
    ctx.stroke()

    // 蓝色的
    ctx.beginPath();
    ctx.moveTo(865 - width, 1450 - height);
    ctx.bezierCurveTo(860 - width, 1450 - height, 784 - width, 1160 - height, 610 - width, 1236 - height);
    ctx.bezierCurveTo(570 - width, 1255 - height, 496 - width, 1348 - height, 496 - width, 1348 - height);
    ctx.bezierCurveTo(496 - width, 1348 - height, 438 - width, 1294 - height, 438 - width, 1294 - height);
    ctx.bezierCurveTo(440 - width, 1294 - height, 530 - width, 1220 - height, 530 - width, 1228 - height);
    ctx.bezierCurveTo(540 - width, 1210 - height, 610 - width, 1200 - height, 610 - width, 1200 - height);
    ctx.bezierCurveTo(800 - width, 1185 - height, 860 - width, 1450 - height, 865 - width, 1450 - height);

    const grdbulebgleft = ctx.createLinearGradient(496 - width, 1348 - height, 620 - width, 1215 - height);
    grdbulebgleft.addColorStop(0, "#2f689b");
    grdbulebgleft.addColorStop(0.1, "#2f689b");
    grdbulebgleft.addColorStop(1, "#5391c6");

    ctx.strokeStyle = grdbulebgleft
    ctx.fillStyle = grdbulebgleft
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(865 - width, 1450 - height);
    ctx.bezierCurveTo(860 - width, 1450 - height, 784 - width, 1160 - height, 610 - width, 1236 - height);
    ctx.bezierCurveTo(570 - width, 1255 - height, 496 - width, 1348 - height, 496 - width, 1348 - height);
    ctx.bezierCurveTo(496 - width, 1348 - height, 494 - width, 1348 - height, 494 - width, 1348 - height);
    ctx.bezierCurveTo(494 - width, 1348 - height, 590 - width, 1226 - height, 610 - width, 1228 - height);
    ctx.bezierCurveTo(610 - width, 1226 - height, 640 - width, 1210 - height, 690 - width, 1216 - height);
    ctx.bezierCurveTo(776 - width, 1216 - height, 865 - width, 1450 - height, 865 - width, 1450 - height);

    const grdbulelineleft = ctx.createLinearGradient(865 - width, 1450 - height, 610 - width, 1216 - height);
    grdbulelineleft.addColorStop(0, "#3870bb");
    grdbulelineleft.addColorStop(0.1, "#3870bb");
    grdbulelineleft.addColorStop(1, "#5ea4cd");

    ctx.strokeStyle = grdbulelineleft
    ctx.fillStyle = grdbulelineleft
    ctx.fill();
    ctx.stroke()

    ctx.save()
  }

  /** 最中间的圆 */
  const windmillCenterTop = (ctx: any) => {
    ctx.beginPath();
    ctx.arc(490 - width, 1300 - height, 22, 0, 2 * Math.PI);
    const grd = ctx.createLinearGradient(490 - width, 1278 - height, 490 - width, 1322 - height);
    grd.addColorStop(0, "#d1d9de");
    grd.addColorStop(0.8, "#d6e1e6");
    grd.addColorStop(1, "#bcc7d0");
    ctx.strokeStyle = grd
    ctx.fillStyle = grd
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(468 - width, 1300 - height);
    ctx.arcTo(490 - width, 1330 - height, 512 - width, 1300 - height, 22);
    ctx.arcTo(490 - width, 1330 - height, 458 - width, 1300 - height, 22);
    const grd2 = ctx.createLinearGradient(490 - width, 1300 - height, 490 - width, 1330 - height);
    grd2.addColorStop(0, "#adb4c2");
    grd2.addColorStop(0.8, "#d4d8d1");
    grd2.addColorStop(1, "#d4d8d1");
    ctx.strokeStyle = grd2
    ctx.fillStyle = grd2
    ctx.fill();
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(486 - width, 1284 - height);
    ctx.quadraticCurveTo(480 - width, 1300 - height, 486 - width, 1310 - height);
    ctx.quadraticCurveTo(500 - width, 1316 - height, 500 - width, 1304 - height);
    ctx.quadraticCurveTo(500 - width, 1284 - height, 486 - width, 1284 - height);

    const grd3 = ctx.createLinearGradient(490 - width, 1300 - height, 490 - width, 1330 - height);
    grd3.addColorStop(0, "#9da29c");
    grd3.addColorStop(0.1, "#ada8a0");
    grd3.addColorStop(1, "#d4d8d1");
    ctx.strokeStyle = grd3
    ctx.fillStyle = grd3
    ctx.fill();
    ctx.stroke()

    ctx.save()
  }

  return <div className='windmill-containers'>
    {/* <img className='windmill-bg-img-container' src={bg}/> */}
    <div className='windmill-body-container'></div>
    <canvas id='windmill-canvas' width={1080} height={1080} />
  </div>
}
