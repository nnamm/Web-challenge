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
    <!-- ユーザ表示部分  -->
    <b-row align-h="center">
      <b-col
        class="mt-3 px-5"
        md="6">
        <p class="login-text">
          Log-in user: {{ user.email }}
          <b-button
            class="logout-btn"
            pill
            variant="warning"
            size="sm"
            @click="logOut">
            Log-out
          </b-button>
        </p>
      </b-col>
    </b-row>
    <!-- 入力部分  -->
    <b-row align-h="center">
      <b-col
        class="mt-3 px-5 py-3"
        md="6">
        <b-form-group
          label-cols-md="3"
          label="ID">
          <b-form-input
            v-model="innerId"
            type="number" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="Title">
          <b-form-input
            v-model="innerTitle"
            type="text" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="Tags">
          <b-form-input
            v-model="innerTags"
            type="text" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="url">
          <b-form-input
            v-model="innerUrl"
            type="text" />
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
          value="Add"
          @click="addContent">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { auth } from '@/firebase.js'
import { db } from '@/firebase.js'

export default {
  name: 'Add',
  data: () => ({
    innerId: '',
    innerTitle: '',
    innerTags: '',
    innerUrl: '',
  }),
  created: function() {
    this.user = auth.currentUser
  },
  methods: {
    addContent: function(){
      const docName = 'day' + this.innerId
      const result = confirm('Add or Update a "' + docName + '" realy OK?')
      if (result) {
        const docContent = {
          id: Number(this.innerId),
          title: this.innerTitle,
          tags: this.innerTags.split(','),
          url: this.innerUrl,
          display: true
        }
        db.collection('days').doc(docName).set(docContent, {merge: true})
        .then(() => {
          alert('Addition complete')
        })
        .catch((err) => {
          console.error('Error writing document: ', err)
        })
      }
    },
    logOut: function(){
      auth.signOut().then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style scorped>
.login-text {
  font-weight: bold;
}
.logout-btn {
  margin-left: 1rem;
}
.button-center {
  text-align: center;
}
</style>