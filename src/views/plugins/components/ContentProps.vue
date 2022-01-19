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
      console.log(store.getters.getNewsId);
      return store.getters.getNewsId;
    },
    contents: function () {
      let contents = store.getters.getContents;

      console.log(contents);

      return contents;
    },
  },
  methods: {
    getData() {
      console.log(this.contents);
    },
  },
};
</script>