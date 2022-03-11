import axios from 'axios'
import catApi from './cat.api'
import { App } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof $api
  }
}

export const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_UCAPI,
  headers: {
    common: {
      Accept: 'text/plain, */*'
    }
  }
})
const $api = {
  ...catApi
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = $api
  }
}
