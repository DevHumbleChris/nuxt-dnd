<script setup>
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
    <main>
        <slot />
    </main>
</template>
