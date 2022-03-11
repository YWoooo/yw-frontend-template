import axios from 'axios'
import catApi from './catApi'

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
  // TODO: type app
  install: (app: any) => {
    app.config.globalProperties.$api = $api
  }
}
