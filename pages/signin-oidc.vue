<template>
    <Alert>
        Logged In!
    </Alert>
</template>
<script setup>
import useOidcLoginManager from '~/composables/useOidcLoginManager';
const { userManager, getUser }  = useOidcLoginManager();
const auth = useAuth();
userManager.signinCallback().then(user => {
    auth.setUser(user)
}).finally(() => {
    navigateTo('/')
});
</script>