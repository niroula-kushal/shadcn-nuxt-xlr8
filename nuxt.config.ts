// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt', 
    '@nuxtjs/color-mode', 
    '@pinia/nuxt', 
    'pinia-plugin-persistedstate/nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  colorMode: {
    classSuffix: ""
  },
  runtimeConfig: {
    app: {
      baseURL: '',
      apiURL: '',
    },
    public: {
      baseURL: "",
      oidcIssuer: '',
      oidcClientId: '',
    }
  },
  piniaPluginPersistedstate: {
    key: 'cs_%id_persisted',
    auto: true,
    debug: true,
    storage: "localStorage"
  },
})