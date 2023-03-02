import { createApp } from 'vue'
import pinia from './store'
import router from './router'
import App from './App.vue'
import '@/assets/style/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'uno.css'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(router)
app.mount('#app')
