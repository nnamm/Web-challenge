// p5.jsのパーリンノイズを使う（ES6版）
//
// Original source => https://ics.media/entry/18812/
// Reference => https://nnamm.com/blog/3669

import P5 from 'p5'

const sketch = p => {
  let stageW = innerWidth
  let stageH = innerHeight
  const LINE_NUM = 80 // ラインの数
  const SEGMENT_NUM = 100 // 曲線の分割数
  // const AMPLITUBE = stageH / 2 // 振幅

  p.setup = () => {
    p.createCanvas(stageW, stageH)
    p.colorMode(p.HSB)
    p.strokeWeight(1)
  }

  p.draw = () => {
    p.background(0, 0, 0)
    p.noFill()
    drawCurve()
  }

  function drawCurve() {
    ;[...Array(LINE_NUM).keys()].forEach(j => {
      const time = Date.now() / 8000 // 擬似アニメーション用の媒介変数
      const coefficient = 50 + j // 係数
      // ラインのカラー設定
      const h = p.round((j / LINE_NUM) * 360) // 色相
      const s = 100 // 彩度
      const l = p.round((j / LINE_NUM) * 100) // 明度
      p.beginShape()
      p.stroke(h, s, l)
      ;[...Array(SEGMENT_NUM).keys()].forEach(i => {
        // X座標の設定
        const x = (i / (SEGMENT_NUM - 1)) * stageW
        // Y座標の設定
        const px = i / coefficient // 横軸の入力値
        const py = j / 100 + time // 時間の入力値
        const y = p.noise(px, py) * stageH
        // const y = AMPLITUBE * p.noise(px, py) + stageH / 3
        p.vertex(x, y)
      })
      p.endShape()
    })
  }

  // マウスを押している間は処理を止める
  p.mousePressed = () => {
    p.noLoop()
  }

  p.mouseReleased = () => {
    p.loop()
  }
}

new P5(sketch)
