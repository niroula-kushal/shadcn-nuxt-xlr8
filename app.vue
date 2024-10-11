<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { client } from './src/client';
const config = useRuntimeConfig();
client.setConfig({
  baseURL: config.app.apiURL
});
client.instance.interceptors.request.use(req => {  
  const { user } = useAuth();
  if(user.value != null) {
    req.headers["Authorization"] = "Bearer " + user.value.access_token;
  }
  return req;
});
</script>