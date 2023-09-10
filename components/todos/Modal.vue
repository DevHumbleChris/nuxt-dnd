<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useTodosStore } from "~/stores/todos";
import { toast } from "vue3-toastify";

const todosStore = useTodosStore();
const { db } = firebaseConfig();
const isAddingTodo = useState("isAddingTodo", () => false);
const { userID } = await getUserID();
const userData = user();
const todo = useState("todo", () => "");

const isOpen = computed(() => {
  return todosStore?.isOpenAddTodoModal;
});

const closeModal = () => {
  todosStore?.openTodoModal();
};

// Code Snap (Firebase) - The Coding Montana
const addTodo = async () => {
  try {
    if (!todo?.value) {
      return toast('Todo title is required!', {
        theme: 'colored',
        type: 'error'
      })
    }
    isAddingTodo.value = !isAddingTodo?.value;
    await addDoc(collection(db, "users", userID, "todos"), {
      title: todo.value,
      isCompleted: false,
      user: {
        githubID: userID,
        name: userData?.name,
        photoURL: userData?.image,
        email: userData?.email,
      },
      timestamp: serverTimestamp(),
    });
    isAddingTodo.value = !isAddingTodo?.value;
    todo.value = "";
    todosStore?.openTodoModal();
    toast('Bingo! Todo is added.', {
      type: 'info',
      theme: 'colored'
    })
  } catch (err) {
    isAddingTodo.value = !isAddingTodo?.value;
    console.log(err);
  }
};
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-bold leading-6 text-primary flex items-center justify-between"
              >
                <p>Add new todo</p>
                <button @click="closeModal" class="block">
                  <Icon name="ic:round-close" class="w-5 h-auto text-red-600" />
                </button>
              </DialogTitle>

              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  Enter the title of your new todo
                </p>
              </div>

              <div class="mt-6">
                <input
                  v-model="todo"
                  type="text"
                  class="p-3 w-full rounded-md border border-primary"
                />
              </div>

              <div class="mt-4">
                <button
                  @click="addTodo"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-[#282f3d] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 gap-2"
                >
                  <div
                    v-if="isAddingTodo"
                    class="w-5 h-5 border-2 border-dashed rounded-full animate-spin text-white"
                  ></div>
                  {{ isAddingTodo ? "Processing" : "Submit" }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
