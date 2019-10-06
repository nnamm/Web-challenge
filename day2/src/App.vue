<template>
  <div
    id="app"
    class="image">
    <vue-particles
      :color="hexRGB.color"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="circle"
      :particle-size="10"
      :lines-color="hexRGB.color"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.5"
      :lines-distance="240"
      :move-speed="8"
      :hover-effect="true"
      hover-mode="grad"
      :click-effect="true"
      click-mode="push" />
    <!-- <input
      type="button"
      value="Change color"
      @click="changeColor"> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      hexRGB: { color: '#dedede' }
    }
  },
// 「Change color」ボタンを押下するたびにカラーを変更しようとしたが、
// hexRGBはリアクティブデータとして認識されているものの、
// 本ファイルでオブジェクトを変更するだけでは、
// そのデータ反映をvue-particlesの内部（？）にまで届かせることはできないっぽい？
// nextTickのようなアニメ処理中にデータ変更を割り込ませる必要があるのかもしれない。
//   methods: {
//     changeColor(){
//       let randomRGB = ['', '', '']
//       for (let i = 0; i < 3; i++) {
//         let tmpNumber = Math.floor(Math.random() * 256)
//         randomRGB[i] = tmpNumber.toString(16).padStart(2, '0')
//       }
//       this.hexRGB.color = '#' + randomRGB.join('')
//     }
//   }
}
</script>

<style scoped>
.image {
  background-image: url("./assets/images/bk.jpg");
  background-size: cover;
}
</style>