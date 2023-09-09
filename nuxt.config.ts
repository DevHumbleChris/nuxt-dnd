// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@pinia/nuxt",
    "@vueuse/motion/nuxt",
    "@sidebase/nuxt-auth",
    '@nuxt/image'
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          raleway: ["Raleway", "sans-serif"],
        },
        extend: {
          colors: {
            primary: '#45196e'
          }
        }
      },
    },
  },
  googleFonts: {
    families: {
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  runtimeConfig: {
    public: {
      gitHubClientID: process.env.GITHUB_CLIENT_ID,
      gitHubClientSecret: process.env.GITHUB_CLIENT_SECRET,
      NUXT_AUTH_SECRET: process.env.NUXT_AUTH_SECRET
    },
  },
  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: true,
  },
});
