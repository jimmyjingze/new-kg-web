<template>
  <div>
    {{newsId}}

    <div>
      <p v-for="content in contents"
         :key="content.id">{{content.text}}</p>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  computed: {
    newsId: function () {
      return store.getters.getNewsId;
    },
    contents: function () {
      // this.getData();
      return store.getters.getContents;
    },
  },
  methods: {
    getData() {
      console.log(this.contents);
    },
  },
};
</script>