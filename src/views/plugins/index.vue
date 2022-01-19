<template>
  <div class="news-plugins">
    <ContentProps />
    <SenEditor />
  </div>
</template>

<script>
import ContentProps from "./components/ContentProps.vue";
import SenEditor from "./components/SenEditor.vue";
import store from "./store";
export default {
  name: "NewsPlugins",
  components: { ContentProps, SenEditor },
  data() {
    return {
      store: store,
    };
  },
};
</script>