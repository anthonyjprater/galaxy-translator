import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
import Translator from "../views/Translator.vue";
import Philology from "../views/Philology.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/gallery",
      name: "gallery",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Gallery.vue"),
    },
    {
      path: "/translator",
      name: "translator",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Translator.vue"),
    },
    {
      path: "/philology",
      name: "philology",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Philology.vue"),
    },
  ],
});

export default router;
