<template>
  <div>
    <div id="playlist">
      <button @click="getListHot">热门歌单分类</button>
    </div>
    <div id="search">
      <input @input="handlerInput" v-model="keywords"
             type="text" />
      <button @click="handlerKeywords" >搜索</button>
      <button @click="handlerMultimatch" >多重搜索</button>
    </div>
  </div>
</template>

<script>
import { playList , playListHot } from "@/api/neteaseCloudMusicApi";
import { keySearch , keyDefault , hotList , hotListDetail , keySearchSuggest , searchMultimatch} from "@/api/neteaseCloudMusicApi";

export default {
  data() {
    return {
      keywords: "",
    };
  },

  mounted() {
    playList().then((res) => {
        console.log(res);
    });

    keyDefault().then((res) => {
        console.log(res);
    });

    hotList().then((res) => {
        console.log(res);
    });

    hotListDetail().then((res) => {
        console.log(res);
    });
    
  },

  methods: {
    getListHot() {
      playListHot().then((res) => {
        console.log(res);
      });
    },

    handlerKeywords(){
      let words = {
        keywords: this.keywords,
      };
      keySearch(words).then((res) => {
        console.log(res);
       });
    },

    handlerMultimatch(){
      let words = {
        keywords: this.keywords,
      };
      searchMultimatch(words).then((res) => {
        console.log(res);
       });
    },

    handlerInput(){
      let words = {
        keywords: this.keywords,
      };
      keySearchSuggest(words).then((res) => {
        console.log(res);
       });
    }
  },
}

</script>