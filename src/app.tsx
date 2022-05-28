import React, { useEffect } from 'react'
import {
  oneLotus, fourLotus, threeLotus, twoLotus, fiveLotus,
  fixLoutus, beforeLotus, nineLoutus, eigitLoutus, sevenLoutus, width
} from './lotus'
import './app.less'

export default () => {
  useEffect(() => {
    const lotus: any = document.getElementById('lotus-canvas-container')
    const ctx = lotus.getContext('2d')
    // rhizome(ctx)
    oneLotus(ctx)
    fourLotus(ctx)
    threeLotus(ctx)
    twoLotus(ctx)
    fiveLotus(ctx)
    fixLoutus(ctx)
    beforeLotus(ctx)
    nineLoutus(ctx)
    eigitLoutus(ctx)
    sevenLoutus(ctx)
  }, [])

  /** 根茎 */
  const rhizome = (ctx: any) => {
    const [beginX, beginY] = [356 + width, 320]
    // 根茎整体轮廓线的颜色：线性渐变
    const grd=ctx.createLinearGradient(356 + width, 320, 396 + width, 320);
    grd.addColorStop(0, "rgba(73, 133, 1114, 1)");
    grd.addColorStop(1, "rgba(255,255, 255, 1)");

    // 根茎整体： 填充
    const grd2=ctx.createLinearGradient(356 + width, 320, 356 + width, 420);
    grd2.addColorStop(0, "rgba(62, 118, 75, 1)");
    grd2.addColorStop(1, "rgba(62, 118, 75, 1)");
  
    // 根茎整体
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(340 + width, 320, 420 + width, 420, 400 + width, 620);
    ctx.bezierCurveTo(400 + width, 620, 394 + width, 810, 394 + width, 810);
    ctx.bezierCurveTo(395 + width, 798, 428 + width, 798, 424 + width, 810);
    ctx.bezierCurveTo(424 + width, 810, 432 + width, 798, 436 + width, 620);
    ctx.bezierCurveTo(444 + width, 500, 404 + width, 340, 410 + width, beginY);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd // 线的颜色
    ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
    ctx.fill();
    ctx.stroke()

    ctx.save()


    // 底部阴影
    // 底部阴影： 填充
    const grd3=ctx.createLinearGradient(394 + width, 810, 400 + width, 620);
    grd3.addColorStop(0, "rgba(24, 55, 31, 1)");
    grd3.addColorStop(1, "rgba(62, 118, 75, 1)");

    ctx.beginPath();
    ctx.moveTo(400 + width, 620);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(400 + width, 620, 394 + width, 810, 394 + width, 810);
    ctx.bezierCurveTo(395 + width, 798, 428 + width, 798, 424 + width, 810);
    ctx.bezierCurveTo(424 + width, 810, 432 + width, 798, 436 + width, 620);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd // 线的颜色
    ctx.fillStyle= grd3 // 绘制花瓣的背景色 填充颜色
    ctx.fill();
    ctx.stroke()

    ctx.save()


    // 左侧底部阴影
    // 填充
    const grd4=ctx.createLinearGradient(394 + width, 810, 400 + width, 620);
    grd4.addColorStop(0, "rgba(12, 38, 16, 0.6)");
    grd4.addColorStop(1, "rgba(12, 38, 16, 0.8)");

    ctx.beginPath();
    ctx.moveTo(402 + width, 520);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(408 + width, 520, 400 + width, 620, 400 + width, 620);
    ctx.bezierCurveTo(400 + width, 620, 394 + width, 810, 394 + width, 810);
    ctx.bezierCurveTo(394 + width, 810, 398 + width, 810, 398 + width, 810);
    ctx.bezierCurveTo(400 + width, 810, 406 + width, 620, 404 + width, 620);
    ctx.bezierCurveTo(406 + width, 620, 406 + width, 520, 402 + width, 520);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.fillStyle= grd4 // 绘制花瓣的背景色 填充颜色
    ctx.fill();
    ctx.stroke()

    ctx.save()

    // 顶部的阴影
    // 顶部的阴影: 填充
    const grd5=ctx.createRadialGradient(356 + width, 200, 20, 356 + width, 320, 200);
    grd5.addColorStop(0, "rgba(24, 55, 31, 1)");
    grd5.addColorStop(1, "rgba(62, 118, 75, 1)");

    ctx.beginPath();
    ctx.moveTo(402 + width, 500);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(410 + width, 480, 350 + width, 320, beginX, beginY);
    ctx.bezierCurveTo(356 + width, 320, 410 + width, 320, 410 + width, beginY);
    ctx.bezierCurveTo(390 + width, 320, 448 + width, 550, 427 + width, 500);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.fillStyle= grd5 // 绘制花瓣的背景色 填充颜色
    ctx.fill();
    ctx.stroke()
    ctx.save()

    // 根茎： 线条
    // 根茎：线条: 填充
    const grd6=ctx.createLinearGradient(410 + width, 680, 18 + width, 540);
    grd6.addColorStop(0, "rgba(62, 118, 75, 1)");
    grd6.addColorStop(0.2, "rgba(34, 73, 40, 1)");
    grd6.addColorStop(0.8, "rgba(34, 73, 40, 1)");
    grd6.addColorStop(1, "rgba(62, 118, 75, 1)");
    ctx.beginPath();
    ctx.moveTo(418 + width, 540);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(420 + width, 580, 412 + width, 690, 410 + width, 680);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd6 // 线的颜色
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(425 + width, 580);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(420 + width, 580, 425 + width, 630, 420 + width, 630);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd6 // 线的颜色
    ctx.stroke()


    ctx.beginPath();
    ctx.moveTo(406 + width, 430);
    // 三次贝塞尔曲线
    ctx.bezierCurveTo(406 + width, 430, 412 + width, 440, 412 + width, 460);
    ctx.lineWidth = 0.5 // 线的宽度
    ctx.shadowOffsetX = 10; // 线条阴影
    ctx.shadowBlur = 20; // 线条阴影
    ctx.shadowColor = grd // 线条阴影颜色
    ctx.strokeStyle = grd6 // 线的颜色
    ctx.stroke()
    ctx.save()

  }

  return <div className='stars-container'>
    <canvas id='lotus-canvas-container' width={1000} height={800} ></canvas>
  </div>
}
