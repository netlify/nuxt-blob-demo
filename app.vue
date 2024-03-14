<script setup lang="ts">
  const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>
    Response from API {{ data }}
  </div>
</template>
