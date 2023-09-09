<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { useTodosStore } from "~/stores/todos";

const todosStore = useTodosStore();

const isOpen = computed(() => {
  return todosStore?.isOpenAddTodoModal;
});

const closeModal = (): void => {
  todosStore?.openTodoModal();
};
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
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
                class="text-lg font-bold leading-6 text-primary"
              >
                Add new framework
              </DialogTitle>

              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  Enter the name of your new framework
                </p>
              </div>

              <div class="mt-6">
                <input type="text" class="p-3 w-full rounded-md border border-primary">
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-[#282f3d] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Submit
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
