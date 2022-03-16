<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld/index.vue'
import useMainStore from "./stores/main.store";

const store = useMainStore();
</script>

<template>
  <div class="p-4">
    <HelloWorld /> <br>
    counter: {{ store.counter }}
  </div>
</template>
