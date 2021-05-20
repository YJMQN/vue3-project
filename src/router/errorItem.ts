import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
		path: '/404',
		component: () => import("../views/Component/error-page/401/index.vue"),
        meta: {
            hidden: true
        }
	},
]

export default routes