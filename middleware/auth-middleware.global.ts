export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    console.log("Should Login", !to.meta.allowAnonymous && !authStore.isLoggedIn);
    if(!to.meta.allowAnonymous && !authStore.isLoggedIn) {
        return navigateTo('/auth/signin');
    }
  })