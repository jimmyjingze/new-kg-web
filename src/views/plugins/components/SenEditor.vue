<template>
  <div>
    <input type="text"
           v-model="searchContent"
           @keyup.enter="handlerChangeNewsId" />

    <button class="btn"
            @click="handlerChangeContent">修改Content</button>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      searchContent: "",
    };
  },

  methods: {
    handlerChangeNewsId() {
      store.commit("changeNewsId", this.searchContent);
    },

    handlerChangeContent() {
      let payload = {
        id: 1,
        text: Math.random().toString(),
      };
      store.commit("changeContent", payload);

      store.dispatch("handlerGetData2", 99);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  z-index: 10;
}
</style>