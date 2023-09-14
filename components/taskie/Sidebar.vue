<script setup>
import { useTaskieStore } from "~/stores/taskie";

const taskieStore = useTaskieStore();
const data = user();

const image = computed(() => {
  return data?.image;
});

const openCreateProject = () => {
  taskieStore?.setIsCreateProject()
}
</script>

<template>
  <aside class="sticky w-[20rem] h-screen bg-white p-5 space-y-8">
    <div class="flex items-center gap-2">
      <div class="w-8 h-8 border-2 border-taskie rounded-full">
        <nuxt-img
          :src="image"
          class="w-full h-full object-cover rounded-full"
        />
      </div>
      <p class="text-sm text-taskie font-bold">DevHumbleChris</p>
    </div>
    <ul>
      <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
        <NuxtLink
          to="/taskie/dashboard"
          class="flex items-center gap-2 text-taskie font-bold"
        >
          <Icon name="bxs:grid-alt" class="w-5 h-auto" />
          <p>Dashboard</p>
        </NuxtLink>
      </li>
    </ul>
    <div class="space-y-4">
      <div class="flex items-center justify-between text-gray-400">
        <p class="text-sm">Your Projects</p>
        <button @click="openCreateProject">
          <Icon name="ion:plus-round" class="text-taskie font-bold" />
        </button>
      </div>
      <ul class="text-sm">
        <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
          <NuxtLink
            to="#"
            class="flex items-center gap-2 text-taskie font-bold"
          >
            <Icon name="ph:user-bold" class="w-5 h-auto" />
            <p>Personal</p>
          </NuxtLink>
        </li>
        <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
          <NuxtLink to="#" class="flex items-center gap-2 text-taskie font-bold">
            <Icon name="ph:user-bold" class="w-5 h-auto" />
            <p>Personal</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="space-y-4">
      <div class="flex items-center justify-between text-gray-400">
        <div>
          <div></div>
          <p class="text-sm">Private Projects</p>
        </div>
        <button>
          <Icon name="ion:plus-round" class="text-taskie font-bold" />
        </button>
      </div>
      <ul class="text-sm">
        <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
          <NuxtLink
            to="#"
            class="flex items-center gap-2 text-taskie font-bold"
          >
            <Icon name="ph:user-bold" class="w-5 h-auto" />
            <p>Personal</p>
          </NuxtLink>
        </li>
        <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
          <NuxtLink
            to="#"
            class="flex items-center gap-2 text-taskie font-bold"
          >
            <Icon name="ph:user-bold" class="w-5 h-auto" />
            <p>Personal</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div class="absolute bottom-0 right-0 left-0 bg-white border-t">
      <ul class="space-y-1">
        <li>
          <NuxtLink
            to="#"
            class="flex items-center gap-2 px-5 py-3 hover:bg-[#f5f6f8] text-taskie font-bold"
          >
            <Icon name="material-symbols:settings-rounded" class="w-6 h-auto" />
            <p>Settings</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="#"
            class="flex items-center gap-2 px-5 py-3 hover:bg-[#f5f6f8] text-taskie font-bold"
          >
            <Icon name="charm:sign-out" class="w-5 h-auto" />
            <p>Logout</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
