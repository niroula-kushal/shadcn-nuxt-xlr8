import type { User } from 'oidc-client-ts';
import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>();
   
    function setUser(newUser: User | null) {
        user.value = newUser;
    }

    function getUser() {
        return user.value;
    }

    return {
        user,
        getUser,
        setUser
    };
}, {
    persist: true
});