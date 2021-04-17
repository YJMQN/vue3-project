import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import cookie from "../utils/cookie"

export const childRoutes = [
	{
		path: "/index",
		name: "首页",
		component: () => import("../views/Home/default/index.vue"),
		meta: {
      title: "首页",
      auth: true
    },
	},
  {
		path: "/banner",
		name: "轮播图管理",
		component: () => import("../views/Component/banner/index.vue"),
		meta: {
      title: "轮播图管理",
      auth: true
    },
	},
  {
		path: "/news",
		name: "新闻管理",
		component: () => import("../views/Component/news/index.vue"),
		meta: {
      title: "新闻管理",
      auth: true
    },
	},
  {
		path: "/contact",
		name: "用户反馈管理",
		component: () => import("../views/Component/contact/index.vue"),
		meta: {
      title: "用户反馈管理",
      auth: true
    },
	},
]

const routes: Array<RouteRecordRaw> = [
  {
		path: '/',
		component: () => import("../views/Home/index.vue"),
    meta: {
      title: "",
      auth: true
    },
		children: childRoutes
	},
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Home/login/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      title: "注册",
    },
    component: () => import("../views/Home/register/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach(
  (to, from, next) => { 
  if (to.matched.some(record => record.meta.auth)){
    let token:string =cookie.get('token')
    if (!token) {
      next({path: '/login'});
    } else { 
      next(); 
    } 
  } else{ 
    next(); 
  }
});
export default router;
