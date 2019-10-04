<template>
  <b-container>
    <b-row class="py-2">
      <b-col align-self="center">
        <div class="categoly-list">
          <p>※Filter still does not work.</p>
          <ul>
            <li v-for="(tag, id) in filterTagsList" :key="id">
              <input type="checkbox" />
              <label>&nbsp;{{ tag }}</label>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row class="py-2">
      <!-- <b-col align-self="center"> -->
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="day in daysList" :key="day.id">
            #{{ day.id }}&nbsp;｜&nbsp;
            <a :href="day.url">{{ day.title }}</a>
            <div class="margin-right">
              <b-badge
                class="margin-space"
                pill
                variant="success"
                v-for="(tag, id) in day.tags"
                :key="id"
              >{{ tag }}</b-badge>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import db from "@/firebase.js";

export default {
  data() {
    return {
      daysList: [], // 成果リスト
      filterTagsList: [] // フィルタリング用のタグリスト
    };
  },
  // DOM生成直後にDBアクセス
  mounted: function() {
    db.collection("days")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = {
            id: doc.data().id,
            title: doc.data().title,
            tags: this.ascSortTags(doc.data().tags),
            url: doc.data().url
          };
          this.daysList.push(data);
          this.setFilterTagsList(data.tags);
        });
        this.ascSortTags(this.filterTagsList);
      });
  },
  methods: {
    // タグを昇順にソート
    ascSortTags(tags) {
      let sortedTags = tags.sort((a, b) => {
        // 大文字と小文字を考慮
        a = a.toString().toLowerCase();
        b = b.toString().toLowerCase();
        return a < b ? -1 : 1;
      });
      return sortedTags;
    },
    // DBから取得したタグをフィルタリング用のタグリトスに追加
    setFilterTagsList(tags) {
      let _this = this;
      tags.forEach(val => {
        _this.filterTagsList.push(val);
      });
    }
  }
};
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
