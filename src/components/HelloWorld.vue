<template>
  <div class="hello">
    <button @click="handlerToggleCrossWord">{{isCrossWord ? "关闭选词" : "开启选词"}}</button>
    <h1>{{ msg }}</h1>
    <p>
      在开发人员世界中，即使用户没有明确单击页面上提供的 HTML 按钮来处理这种情况，我们也会经常听Enter键以确保执行相应的操作。 在使用 Vue 监听键事件时，我们可以使用通常的v-on指令来提及所需的键修饰符，如下所示：
      Index.html（代码段） 每当用户释放按键或按键上升时，页面就会触发keyup事件。 在这种情况下，我们要监听Enter键，而不仅仅是其他键。
    </p>
    <h3>Installed CLI Plugins</h3>

    <h3>Essential Links</h3>

    <h3>Ecosystem</h3>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isCrossWord: false,
    };
  },
  mounted() {},

  methods: {
    handlerToggleCrossWord() {
      if (this.isCrossWord) {
        this.isCrossWord = false;
        window.removeEventListener("mouseup", this.handlerMouseup);
      } else {
        this.isCrossWord = true;
        window.addEventListener("mouseup", this.handlerMouseup);
      }
    },
    handlerMouseup(e) {
      console.log(e);
      console.log(e.target.innerText);

      let textAll = e.target.innerText;
      let textSelected = window.getSelection().toString();

      let startIndex = textAll.indexOf(textSelected);
      let endIndex = startIndex + textSelected.length;

      console.log(startIndex, endIndex);
      console.log(textSelected);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
