<template>
    <Alert>
        Logged In!
    </Alert>
</template>
<script setup>
import useOidcLoginManager from '~/composables/useOidcLoginManager';
import { useAuthStore } from '~/stores/useAuthStore';
const { userManager, getUser }  = useOidcLoginManager();
const auth = useAuthStore();
userManager.signinCallback().then(user => {
    auth.setUser(user)
}).finally(() => {
    navigateTo('/')
});
</script>