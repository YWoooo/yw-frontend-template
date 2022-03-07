import { getCurrentInstance } from 'vue';
import { ComponentCustomProperties } from '@vue/runtime-core';

export default function useGlobalProperties () {
  const app = getCurrentInstance();

  return app!.appContext.config.globalProperties as ComponentCustomProperties;
}