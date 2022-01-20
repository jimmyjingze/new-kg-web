<template>
  <div>
    {{ newsId }}

    <p>{{ newsDetail.title }}</p>
    <p>{{ newsDetail.content }}</p>

    <div>
      <p v-for="content in contents"
         :key="content.id">{{ content.text }}</p>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed: {
    newsId: function () {
      console.log(store.getters.getNewsId);
      return store.getters.getNewsId;
    },

    contents: function () {
      return store.getters.getContents;
    },

    newsDetail: function () {
      return store.getters.getNewsDetail;
    },
  },
  methods: {
    getData() {
      console.log(this.contents);
    },
  },
};
</script>
