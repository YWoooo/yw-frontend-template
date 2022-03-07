import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import api from './apis/index'

if (import.meta.env.DEV) {
  const { worker } = await(async () => await import('./mocks/browser'))()
  worker.start()
}

createApp(App).use(createPinia()).use(api).mount('#app')
