import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "Login",
  },
  {
    path:'/home',
    name:'baseHome',
    component:()=>import('../views/layout/Index.vue')
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/login.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
