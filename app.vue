<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { client } from './src/client';
const config = useRuntimeConfig();
client.setConfig({
  // baseURL: config.app.apiURL,
  baseURL: config.app.apiURL
});
</script>