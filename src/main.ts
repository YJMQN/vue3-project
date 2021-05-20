import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import i18n from './locales/index'
import Particles from "particles.vue3";
import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.use(i18n)
.use(Particles)
.mount('#app')
