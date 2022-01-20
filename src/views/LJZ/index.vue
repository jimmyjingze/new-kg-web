<template>
  <div class="ljz-page">
    <h1 class="title">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "LJZ",
  data() {
    return {
      msg: "ljz",
    };
  },
};
</script>

<style lang="scss" scoped>
.ljz-page {
  .title {
    font-size: 14px;
  }
}
</style>