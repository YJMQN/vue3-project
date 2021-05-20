import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import cookie from "../utils/cookie"

import childRoutes from './children'
import errorRoute from './errorItem'


const mainRoute: Array<RouteRecordRaw> = [
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

let routes: Array<RouteRecordRaw> = mainRoute.concat(errorRoute)

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) => { 
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
