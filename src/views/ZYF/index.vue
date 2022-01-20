<template>
  <div class="zyf-page">
    <h1 class="title">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "ZYF",
  data() {
    return {
      msg: "在此区域完成百度首页的开发",
    };
  },
};
</script>

<style lang="scss" scoped>
.zyf-page {
  .title {
    font-size: 14px;
  }
}
</style>