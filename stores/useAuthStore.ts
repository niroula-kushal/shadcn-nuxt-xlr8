import type { ErrorResponse, User } from 'oidc-client-ts';
import { defineStore } from 'pinia';
export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>();
    const isLoggedIn = computed(() => user.value !== null);
    const oidcManager = useOidcLoginManager();

    function setUser(newUser: User | null) {
        user.value = newUser;
    }

    function getUser() {
        return user.value;
    }

    async function tryLogin({ username, password }: { username: string, password: string }) : Promise<User|string> {
        try {
            const res = await oidcManager.userManager.signinResourceOwnerCredentials({
                username: username,
                password: password
            });
            console.log("Login Response: ", res)
            setUser(res);
            navigateTo('/');
            return res;
        }
        catch(e) {
            return (e as ErrorResponse).error_description ?? "Invalid username/password";
        }
    }

    function tryLogout() {
        setUser(null);
        oidcManager.logout();
    }

    return {
        user,
        getUser,
        setUser,
        tryLogin,
        tryLogout,
        isLoggedIn
    };
}, {
    persist: true
});