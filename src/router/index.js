import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/plugins",
    name: "Plugins",
    component: () => import("@/views/plugins/index.vue")
  },
  {
    path: "/cloud-music",
    name: "CloudMusic",
    component: () => import("@/views/netease-cloud-music/index.vue")
  },
  {
    path: "/antvx6",
    name: "AntvX6",
    component: () => import("@/views/antvx6/index.vue")
  },
  {
    path: "/zyf",
    name: "ZYF",
    component: () => import("@/views/ZYF/index.vue")
  },
  {
    path: "/ljz",
    name: "LJZ",
    component: () => import("@/views/LJZ/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
