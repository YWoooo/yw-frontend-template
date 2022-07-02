import App from './App.vue'
import { createPinia } from 'pinia'
import api from './apis/index'
import 'virtual:windi.css'

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

createApp(App).use(createPinia()).use(api).mount('#app')
