<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
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
                class="text-lg font-semibold leading-6 text-gray-900"
              >
                Get icon key
              </DialogTitle>
              <button @click="closeModal" class="block absolute top-3 right-3">
                <Icon
                  name="material-symbols:cancel"
                  class="w-8 text-black hover:text-taskie h-auto"
                />
              </button>
              <div class="mt-2">
                <p class="text-sm text-gray-600">
                  Find the icon that best matches your project name and copy the
                  icon key, which looks like this: <br />
                  <span class="p-1 border rounded font-semibold mt-3"
                    >game-icons:cubeforce</span
                  >
                </p>
              </div>

              <div
                class="my-4 h-[18rem]"
                :class="{ 'animate-pulse bg-slate-200 rounded-xl': isLoading }"
              >
                <iframe
                  @load="handleIframeLoad"
                  :src="iframeSrc"
                  class="w-full h-full rounded-xl"
                  title="Iframe Example"
                ></iframe>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const isOpen = ref(true);

const iframeSrc = useState("iframeSrc", () => "");
const isLoading = useState("isLoading", () => true);

const handleIframeLoad = () => {
  isLoading.value = false;
  iframeSrc.value = "https://icones.js.org/collection/all";
};

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>
