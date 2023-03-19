import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Particles from 'particles.vue3'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'aplayer/dist/APlayer.min.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式

import axios from "axios";
//创建v-highlight全局指令
//@ts-ignore





const app = createApp(App)

app.use(Particles)
app.use(router)  // 如果不使用vue-router可以注释掉
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$axios = axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
