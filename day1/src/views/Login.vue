<template>
  <b-container>
    <!-- ロゴ部分  -->
    <b-row align-h="center">
      <b-col
        class="mt-3 p-3"
        md="6">
        <img
          src="../../public/static/100wc.png"
          width="100%">
      </b-col>
    </b-row>
    <!-- 入力部分  -->
    <b-row align-h="center">
      <b-col
        class="mt-3 px-5 py-3"
        md="6">
        <b-form-group
          label-cols-md="3"
          label="Email">
          <b-form-input
            v-model="email"
            type="email"
            placeholder="Email address" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="Password">
          <b-form-input
            v-model="password"
            type="password"
            placeholder="Password" />
        </b-form-group>
      </b-col>
    </b-row>
    <!-- ボタン部分 -->
    <b-row align-h="center">
      <b-col
        class="mt-3 px-5 py-3 button-center"
        md="6">
        <input
          type="button"
          value="Login"
          @click="logIn">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { auth } from '@/firebase'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn: function(){
      auth.signInWithEmailAndPassword(this.email, this.password)
      .then(
        user => {
          alert('Log-in success: ' + user.user.email)
          this.$router.push('/add')
        },
        err => {
          alert(err.message)
        }
      )
  }
  }
}
</script>

<style scorped>
.button-center {
  text-align: center;
}
</style>