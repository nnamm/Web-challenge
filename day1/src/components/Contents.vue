// TODO: チェックボックスON/OFFしたときにトランジションアニメーションするようにしたい
<template>
  <b-container>
    <b-row class="py-2">
      <b-col align-self="center">
        <div class="tags-list"> 
          <ul>
            <span class="font-weight-bold mr-2">Filter by:</span>
            <li
              v-for="tag in organizedTagsList"
              :key="tag"
              class="mr-3">
              <span class="d-inline-block">
                <input
                  :id="tag"
                  v-model="checkedTagsList"
                  :value="tag"
                  type="checkbox"
                  class="mr-1">
                <label>{{ tag }}</label>
              </span>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row class="py-2">
      <b-col>
        <b-list-group>
          <b-list-group-item
            v-for="day in daysResultList"
            v-show="day.display"
            :key="day.id">
            #{{ day.id }}&nbsp;｜&nbsp;
            <a :href="day.url">{{ day.title }}</a>
            <div class="d-flex justify-content-end">
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
import { db } from '@/firebase'

export default {
  name: 'Contents',
  data: () => {
    return {
      daysResultList: [], // 日々の成果リスト
      filterTagsList: [], // フィルタリング用のタグリスト（表示用）
      checkedTagsList: [], // フィルタリング用にチェックされたタグリスト（内部処理用）
      organizedTagsList: [],
    }
  },

  watch: {
    // チェックボックスのON/OFFで発火
    // チェックされたタグを含む成果リスト内の表示・非表示フラグをTrue/Flaseに変更
    checkedTagsList: {
      handler: function(){
        let days = this.daysResultList
        let checkedTags = this.checkedTagsList
        let tempTags = []

        // チェックボックスONにしたタグが1つ以上あるとき
        if (checkedTags.length > 0) {
          for (let i = 0, j = days.length; i < j; i++) {
            tempTags = days[i].tags
            // 指定したタグが含まれる成果リスト内のフラグを変更
            for (let k = 0, l = checkedTags.length; k < l; k++) {
              if (tempTags.indexOf(checkedTags[k]) >= 0) {
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
  },

  // DOM生成直後にDBアクセス
  mounted: function() {
    const that = this
    const ref = db.collection('days')

    ref.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        // daysコレクション → 成果ドキュメント → 各フィールドを展開
        let data = {
          id: doc.data().id,
          title: doc.data().title,
          tags: this.ascSortTags(doc.data().tags),
          url: doc.data().url,
          display: doc.data().display // 表示可否フラグ
        }
        this.daysResultList.push(data)

        // 取得したタグ（配列）をフィルタリング用のタグリストに追加
        data.tags.forEach(tag => {
          that.filterTagsList.push(tag)
        })
      })
      // フィルタリング用のタグリストを昇順にソートし、重複項目を削除
      this.ascSortTags(this.filterTagsList)
      this.organizedTagsList = this.filterTagsList.filter(function(x, i, self){
        return self.indexOf(x) === i
      })
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
      let that = this
      tags.forEach(tag => {
        that.filterTagsList.push(tag)
      })
    }
  }
}
</script>

<style scoprd>
.tags-list {
  font-size: 0.9rem;

}
.tags-list > ul {
  padding-left: 0;
}
.tags-list ul, li {
  display: inline;
  margin-right: 0.75rem;
}
.margin-space {
  margin-left: 0.2rem;
}
</style>
