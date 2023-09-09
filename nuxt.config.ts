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
    "@nuxt/image",
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
            primary: "#45196e",
          },
        },
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
      NUXT_AUTH_SECRET: process.env.NUXT_AUTH_SECRET,
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
  auth: {
    provider: {
      type: "authjs",
    },
    globalAppMiddleware: true,
  },
});
