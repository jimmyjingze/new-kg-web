import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news_id: 1,
    contents: [
      {
        id: 1,
        text: "zhong guo "
      },
      {
        id: 2,
        text: " is country."
      }
    ],

    newsDetail: {
      title: "news_detail",
      content: "news_content."
    },

    editor_sens_id: 1,

    ner_res: [
      {
        start: 0,
        end: 5,
        entity_id: -1,
        entity_text: "zhong"
      }
    ]
  },

  getters: {
    getNewsId: (state) => {
      return state.news_id;
    },
    getContents: (state) => {
      return state.contents;
    },
    getNewsDetail: (state) => {
      return state.newsDetail;
    }
  },

  mutations: {
    changeNewsId(state, news_id) {
      state.news_id = news_id;
    },

    changeContent(state, payload) {
      Vue.set(state.contents, 0, { id: payload.id, text: payload.text });
    }
  },

  actions: {
    // 方式1和方式2 完成的功能是一样的，可以参考 “https://vuex.vuejs.org/zh/guide/actions.html#%E5%88%86%E5%8F%91-action” 解构赋值
    // 方式1
    async handlerGetData({ commit, state }, payload) {
      setTimeout(() => {
        commit("changeNewsId", payload);
      }, 1000);
    },

    // 方式2
    async handlerGetData2(context, payload) {
      setTimeout(() => {
        context.commit("changeNewsId", payload);
      }, 1000);
    }
  },
  modules: {}
});
