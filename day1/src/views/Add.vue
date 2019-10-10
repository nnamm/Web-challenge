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
        <p>Login user: {{ user.email }}</p>
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
            v-model="id"
            type="number" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="Title">
          <b-form-input
            v-model="title"
            type="text" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="Tags">
          <b-form-input
            v-model="tags"
            type="text" />
        </b-form-group>
        <b-form-group
          label-cols-md="3"
          label="url">
          <b-form-input
            v-model="url"
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

// TODO: daysにpushするロジックを作る
// doc → id, title、tags, url, display=true
// tagsは「,」区切りで追加する
// それを分割してオブジェクトに追加するロジックを組む
// ↓objはこんな感じ
// {
//   id: id,
//   title: title,
//   tags: [],
//   url: url,
//   display: true
// }

<script>
import { auth } from '@/firebase.js'
import { db } from '@/firebase.js'

export default {
  name: 'Add',
  data() {
    return {
      id: '',
      title: '',
      tags: '',
      tagsArray: [],
      url: '',
    }
  },
  created: function() {
    this.user = auth.currentUser
  },
  methods: {
    addContent: function(){
      const me = this
      const doc = {
        id: this.id,
        title: this.title,
        tags: this.tagsArray,
        url: this.url,
        display: true
      }
      // TODO: ドキュメント名の指定方法は？
      // TODO: meはundefinedになる
      db.collection('days').add(doc)
      .then((docref)=>{
        me.days.push(doc)
        console.log(docref)
      })
    }
  }
}
</script>

<style scorped>
.button-center {
  text-align: center;
}
</style>