import { User } from "oidc-client-ts";

export default function useAuth() {
    const user = ref<User>();
    const storageKey = '__current_user';
    if(localStorage.getItem(storageKey)) {
        user.value = JSON.parse(localStorage.getItem(storageKey) as string);
    }

    function setUser(newUser: User) {
        user.value = newUser;
        if(!newUser) {
            localStorage.removeItem(storageKey);
        }
        else {
            localStorage.setItem(storageKey ,JSON.stringify(newUser));
        }
    }

    function getUser() {
        return user.value;
    }

    return {
        user,
        getUser,
        setUser
    };
}