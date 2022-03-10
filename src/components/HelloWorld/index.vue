<script setup lang="ts">
import useGlobalProperties from '@/utils/useGlobalProperties'
import { Cat } from '@/types/index'
defineProps<{ msg: string }>()

const cat = ref(new Cat())
const { $api } = useGlobalProperties()

onMounted(async () => {
  cat.value = await $api.cat('595f280a557291a9750ebf62')
})
</script>

<template>
  {{ cat }}
</template>
