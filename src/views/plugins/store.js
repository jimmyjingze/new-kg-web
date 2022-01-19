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
  mutations: {
    changeNewsId(state, news_id) {
      state.news_id = news_id;
    },
    changeContent(state, payload) {
      Vue.set(state.contents, 0, { id: payload.id, text: payload.text });
      // state.contents.map((item) => {
      //   if (item.id === payload.id) {
      //     item.text = payload.text;
      //     return item;
      //   }
      // });
    }
  },
  getters: {
    getNewsId: (state) => {
      return state.news_id;
    },
    getContents: (state) => {
      return state.contents;
    }
  },
  actions: {},
  modules: {}
});
