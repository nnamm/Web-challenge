<template>
  <b-container>
    <b-row class="py-2">
      <b-col align-self="center">
        <div class="categoly-list">
          <p>※Filter still does not work.</p>
          <ul>
            <li v-for="(tag, id) in tags_list" :key="id">
              <input type="checkbox" />
              <label>&nbsp;{{ tag }}</label>
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
    <b-row class="py-2">
      <b-col align-self="center">
        <b-list-group>
          <b-list-group-item v-for="day in days_list" :key="day.id">
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
      days_list: [],
      tags_list: []
    };
  },
  created: function() {
    db.collection("days")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = {
            id: doc.data().id,
            title: doc.data().title,
            tags: this.sortTags(doc.data().tags),
            url: doc.data().url
          };
          this.days_list.push(data);
        });
      });
  },
  methods: {
    sortTags(tags) {
      let sortedTags = tags.sort((a, b) => {
        return b - a;
      });

      let _this = this;
      sortedTags.forEach(function(val) {
        _this.tags_list.push(val);
      });

      return sortedTags;
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
.categoly-list ul,
li {
  display: inline;
  margin-right: 1rem;
}
</style>
