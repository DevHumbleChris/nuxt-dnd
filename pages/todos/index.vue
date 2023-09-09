<script setup lang="ts">
import TodoModal from "~/components/todos/Modal.vue";
import DragTodo from "~/components/todos/DragTodo.vue";
import { useTodosStore } from "~/stores/todos";
import draggable from "vuedraggable";
useHead({
  title: "Todos - Nuxt DnD",
});

const todosStore = useTodosStore();

const openModal = (): void => {
  todosStore?.openTodoModal();
};

const items = useState("items", () => {
  return [
    {
      id: 1,
      name: "Ben",
    },
    {
      id: 2,
      name: "Chris",
    },
    {
      id: 3,
      name: "Chrdsis",
    },
  ];
});
</script>

<template>
  <section class="max-w-xl sm:mx-auto border p-5 rounded-md mt-[10rem] mx-2">
    <div class="space-y-4">
      <div>
        <div class="flex items-center justify-between">
          <h1 class="text-xl font-bold">Frameworks</h1>
          <button
            @click="openModal"
            class="block rounded-md p-2 border hover:border-gray-600"
          >
            <Icon
              name="material-symbols:add-rounded"
              class="w-5 h-auto font-bold"
            />
          </button>
        </div>
        <p class="text-gray-500">List Popular web development frameworks</p>
      </div>
      <div class="space-y-3">
        <draggable
          :list="items"
          item-key="id"
          class="space-y-2"
          :component-data="{ name: 'fade' }"
        >
          <template #item="{ element }">
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
              <p>{{ element.name }}</p>
              <div class="flex items-center gap-2">
                <button
                  class="hidden group-hover:block"
                >
                  <Icon name="ic:round-close" class="w-4 h-auto text-red-600" />
                </button>
                <button class="block cursor-grabbing">
                  <Icon
                    name="ic:round-drag-indicator"
                    class="w-4 h-auto text-gray-600"
                  />
                </button>
              </div>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </section>
</template>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
</style>
