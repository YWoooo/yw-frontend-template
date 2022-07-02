<script setup lang="ts">
import useMainStore from "./stores/main.store";

const store = useMainStore();
</script>

<template>
  <div class="p-4">
    <HelloWorld /> <br>
    counter: {{ store.counter }}
  </div>
</template>
