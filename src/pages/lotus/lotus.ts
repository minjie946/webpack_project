/**
 * @description 花瓣儿
 * @author minjie
 * @Date 2022-05-27 20:04
 * @LastEditTime 2022-05-27 20:19
 * @LastEditors minjie
 * @copyright Copyright © 2021 Shanghai Yejia Digital Technology Co., Ltd. All rights reserved.
 */

export const width: number = 340
/** 最前面的花瓣 */
export const beforeLotus = (ctx:any) => {
  ctx.globalAlpha = 1
  const [beginX, beginY] = [640, 100]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(640, 150, 740, 250);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 线的颜色：线性渐变
  const grd2=ctx.createLinearGradient(370, 100, 640, 280);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(1, "white");


  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(640, 100, 740, 250);
  grd3.addColorStop(0, "rgba(227,160,201, 0.4)");
  grd3.addColorStop(0.8, "rgba(217,179,208, 0.4)");
  grd3.addColorStop(0.9, "rgba(64, 102, 119, 0.2)");
  grd3.addColorStop(1, "rgba(64, 102, 119, 0.1)");

  // 花芯
  ctx.beginPath();
  ctx.moveTo(638, 134);
  ctx.quadraticCurveTo(620,120, 624,108);
  ctx.quadraticCurveTo(640,110, 668,120);
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(640, 120, 560, 200, 640, 300);
  ctx.bezierCurveTo(660, 330, 780, 380, 798, 240);
  ctx.bezierCurveTo(770, 50, 650, 130, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [640, 110, 570, 200, 658, 315],
    [640, 120, 580, 200, 660, 315],
    [640, 130, 600, 200, 670, 319],
    [640, 140, 630, 200, 680, 320],
    [640, 140, 670, 200, 690, 325],
    [640, 140, 710, 170, 700, 325],
    [650, 150, 740, 160, 715, 325],
    [660, 150, 750, 134, 730, 320],
    [660, 144, 760, 110, 750, 316],
    [660, 140, 770, 90, 770, 298]
  ]

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  //------阴影------
  // 填充的颜色:放射状的渐变
  const grd21 = ctx.createLinearGradient(670, 340, 660, 290);
  grd21.addColorStop(0, "rgba(64, 102, 119, 1)");
  grd21.addColorStop(1, "white");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(640, 300);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(660, 330, 780, 380, 798, 240);
  ctx.lineWidth = 0 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd21 // 线的颜色
  ctx.fillStyle= grd21 // 绘制花瓣的背景色 填充颜色
  ctx.globalAlpha = 0.4
  ctx.fill();
  ctx.stroke()
  ctx.save()
  ctx.globalAlpha = 1
}

export const oneLotus = (ctx:any) => {
  const [beginX, beginY] = [550, 30]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(580, 20, 700, 40);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createRadialGradient(520, 0, 80, 630, 190, 100);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(1, "white");

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(500, 20, 660, 40);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(1, "rgb(255,255,255)");
  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(550, 30, 505, 60, 540, 180);
  ctx.bezierCurveTo(540, 180, 700, 180, 700, 180);
  ctx.bezierCurveTo(700, 180, 600, 20, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [535, 40, 530, 120, 540, 120],
    [550, 20, 540, 80, 550, 80],
    [560, 30, 570, 60, 570, 60]
  ]

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  ctx.save()
}

