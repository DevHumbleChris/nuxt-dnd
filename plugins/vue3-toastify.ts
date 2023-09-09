import Vue3Toasity from "vue3-toastify";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toasity, {
    autoClose: 3000,
  });
});
