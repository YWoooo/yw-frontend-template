<script setup lang="ts">
import { $api } from '@/apis/index'
import { Cat } from '@/types/index'

const cat = ref(new Cat())

onMounted(() => {
  getCat()
})

async function getCat() {
  try {
    cat.value = await $api.cat('595f280a557291a9750ebf62')
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  Cat <br>
  id: {{ cat.id }} <br>
  created_at: {{ cat.created_at }} <br>
  tags: {{ cat.tags }}
</template>
