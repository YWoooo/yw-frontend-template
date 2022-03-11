import axios from 'axios'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof $api
  }
}

const modules = import.meta.globEager('./*.ts')
const $api = Object.keys(modules).reduce((prev, curr) => {
  return {
    ...prev,
    ...modules[curr].default
  }
}, {})
export const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_UCAPI,
  headers: {
    common: {
      Accept: 'text/plain, */*'
    }
  }
})

export default {
  // TODO: type app
  install: (app: any) => {
    app.config.globalProperties.$api = $api
  }
}
