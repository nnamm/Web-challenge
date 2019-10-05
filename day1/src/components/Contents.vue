<template>
  <b-container>
    <b-row class="py-2">
      <b-col align-self="center">
        <div class="categoly-list">
          <p>※Filter still does not work.</p>
          <p>{{ filteredTagsList }}</p>
          <ul>
            <li
              v-for="(tag, id) in filterTagsList"
              :key="id">
              <input
                v-model="filteredTagsList"
                type="checkbox"
                :value="tag"
                @click="displayFilteredDays">
              <label>&nbsp;{{ tag }}</label>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row class="py-2">
      <b-col>
        <b-list-group>
          <b-list-group-item
            v-for="day in daysList"
            v-show="day.display"
            :key="day.id">
            #{{ day.id }}&nbsp;｜&nbsp;
            <a :href="day.url">{{ day.title }}</a>
            <div class="margin-right">
              <b-badge
                v-for="(tag, id) in day.tags"
                :key="id"
                class="margin-space"
                pill
                variant="success">
                {{ tag }}
              </b-badge>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import db from '@/firebase.js'

export default {
  data() {
    return {
      daysList: [], // 成果リスト
      filterTagsList: [], // フィルタリング用のタグリスト（表示用）
      filteredTagsList: [] // フィルタリング用のタグリスト（処理用）
    }
  },
  // DOM生成直後にDBアクセス
  mounted: function() {
    db.collection('days')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // daysコレクション → 成果ドキュメント → 各フィールドを展開
          let data = {
            id: doc.data().id,
            title: doc.data().title,
            tags: this.ascSortTags(doc.data().tags),
            url: doc.data().url,
            display: doc.data().display // 表示可否フラグ
          }
          this.daysList.push(data)
          this.setFilterTagsList(data.tags)
        })
        // フィルタリング用のタグリストを昇順にソート
        this.ascSortTags(this.filterTagsList)
      })
  },
  methods: {
    // タグを昇順にソート
    ascSortTags(tags) {
      let sortedTags = tags.sort((a, b) => {
        // 大文字と小文字を考慮
        a = a.toString().toLowerCase()
        b = b.toString().toLowerCase()
        return a < b ? -1 : 1
      })
      return sortedTags
    },
    // 取得したタグ（配列）をフィルタリング用のタグリストに追加
    setFilterTagsList(tags) {
      let _this = this
      tags.forEach(val => {
        _this.filterTagsList.push(val)
      })
    },
    // 発火
    displayFilteredDays() {
      let days = this.daysList
      // TODO: なぜか2回目のクリックで1回目のクリック情報が活きている
      let filteredTags = this.filteredTagsList
      let tags = []

      console.log(filteredTags)

      if (filteredTags.length > 0) {
        for (let i = 0, j = days.length; i < j; i++) {
          tags = days[i].tags
          for (let k = 0, l = filteredTags.length; k < l; k++) {
            if (tags.indexOf(filteredTags[k]) >= 0) {
              days[i].display = true
              break
            } else {
              days[i].display = false
            }
          }
        }
      } else {
        for (let i = 0, j = days.length; i < j; i++) {
          days[i].display = true
        }
      }
    }
  }
}
</script>

<style scoprd>
.margin-right {
  float: right;
}
.margin-space {
  margin-left: 0.2rem;
}
.categoly-list {
  font-size: 0.9rem;
}
.categoly-list ul {
  padding-left: 0;
}
.categoly-list ul,
li {
  display: inline;
  margin-right: 0.75rem;
}
</style>