export const twoLotus = (ctx:any) => {
  const [beginX, beginY] = [150 + width, 120]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(260 + width, 50, 300 + width, 30);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createRadialGradient(220 + width, 80, 20, 200 + width, 130, 90);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(1, "rgba(255, 255, 255, 0.9)");

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(100 + width, 80, 320 + width, 240);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(1, "rgb(255,255,255)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(150 + width, 150, 190 + width, 300, 290 + width, 376);
  ctx.bezierCurveTo(400 + width, 376, 320 + width, 240, 320 + width, 240);
  ctx.bezierCurveTo(300 + width, 180, 240 + width, 180, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [150 + width, 140, 222 + width, 298, 220 + width, 298],
    [170 + width, 140, 222 + width, 298, 240 + width, 298],
    [180 + width, 140, 250 + width, 298, 250 + width, 298],
    [190 + width, 140, 270 + width, 298, 260 + width, 298],
    [200 + width, 140, 300 + width, 298, 280 + width, 298],
    [200 + width, 140, 340 + width, 298, 300 + width, 298]
  ]

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  ctx.save()
}

export const threeLotus = (ctx:any) => {
  const [beginX, beginY] = [240 + width, 80]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(260 + width, 50, 300 + width, 30);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createRadialGradient(150 + width, 80, 5, 200 + width, 80, 100);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(1, "white");

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(190 + width, 30, 300 + width, 280);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(1, "rgb(255,255,255)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(240 + width, 80, 224 + width, 90, 224 + width, 100);
  ctx.bezierCurveTo(220 + width, 96, 204 + width, 120, 210 + width, 120);
  ctx.bezierCurveTo(200 + width, 108, 208 + width, 190, 204 + width, 190);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  ctx.bezierCurveTo(210 + width, 100, 204 + width, 190, 204 + width, 190);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(240 + width, 80, 224 + width, 100, 230 + width, 100);
  ctx.bezierCurveTo(226 + width, 96, 226 + width, 110, 226 + width, 110);
  ctx.bezierCurveTo(226 + width, 110, 224 + width, 116, 224 + width, 116);
  ctx.bezierCurveTo(224 + width, 116, 224 + width, 122, 224 + width, 122);
  ctx.bezierCurveTo(190 + width, 260, 300 + width, 300, 300 + width, 300);
  ctx.bezierCurveTo(420 + width, 300, 360 + width, 160, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [232 + width, 80, 210 + width, 220, 240 + width, 220],
    [232 + width, 80, 230 + width, 220, 250 + width, 220],
    [232 + width, 80, 250 + width, 220, 280 + width, 220],
    [232 + width, 80, 300 + width, 220, 290 + width, 220],
    [250 + width, 80, 350 + width, 220, 310 + width, 220],
  ]

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  ctx.save()
}

export const fourLotus = (ctx:any) => {
  const [beginX, beginY] = [290 + width, 118]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(260 + width, 50, 300 + width, 30);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createLinearGradient(180 + width, 118, 290 + width, 180);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(1, "white");

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(190 + width, 30, 300 + width, 280);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(1, "rgb(255,255,255)");

  // 填充的颜色:放射状的渐变
  const grd4=ctx.createLinearGradient(190 + width, 26, 260 + width, 120);
  grd4.addColorStop(0, "#e295c2");
  grd4.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd5=ctx.createLinearGradient(256 + width, 66, 256 + width, 106);
  grd5.addColorStop(0, "#e295c2");
  grd5.addColorStop(1, "white");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(256 + width, 66);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(256 + width, 66, 300 + width, 95, 292 + width, 95);
  ctx.bezierCurveTo(292 + width, 95, 252 + width, 115, 252 + width, 115);
  ctx.bezierCurveTo(264 + width, 115, 258 + width, 70, 256 + width, 66);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd4 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(290 + width, 108, 286 + width, 90, 285 + width, 94);
  ctx.bezierCurveTo(290 + width, 94, 270 + width, 90, 270 + width, 86);
  ctx.bezierCurveTo(270 + width, 86, 268 + width, 78, 268 + width, 80);
  ctx.bezierCurveTo(260 + width, 86, 232 + width, 125, 242 + width, 125);
  ctx.bezierCurveTo(242 + width, 125, 290 + width, 118, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(256 + width, 66);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(250 + width, 66, 240 + width, 85, 240 + width, 85);
  ctx.bezierCurveTo(240 + width, 85, 230 + width, 115, 230 + width, 115);
  ctx.bezierCurveTo(230 + width, 115, 252 + width, 115, 252 + width, 115);
  ctx.bezierCurveTo(270 + width, 115, 260 + width, 66, 256 + width, 66);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd5 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(256 + width, 66);
  ctx.bezierCurveTo(254 + width, 66, 250 + width, 86, 254 + width, 90);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(290 + width, 108, 286 + width, 90, 285 + width, 94);
  ctx.bezierCurveTo(290 + width, 94, 270 + width, 90, 270 + width, 86);
  ctx.bezierCurveTo(270 + width, 86, 268 + width, 78, 268 + width, 80);
  ctx.bezierCurveTo(268 + width, 74, 380 + width, 112, 400 + width, 132);
  ctx.bezierCurveTo(400 + width, 152, 290 + width, 168, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(285 + width, 94);
  ctx.bezierCurveTo(285 + width, 94, 290 + width, 90, 294 + width, 106);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(285 + width, 94);
  ctx.bezierCurveTo(285 + width, 94, 290 + width, 90, 298 + width, 100);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(272 + width, 85);
  ctx.bezierCurveTo(272 + width, 85, 304 + width, 90, 304 + width, 96);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.save()
}

export const fiveLotus = (ctx:any) => {
  const [beginX, beginY] = [520 + width, 56]
  ctx.globalAlpha = 1
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(540 + width, 106, 520 + width, 400);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createLinearGradient(600 + width, 6, 510 + width, 220);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(0.6, "rgba(255, 255, 255, 1)");
  grd2.addColorStop(0.9, "rgba(255, 255, 255, 1)");
  grd2.addColorStop(1, "rgba(255, 255, 255, 0.9)");

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(520 + width, 56, 520 + width, 170);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(1, "rgb(255,255,255)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(520 + width, 46, 389 + width, 76, 380 + width, 146);
  ctx.bezierCurveTo(380 + width, 136, 360 + width, 310, 386 + width, 310);
  ctx.bezierCurveTo(450 + width, 352, 570 + width, 260, 570 + width, 176);
  ctx.bezierCurveTo(570 + width, 136, 540 + width, 108, 528 + width, 86);
  ctx.bezierCurveTo(525 + width, 86, 520 + width, 60, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [500 + width, 46, 370 + width, 92, 385 + width, 194],
    [500 + width, 46, 400 + width, 92, 400 + width, 194],
    [500 + width, 46, 420 + width, 92, 420 + width, 194],
    [500 + width, 46, 440 + width, 92, 440 + width, 194],
    [500 + width, 50, 460 + width, 92, 460 + width, 194],
    [500 + width, 50, 480 + width, 92, 470 + width, 194],
    [500 + width, 52, 490 + width, 92, 480 + width, 194],
    [500 + width, 58, 510 + width, 92, 490 + width, 194],
    [500 + width, 60, 530 + width, 92, 510 + width, 194],
    [500 + width, 66, 540 + width, 92, 530 + width, 194],
  ]

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })
  ctx.save()
}

export const fixLoutus = (ctx:any) => {
  // 填充的颜色:放射状的渐变
  const grd4=ctx.createLinearGradient(380 + width, 66, 500 + width, 320);
  grd4.addColorStop(0, "#e295c2");
  grd4.addColorStop(1, "rgba(255, 255, 255, 1)");

  // 线的颜色：线性渐变
  const grd5=ctx.createLinearGradient(580 + width, 176, 580 + width, 300);
  grd5.addColorStop(0, "#e295c2");
  grd5.addColorStop(1, "white");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(580 + width, 176);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(580 + width, 206, 500 + width, 300, 386 + width, 310);
  ctx.bezierCurveTo(480 + width, 360, 570 + width, 300, 580 + width, 176);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd5 // 线条阴影颜色
  ctx.strokeStyle = grd5 // 线的颜色
  ctx.fillStyle= grd4 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(580 + width, 176);
  ctx.bezierCurveTo(580 + width, 198, 500 + width, 340, 386 + width, 310);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd5 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(580 + width, 176);
  ctx.bezierCurveTo(580 + width, 208, 500 + width, 380, 386 + width, 310);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd5 // 线的颜色
  ctx.stroke()

  ctx.save()

  // --------被隐藏的部分-----

  // 填充的颜色:放射状的渐变
  const grd6=ctx.createLinearGradient(580 + width, 5, 580 + width, 240);
  grd6.addColorStop(0, "#e295c2");
  grd6.addColorStop(1, "rgba(255, 255, 255, 0.8)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(580 + width, 176);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(520 + width, 170, 460 + width, 300, 386 + width, 310);
  ctx.bezierCurveTo(500 + width, 300, 580 + width, 206, 580 + width, 176);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd5 // 线条阴影颜色
  ctx.strokeStyle = grd5 // 线的颜色
  ctx.globalAlpha = 0.6
  ctx.fillStyle= grd6 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  ctx.save()
  ctx.globalAlpha = 1
}

export const sevenLoutus = (ctx:any) => {
  ctx.globalAlpha = 1
  const [beginX, beginY] = [356 + width, 330]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(120 + width, 406, 356 + width, 330);
  grd.addColorStop(0, "#e295c2");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createRadialGradient(150 + width, 286, 50 + width, 150, 286 + width, 140);
  grd2.addColorStop(0, "#e295c2");
  grd2.addColorStop(1, "rgba(255, 255, 255, 1)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(220 + width, 330, 170 + width, 366, 120 + width, 406);
  ctx.bezierCurveTo(120 + width, 416, 356 + width, 470, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [356 + width, 338, 300 + width, 336, 300 + width, 330],
    [346 + width, 350, 290 + width, 338, 290 + width, 333],
    [346 + width, 368, 280 + width, 342, 280 + width, 336],
    [346 + width, 380, 270 + width, 339, 260 + width, 339],
    [346 + width, 400, 190 + width, 380, 190 + width, 360],
    [346 + width, 400, 200 + width, 360, 200 + width, 360],
    [346 + width, 400, 220 + width, 350, 220 + width, 360],
    [346 + width, 390, 220 + width, 340, 230 + width, 350]
  ]

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(10 + width, 292, 400 + width, 336);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(1, "rgb(255,255,255)");

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(beginX, beginY);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  ctx.beginPath();
  ctx.moveTo(350 + width, 363);
  ctx.bezierCurveTo(350 + width, 383, 190 + width, 400, 180 + width, 370);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(340 + width, 379);
  ctx.bezierCurveTo(340 + width, 379, 190 + width, 410, 178 + width, 376);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(330 + width, 390);
  ctx.bezierCurveTo(330 + width, 390, 168 + width, 412, 168 + width, 386);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()

  ctx.beginPath();
  ctx.moveTo(320 + width, 400);
  ctx.bezierCurveTo(320 + width, 400, 150 + width, 412, 150 + width, 400);
  ctx.lineWidth = 1 // 线的宽度
  ctx.strokeStyle = grd3 // 线的颜色
  ctx.stroke()
  ctx.globalAlpha = 1
  ctx.save()

  //------阴影------
  // 填充的颜色:放射状的渐变
  const grd21 = ctx.createLinearGradient(140 + width, 436, 140 + width, 330);
  grd21.addColorStop(0, "rgba(64, 102, 119, 1)");
  grd21.addColorStop(1, "rgba(255, 255, 255, 0.2)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(120 + width, 406);
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(220 + width, 330, 170 + width, 366, 120 + width, 406);
  ctx.bezierCurveTo(120 + width, 416, 356 + width, 470, beginX, beginY);
  ctx.lineWidth = 0 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd21 // 线的颜色
  ctx.globalAlpha = 0.6
  ctx.fillStyle= grd21 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()
  ctx.save()
  ctx.globalAlpha = 1
}

export const eigitLoutus = (ctx:any) => {
  const [beginX, beginY] = [356 + width, 330]
  // 线的颜色：线性渐变
  const grd=ctx.createRadialGradient(80 + width, 326, 20, 80 + width, 326, 100);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createRadialGradient(20 + width, 326, 10, 80 + width, 326, 70);
  grd2.addColorStop(0, "#e295c2");
  // grd2.addColorStop(0, "rgba(255, 255, 255, 0.9)");
  grd2.addColorStop(1, "rgba(255, 255, 255, 0.9)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(340 + width, 270, 100 + width, 266, 80 + width, 326);
  ctx.bezierCurveTo(78 + width, 336, 98 + width, 380, 98 + width, 380);
  ctx.bezierCurveTo(98 + width, 400, 356 + width, 450, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList: Array<number[]> = [
    [80 + width, 340, 108 + width, 390, 150 + width, 400],
    [80 + width, 320, 108 + width, 390, 180 + width, 400],
    [80 + width, 320, 128 + width, 390, 190 + width, 390],
    [80 + width, 310, 138 + width, 390, 200 + width, 380],
    [80 + width, 300, 138 + width, 380, 220 + width, 370],
    [80 + width, 290, 138 + width, 370, 260 + width, 360],
  ]

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(80 + width, 326, 140 + width, 326);
  grd3.addColorStop(0, "rgba(236,175, 261, 1)");
  grd3.addColorStop(1, "rgba(255, 255, 255, 1)");

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(80 + width, 326);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  const textureNumList2: Array<number[]> = [
    [80 + width, 290, 250 + width, 366, 270 + width, 350],
    [80 + width, 290, 240 + width, 336, 280 + width, 350],
    [80 + width, 290, 240 + width, 316, 290 + width, 350],
    [80 + width, 290, 240 + width, 296, 300 + width, 350],
    [80 + width, 290, 240 + width, 276, 320 + width, 350],
    [80 + width, 290, 240 + width, 256, 340 + width, 350],
  ]

  // 纹理线的颜色
  const grd4=ctx.createLinearGradient(80 + width, 326, 180 + width, 326);
  grd4.addColorStop(0, "rgba(236,175, 261, 1)");
  grd4.addColorStop(0.3, "rgba(236,175, 261, 0.6)");
  grd4.addColorStop(0.6, "rgba(236,175, 261, 0.2)");
  grd4.addColorStop(1, "rgba(202, 211, 232, 0.2)");

  // 花瓣的纹理
  textureNumList2.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(80 + width, 326);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd4 // 线的颜色
    ctx.stroke()
  })

  const grd5=ctx.createLinearGradient(80 + width, 326, 180 + width, 326);
  grd5.addColorStop(0, "rgba(236,175, 261, 0.8)");
  grd5.addColorStop(1, "rgba(202, 211, 232, 0.2)");

  ctx.beginPath();
  ctx.moveTo(80 + width, 326);
  ctx.bezierCurveTo(80 + width, 290, 250 + width, 376, 250 + width, 350);
  ctx.lineWidth = 2 // 线的宽度
  ctx.strokeStyle = grd5 // 线的颜色
  ctx.stroke()
}

export const nineLoutus = (ctx:any) => {
  ctx.globalAlpha = 0.9
  const [beginX, beginY] = [280 + width, 300]
  // 线的颜色：线性渐变
  const grd=ctx.createLinearGradient(-280 + width, 300, 300 + width, 300);
  grd.addColorStop(0, "rgb(221,172,222)");
  grd.addColorStop(0.3, "rgba(221,172,222, 0.6)");
  grd.addColorStop(1, "white");

  // 填充的颜色:放射状的渐变
  const grd2=ctx.createRadialGradient(-20 + width, 320, 10,0 + width, 260, 90);
  grd2.addColorStop(0, "rgba(239, 175, 234, 1)");
  grd2.addColorStop(1, "rgba(255, 255, 255, 1)");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(300 + width, 270, 100 + width, 130, -10 + width, 260);
  ctx.bezierCurveTo(-10 + width, 260, -6 + width, 276, 0 + width, 276);
  ctx.bezierCurveTo(10 + width, 270, 80 + width, 250, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  // 纹理线的颜色
  const grd3=ctx.createLinearGradient(0 + width, 260, 60 + width, 260);
  grd3.addColorStop(0, "rgb(217,179,208)");
  grd3.addColorStop(0.6, "rgba(217,179,208, 0.7)");
  grd3.addColorStop(1, "rgb(255,255,255)");


  const textureNumList: Array<number[]> = [
    [-10 + width, 260, 10 + width, 276, 10 + width, 270],
    [-10 + width, 260, 20 + width, 268, 20 + width, 270],
    [40 + width, 260, 120 + width, 258, 156 + width, 272],
    [40 + width, 250, 156 + width, 248, 176 + width, 276],
    [40 + width, 240, 166 + width, 238, 196 + width, 280],
    [40 + width, 230, 176 + width, 228, 206 + width, 282],
    [40 + width, 220, 186 + width, 218, 226 + width, 286],
    [40 + width, 210, 196 + width, 208, 246 + width, 290],
    [40 + width, 200, 216 + width, 198, 266 + width, 294],
  ]

  // 花瓣的纹理
  textureNumList.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(-10 + width, 260);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  // 线的颜色：线性渐变
  const grd4=ctx.createLinearGradient(0 + width, 276, 60 + width, 276);
  grd4.addColorStop(0, "rgb(227,192,241)");
  grd4.addColorStop(1, "white");

  // 绘制花瓣
  ctx.beginPath();
  ctx.moveTo(beginX, beginY);
  // 三次贝塞尔曲线
  ctx.bezierCurveTo(120 + width, 250, 30 + width, 256, 0 + width, 276);
  ctx.bezierCurveTo(12 + width, 276, 120 + width, 372, beginX, beginY);
  ctx.lineWidth = 1 // 线的宽度
  ctx.shadowOffsetX = 12; // 线条阴影
  ctx.shadowBlur = 2; // 线条阴影
  ctx.shadowColor = grd // 线条阴影颜色
  ctx.strokeStyle = grd // 线的颜色
  ctx.fillStyle= grd2 // 绘制花瓣的背景色 填充颜色
  ctx.fill();
  ctx.stroke()

  const textureNumList2: Array<number[]> = [
    [0 + width, 274, 90 + width, 308, 90 + width, 314],
    [0 + width, 270, 120 + width, 302, 120 + width, 320],
    [0 + width, 266, 140 + width, 290, 140 + width, 324],
    [12 + width, 260, 160 + width, 280, 160 + width, 320],
    [12 + width, 260, 180 + width, 266, 180 + width, 320]
  ]

  // 花瓣的纹理
  textureNumList2.forEach((textureNum:number[]) => {
    ctx.beginPath();
    ctx.moveTo(0 + width, 276);
    ctx.bezierCurveTo(textureNum[0], textureNum[1], textureNum[2], textureNum[3], textureNum[4], textureNum[5]);
    ctx.lineWidth = 1 // 线的宽度
    ctx.strokeStyle = grd3 // 线的颜色
    ctx.stroke()
  })

  ctx.save()
  ctx.globalAlpha = 1
}