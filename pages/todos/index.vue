<script setup>
import TodoModal from "~/components/todos/Modal.vue";
import { useTodosStore } from "~/stores/todos";
import draggable from "vuedraggable";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
useHead({
  title: "Todos - Nuxt DnD",
});

const { userID } = await getUserID();

const todosStore = useTodosStore();

const openModal = () => {
  console.log("hello");
  todosStore?.openTodoModal();
};

const todos = useState("todos", () => []);
watchEffect(() => {
  if (process.client) {
    const { db } = firebaseConfig();
    const q = query(
      collection(db, "users", userID, "todos"),
      orderBy("timestamp", "desc")
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      const userTodos = [];
      querySnapshot.forEach((doc) => {
        userTodos?.push({ ...doc.data(), id: doc.id });
      });
      todos.value = userTodos.filter(
        (userTodo) => userTodo?.user.githubID === userID
      );
    });
    return () => unsub();
  }
});
</script>

<template>
  <div class="max-w-xl sm:mx-auto mt-[10rem] mx-2 space-y-3">
    <NuxtLink
      to="/"
      class="flex items-center gap-2 justify-center text-primary font-bold"
    >
      <Icon name="solar:home-linear" class="w-5 h-auto" />
      <p>Home</p>
    </NuxtLink>
    <div class="border p-5 rounded-md">
      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-primary">Your Todos</h1>
            <button
              @click="openModal"
              class="block rounded-md p-2 border hover:border-gray-600"
            >
              <Icon
                name="material-symbols:add-rounded"
                class="w-5 h-auto font-bold text-primary"
              />
            </button>
            <TodoModal />
          </div>
          <p class="text-gray-500">Below is the list for your created todos.</p>
        </div>
        <div class="space-y-3" v-if="todos?.length > 0">
          <draggable
            :list="todos"
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
                <p>{{ element?.title }}</p>
                <div class="flex items-center gap-2">
                  <button class="hidden group-hover:block">
                    <Icon
                      name="ic:round-close"
                      class="w-4 h-auto text-red-600"
                    />
                  </button>
                  <button class="block cursor-grabbing">
                    <Icon
                      name="ic:round-drag-indicator"
                      class="w-4 h-auto text-primary"
                    />
                  </button>
                </div>
              </div>
            </template>
          </draggable>
        </div>
        <div v-else class="text-gray-500 text-center">
          <p>No Created todos.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
</style>
