<template>
  <b-container id="app">
    <b-card
      border-variant="info"
      header="Hash1"
      header-bg-variant="info"
      header-text-variant="white"
      header-class="card-header-style">
      <b-form-input
        v-model="hashObj1.inputText"
        placeholder="Enter the letters."
        class="mt-3" />
      <b-form-input
        v-model="hashObj1.times"
        type="number"
        min="1"
        max="maxTimes"
        class="mt-3" />
      <div class="mt-3">
        <span class="hash-style">[Hash value1]: {{ hashObj1.hashedText }}</span>
      </div>
    </b-card>
    <div class="match-area">
      <i
        v-if="matchFlag"
        class="fas fa-equals fa-3x font-awesome-style" />
      <i
        v-else
        class="fas fa-not-equal fa-3x font-awesome-style" />
    </div>
    <b-card
      border-variant="info"
      header="Hash2"
      header-bg-variant="info"
      header-text-variant="white"
      header-class="card-header-style">
      <b-form-input
        v-model="hashObj2.inputText"
        placeholder="Enter the letters."
        class="mt-3" />
      <b-form-input
        v-model="hashObj2.times"
        type="number"
        min="1"
        max="maxTimes"
        class="mt-3" />
      <div class="mt-3">
        <span class="hash-style">[Hash value2]: {{ hashObj2.hashedText }}</span>
      </div>
    </b-card>
  </b-container>
</template>

<script>
import xxhash from 'xxhash-wasm'

const MAX_TIMES = 1000
const ALERT_TEXT = '繰返回数は最大1000回まででっせ'

export default {
  data() {
    return {
      hashObj1: {
        inputText: '',
        hashedText: '',
        times: 1,
      },
      hashObj2: {
        inputText: '',
        hashedText: '',
        times: 1,
      },
      matchFlag: false,
      maxTimes: MAX_TIMES
    }
  },
  watch: {
    'hashObj1.inputText': function() {
      this.calcHash1()
    },
    'hashObj2.inputText': function() {
      this.calcHash2()
    },
    'hashObj1.times': function() {
      if (this.hashObj1.times > MAX_TIMES) {
        window.alert(ALERT_TEXT)
        return
      }
      this.calcHash1()
    },
    'hashObj2.times': function() {
      if (this.hashObj2.times > MAX_TIMES) {
        window.alert(ALERT_TEXT)
        return
      }
      this.calcHash2()
    },
    'hashObj1.hashedText': function() {
      this.compareHash()
    },
    'hashObj2.hashedText': function() {
      this.compareHash()
    }
  },
  methods: {
    calcHash1() {
      // Hash1が入力されているときのみハッシュ値を算出する
      if (this.hashObj1.inputText.length > 0) {
        this.hashObj1.hashedText = 
          this.getHash64('1', this.hashObj1.inputText, this.hashObj1.times)
      } else {
        // 入力されていない場合はクリア
        this.hashObj1.hashedText = ''
      }
    },
    calcHash2() {
      // Hash2が入力されているときのみハッシュ値を算出する
      if (this.hashObj2.inputText.length > 0) {
        this.hashObj2.hashedText = 
          this.getHash64('2', this.hashObj2.inputText, this.hashObj2.times)
      } else {
        // 入力されていない場合はクリア
        this.hashObj2.hashedText = ''
      }
    },
    // 指定した回数分、ハッシュ値を繰り返し算出する
    getHash64(targetObj, input, times) {
      // 繰り返し算出するために入力テキストをコピーする
      let hashText = input
      let vm = this
      // 自身を指定回数分、ハッシュ値へ変換する
      xxhash().then(hasher => {
        for (let i=0; i<times; i++) {
          hashText = hasher.h64(hashText)
        }
        // ターゲットオブジェクトのhashedTextを更新する
        if (targetObj == '1') {
          vm.hashObj1.hashedText = hashText
        } else {
          vm.hashObj2.hashedText = hashText
        }
      })
    },
    compareHash() {
       // ＝と≠の表示切替フラグを設定する
      if (this.hashObj1.hashedText == this.hashObj2.hashedText) {
        this.matchFlag = true
      } else {
        this.matchFlag = false
      }
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,700&display=swap");
@import url("https://use.fontawesome.com/releases/v5.3.1/css/all.css");
#app {
  font-family: "Noto Sans JP", "Font Awesome 5 Free", "Font Awesome 5 Brands", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #404040;
  margin-top: 1rem;
}
.card-header-style {
  font-size: 1.5rem;
  font-weight: bold;
}
.hash-style {
  color: #00F;
  font-weight: bold;
}
.match-area {
  margin: 2rem 0 2rem 0;
  display: flex;
  justify-content: center;
}
.font-awesome-style {
  color: #fe9cab;
  transform: rotate(90deg);
}
</style>