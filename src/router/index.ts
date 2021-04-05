import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import cookie from "../utils/cookie"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      // keepAlive: true,
      auth: true
    },
    component: () => import("../views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../views/Home/Login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
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
