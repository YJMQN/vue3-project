//权限代表
const allUser = 0;
const superUser = 1;
const generalUser = 2;

const childRoutes = [
	{
		path: "/index",
		name: "dashboard",
		component: () => import("../views/Home/default/index.vue"),
		meta: {
            title: "首页",
            code: allUser,
            auth: true
        },
	},
    {
		path: "/banner",
		name: "banner",
		component: () => import("../views/Component/banner/index.vue"),
		meta: {
            title: "轮播图管理",
            code: superUser,
            auth: true
        },
	},
    {
		path: "/news",
		name: "news",
		component: () => import("../views/Component/news/index.vue"),
		meta: {
            title: "新闻管理",
            code: superUser,
            auth: true
        },
	},
    {
		path: "/contact",
		name: "contact",
		component: () => import("../views/Component/contact/index.vue"),
		meta: {
            title: "用户反馈管理",
            code: generalUser,
            auth: true
        },
	},
]

export default childRoutes