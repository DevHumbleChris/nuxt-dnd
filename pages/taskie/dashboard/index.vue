<script setup>
import LeftSidebar from "~/components/taskie/dashboard/LeftSidebar.vue";
definePageMeta({
  layout: "custom",
  title: "Taskie Dashboard - Nuxt DnD",
});
const data = user();

const image = computed(() => {
  return data?.image;
});
</script>

<template>
  <section class="flex">
    <div class="w-full">
      <div
        class="flex items-center gap-1 px-6 py-3 bg-white text-sm font-semibold"
      >
        <h1>Taskie</h1>
        <p>/</p>
        <div class="flex items-center gap-1 text-taskie">
          <Icon name="bxs:grid-alt" class="w-4 h-auto" />
          <p>Dashboard</p>
        </div>
      </div>
      <div class="p-10 grid grid-cols-2 gap-10">
        <div class="space-y-4">
          <p class="text-sm text-gray-500">Wednesday, 24 July</p>
          <h2 class="text-3xl">
            <span class="text-2xl">Welcome Back</span><br />
            <span class="font-bold text-taskie">The Coding Montana!</span>
          </h2>
        </div>
        <div
          class="text-sm bg-white rounded-lg shadow p-5 space-y-10 text-gray-500"
        >
          <div class="flex items-center justify-between">
            <p>Project Estimate</p>
            <button>
              <Icon name="humbleicons:dots-horizontal" />
            </button>
          </div>

          <div class="text-xs flex items-center justify-between">
            <div class="space-y-1">
              <p>Team Members</p>
              <div class="flex -space-x-4">
                <img
                  class="w-8 h-8 border-2 bg-taskie border-taskie rounded-full"
                  :src="image"
                  alt="image"
                />
                <img
                  class="w-8 h-8 border-2 bg-taskie border-taskie rounded-full"
                  :src="image"
                  alt="image"
                />
                <img
                  class="w-8 h-8 border-2 bg-taskie border-taskie rounded-full"
                  :src="image"
                  alt="image"
                />
                <NuxtLink
                  class="flex items-center justify-center w-9 h-9 text-xs font-medium text-white bg-taskie border-2 border-white rounded-full hover:bg-gray-600"
                  href="#"
                  >+99</NuxtLink
                >
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="space-y-1">
                <p>All</p>
                <p class="text-xl font-bold text-taskie">18</p>
              </div>
              <div class="space-y-1">
                <p>Private</p>
                <p class="text-xl font-bold text-taskie">18</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="p-10">
        <div class="relative w-full h-[20rem]">
          <svg class="absolute -top-5 -right-2"
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="31.9993"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.9993 132)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.9993 117.333)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.9993 102.667)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="88"
              r="1.66667"
              transform="rotate(180 31.9993 88)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.9993 73.3333)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="45"
              r="1.66667"
              transform="rotate(180 31.9993 45)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="16"
              r="1.66667"
              transform="rotate(180 31.9993 16)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="59"
              r="1.66667"
              transform="rotate(180 31.9993 59)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 31.9993 30.6666)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 31.9993 1.66665)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 17.3333 132)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 17.3333 117.333)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 17.3333 102.667)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="88"
              r="1.66667"
              transform="rotate(180 17.3333 88)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 17.3333 73.3333)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="45"
              r="1.66667"
              transform="rotate(180 17.3333 45)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="16"
              r="1.66667"
              transform="rotate(180 17.3333 16)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="59"
              r="1.66667"
              transform="rotate(180 17.3333 59)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 17.3333 30.6666)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 17.3333 1.66665)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="132"
              r="1.66667"
              transform="rotate(180 2.66536 132)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 2.66536 117.333)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 2.66536 102.667)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="88"
              r="1.66667"
              transform="rotate(180 2.66536 88)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 2.66536 73.3333)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="45"
              r="1.66667"
              transform="rotate(180 2.66536 45)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="16"
              r="1.66667"
              transform="rotate(180 2.66536 16)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="59"
              r="1.66667"
              transform="rotate(180 2.66536 59)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 2.66536 30.6666)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 2.66536 1.66665)"
              fill="#ef4e24"
            />
          </svg>
          <nuxt-img
            src="/images/cowboy.jpg"
            alt="cowboy"
            class="w-full h-full object-cover rounded-2xl"
          />
          <svg class="absolute -bottom-5 -left-3"
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="31.9993"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.9993 132)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.9993 117.333)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.9993 102.667)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="88"
              r="1.66667"
              transform="rotate(180 31.9993 88)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.9993 73.3333)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="45"
              r="1.66667"
              transform="rotate(180 31.9993 45)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="16"
              r="1.66667"
              transform="rotate(180 31.9993 16)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="59"
              r="1.66667"
              transform="rotate(180 31.9993 59)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 31.9993 30.6666)"
              fill="#ef4e24"
            />
            <circle
              cx="31.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 31.9993 1.66665)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 17.3333 132)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 17.3333 117.333)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 17.3333 102.667)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="88"
              r="1.66667"
              transform="rotate(180 17.3333 88)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 17.3333 73.3333)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="45"
              r="1.66667"
              transform="rotate(180 17.3333 45)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="16"
              r="1.66667"
              transform="rotate(180 17.3333 16)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="59"
              r="1.66667"
              transform="rotate(180 17.3333 59)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 17.3333 30.6666)"
              fill="#ef4e24"
            />
            <circle
              cx="17.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 17.3333 1.66665)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="132"
              r="1.66667"
              transform="rotate(180 2.66536 132)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 2.66536 117.333)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 2.66536 102.667)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="88"
              r="1.66667"
              transform="rotate(180 2.66536 88)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 2.66536 73.3333)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="45"
              r="1.66667"
              transform="rotate(180 2.66536 45)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="16"
              r="1.66667"
              transform="rotate(180 2.66536 16)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="59"
              r="1.66667"
              transform="rotate(180 2.66536 59)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 2.66536 30.6666)"
              fill="#ef4e24"
            />
            <circle
              cx="2.66536"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 2.66536 1.66665)"
              fill="#ef4e24"
            />
          </svg>
        </div>
      </div>
    </div>
    <LeftSidebar />
  </section>
</template>
