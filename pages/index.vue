<script setup lang="ts">
const route = useRoute()
const {get} = useApi()

onMounted(async ()=>{
  const result = await get("/api")
  console.log(result)
})
</script>

<template>
  <div>
    <h1 class="bg-green-500">Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
