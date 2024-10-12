<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { client } from './src/client';
import { useAuthStore } from './stores/useAuthStore';
const config = useRuntimeConfig();
client.setConfig({
  baseURL: config.app.apiURL
});
client.instance.interceptors.request.use(req => {  
  const authStore = useAuthStore();
  if(authStore.user != null) {
    req.headers["Authorization"] = "Bearer " + authStore.user.access_token;
  }
  return req;
});
</script>