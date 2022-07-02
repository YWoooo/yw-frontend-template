import catApi from './cat.api'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof $api
  }
}

export const axiosInstance = axios.create()
export const $api = {
  ...catApi
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = $api
  }
}
