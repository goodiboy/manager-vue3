import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import axios from './utils/http'
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(router).use(ElementPlus).mount('#app')
