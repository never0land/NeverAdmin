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
    component:()=>import("../views/layout/Index.vue"),
    meta:{
      title:'控制台',
      hiden:false
    }
  },
  {
    path:'/renderExcel',
    name:'Excel',
    component:()=>import("../views/layout/Index.vue"),
    hidden:false,
    children:[
      {
        path:'/excel',
        name:'ex',
        hidden:false,
        component:()=>import('../views/Excel/Index.vue')
      }
    ],
    meta:{
      title:'生成预算',
      // hiden:false
    }
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/login.vue"),
    meta:{
      title:'登录',
      hiden:true
    }
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
