import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "Login",
    hidden:true
  },
  {
    path:'/home',
    name:'baseHome',
    component:()=>import("../views/layout/Index.vue"),
    hidden:true,
    meta:{
      title:'控制台'
    }
  },
  {
    path:'/renderentry',
    name:'renderentry',
    component:()=>import("../views/layout/Index.vue"),
    // redirect:'/renderentry/entry',
    // hidden:false,
    children:[
      {
        path:'/entry',
        name:'entry',
        // hidden:false,
        component:()=>import('../views/entry/Index.vue'),
        meta:{
          title:'添加词条列表'
        }
      }
    ],
    meta:{
      title:'预算词条',
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
        component:()=>import('../views/Excel/Index.vue'),
        meta:{
          title:'生成预算'
        }
      }
    ],
    meta:{
      title:'预算',
    }
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/login.vue"),
    hidden:true,
    meta:{
      title:'登录',

    }
  },
{
  path:'/user',
  name:'User',
  meta:{
    title:'用户管理'
  },
  component:()=>import("../views/layout/Index.vue"),
  children:[
    {
      path:'/UserIndex',
      name:'UserIndex',
      meta:{
        title:'用户列表'
      },
      component:()=>import("../views/user/Index.vue")
    }
  ]
}


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
