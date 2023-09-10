<script setup>
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "vue3-toastify";

const props = defineProps({
  todo: Object,
});

const { db } = firebaseConfig();

const todo = computed(() => {
  return props?.todo;
});

const deleteTodo = async (todoID) => {
  try {
    await deleteDoc(
      doc(db, "users", todo?.value?.user?.githubID, "todos", todoID)
    );
    toast("Bingo! Todo Deleted.", {
      type: "info",
      theme: "colored",
    });
  } catch (err) {
    toast(err?.message, {
      type: "error",
      theme: "colored",
    });
  }
};
</script>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5,
      },
    }"
    :hovered="{ opacity: 1 }"
    :tapped="{ opacity: 0 }"
    :delay="200"
    class="flex items-center justify-between p-3 border rounded-md group"
  >
    <p>{{ todo?.title }}</p>
    <div class="flex items-center gap-2">
      <button @click="deleteTodo(todo?.id)" class="hidden group-hover:block">
        <Icon name="ic:round-close" class="w-4 h-auto text-red-600" />
      </button>
      <button class="block cursor-grabbing">
        <Icon name="ic:round-drag-indicator" class="w-4 h-auto text-primary" />
      </button>
    </div>
  </div>
</template>
