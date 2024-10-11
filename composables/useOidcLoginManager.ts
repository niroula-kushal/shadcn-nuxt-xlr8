import { User, UserManager } from 'oidc-client-ts';

let userManager: UserManager | null = null;
export default function useOidcLoginManager() {
    const runtimeConfig = useRuntimeConfig();
    if (userManager == null) {
        const baseURL = runtimeConfig.public.baseURL;
        const settings = {
            authority: runtimeConfig.public.oidcIssuer as string,
            client_id: runtimeConfig.public.oidcClientId as string,
            redirect_uri: `${baseURL}signin-oidc`,
            silent_redirect_uri: `${baseURL}silent-callback.html`,
            post_logout_redirect_uri: `${baseURL}`,
            response_type: 'code',
            scope: "openid profile email phone address offline_access",
        };
        console.log(settings)
        userManager = new UserManager(settings);
    }

    return {
        userManager,
        getUser() {
            return userManager?.getUser();
        },
        login() {
            return userManager?.signinRedirect();
        },
        renewToken() {
            return userManager?.signinSilent();
        },
        logout() {
            return userManager?.signoutRedirect();
        }
    };
}