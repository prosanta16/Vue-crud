import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: () =>
      import(/* webpackChunkName: "allpost" */ "@/views/AllPosts.vue"),
  },
  {
    path: "/create",
    name: "CreatePosts",
    component: () =>
      import(/* webpackChunkName: "createpost" */ "@/views/CreatePost.vue"),
  },
  {
    path: "/:id",
    name: "ViewPost",
    component: () =>
      import(/* webpackChunkName: "createpost" */ "@/views/ViewPost.vue"),

    children: [],
  },
  {
    path: "/:id/edit",
    alias: "/posts/:id/edit",
    name: "EditPost",
    component: () =>
      import(/* webpackChunkName: "createpost" */ "@/views/EditPost.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
