<template>
  <div class="zyf-page">
    <h1 class="title">{{msg}}</h1>
    <div class="header">
      <div class="h-left">
        <a href="#">新闻</a>
        <a href="#">hao123</a>
        <a href="#">地图</a>
        <a href="#">贴吧</a>
        <a href="#">视频</a>
        <a href="#">图片</a>
        <a href="#">网盘</a>
        <a href="#">更多</a>
      </div>
      <div class="h-right"> 
          <a href="#">设置</a>
          <a id="loginbtn" href="#">登录</a>
      </div>
    </div>
    <div class="main">
      <a href="#">
        <img class="logo" src="http://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="百度一下，你就知道" title="点击一下，了解更多">
      </a>
      <div class="search-box">
        <input id="keyword" type="text" name="keyword" v-model="t1">
        <button id="searchbtn" @click="handleClick">百度一下</button>
      </div>
      <div class="news-list">
        <p>
          <a class="t-left">百度热搜</a>
          <a class="t-right">换一换</a>
        </p>
        <p class="clear"></p>
        <div>
        <div class="news-box news-left">
          <a href="#"><span class="news-one">1</span> 讲好冬奥故事 共赴冰雪之约</a>
          <a href="#"><span class="news-two">2</span> 安伟任郑州市委书记 徐立毅被免</a>
          <a href="#"><span class="news-three">3</span> 让正史成为全党全社会的共识</a>
        </div>
        <div class="news-box news-right">
          <a href="#">4 北京新增7例本土确诊5例无症状</a>
          <a href="#">5 打工寻子当事人称未见儿子DNA报告</a>
          <a href="#">6 郑州特大暴雨灾害:逮捕8人问责89人</a>
        </div>
      </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "ZYF",
  data() {
    return {
      msg: "在此区域完成百度首页的开发",
      t1: '',
    };
  },
  methods: { 
    handleClick() {
      window.open('http://www.baidu.com/s?wd=' + this.t1)
      this.t1 = ''
    },
  }
};
</script>

<style lang="scss" scoped>
.zyf-page {
  .title {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    color:black;
  }
  a:hover {
    color: blue;
  }
  .header{
    height: 50px;
    line-height: 50px;
  }
  .header .h-left {
    float: left;
  }
  .header .h-left a {
    margin-left: 30px;
    font-size: 14px;
  }
  .header .h-right {
    display: inline;
    float: right;
    font-size: 14px;
    padding: 2px 7px;
  }
  .header .h-right a {
    margin-right: 20px;
  }
  .header .h-right #loginbtn {
    background-color: dodgerblue;
    color: floralwhite;
  }
  .main {
    width: 580px;
    height: auto;
    overflow: hidden;
    margin: 80px auto;
    text-align: center;    
  }
  .main .logo {
    width: 270px;
  }
  .main .search-box {
    position: relative;
    width: 100%;
    height: 46px;
    overflow: hidden;
  }
  .main .search-box #keyword {
    width: 400px;
    height: 40px;
    padding-left: 20px;
    border: 2px solid gainsboro;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    outline: none;
  }
  .main .search-box #keyword:focus{
    border: 2px solid blue;
  }
  .main .search-box #searchbtn {
    left: -5px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    background: 0 0;
    background-color: #4e6ef2;
    color: white;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .main .search-box #searchbtn:hover {
    background-color: blue;
  }
  .clear {
    clear: both;
    height: 0;
    font-size: 0;
  }
  .main .news-list {
    margin-top: 50px;
    font-size: 12px;    
  }
  .main .news-list .t-left{
    float: left;
  }
  .main .news-list .t-right{
    float: right;
  }
  .main .news-list .news-left{
    float: left;
  }
  .main .news-list .news-right{
    float: right;
  }
  .main .news-list .news-box{
    width: 240px;
    height: auto;
    overflow: hidden;
    text-align: left;
  }
  .main .news-list .news-box a{
    display: block;
    margin:10px 0;
  }
  .main .news-list .news-box .news-one {
    color: red;
  }
  .main .news-list .news-box .news-two {
    color:orange;
  }
  .main .news-list .news-box .news-three {
    color: yellow;
  }
}
</style>