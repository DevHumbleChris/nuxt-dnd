<script setup>
import Sidebar from '~/components/taskie/Sidebar.vue'
import CreateProject from '~/components/taskie/CreateProject.vue';
const route = useRoute();
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { property: "og:title", content: `Nuxt DnD ( Drag And Drop )` },
    {
      name: "description",
      content: "Nuxt DnD ( Drag And Drop )",
    },
    {
      property: "og:description",
      content: "Nuxt DnD ( Drag And Drop )",
    },
    { property: "og:url", content: "https://nuxt-dnd.vercel.app/" },
    { name: "twitter:title", content: "Nuxt DnD ( Drag And Drop )" },
    {
      name: "twitter:description",
      content: "Nuxt DnD ( Drag And Drop )",
    },
    { name: "twitter:site", content: "https://nuxt-dnd.vercel.app/" },
  ],
  title: `${route?.meta?.title}`,
});
</script>


<template>
    <main class="relative flex">
        <Sidebar />
        <section class="w-full bg-[#f5f6f8]">
          <slot />
        </section>
        <CreateProject />
    </main>
</template>
