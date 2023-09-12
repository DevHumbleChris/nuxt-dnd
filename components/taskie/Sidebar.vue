<script setup>
const data = user()

const image = computed(() => {
    return data?.image
})

</script>

<template>
    <aside class="sticky w-[20rem] h-screen bg-white p-5 space-y-8">
        <div class="flex items-center gap-2">
            <div class="w-8 h-8 border-2 rounded-full">
                <nuxt-img :src="image" class="w-full h-full object-cover rounded-full"/>
            </div>
            <p class="text-sm">DevHumbleChris</p>
        </div>
        <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-400">
                <p class="text-sm">Your Projects</p>
                <button>
                    <Icon name="ion:plus-round" />
                </button>
            </div>
            <ul class="text-sm">
                <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
                    <NuxtLink to="#" class="flex items-center gap-2">
                        <Icon name="ph:user-bold" class="w-5 h-auto"/>
                        <p>Personal</p>
                    </NuxtLink>
                </li>
                <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
                    <NuxtLink to="#" class="flex items-center gap-2">
                        <Icon name="ph:user-bold" class="w-5 h-auto"/>
                        <p>Personal</p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="space-y-4">
            <div class="flex items-center justify-between text-gray-400">
                <div>
                    <div>

                    </div>
                    <p class="text-sm">Private Projects</p>
                </div>
                <button>
                    <Icon name="ion:plus-round" />
                </button>
            </div>
            <ul class="text-sm">
                <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
                    <NuxtLink to="#" class="flex items-center gap-2">
                        <Icon name="ph:user-bold" class="w-5 h-auto"/>
                        <p>Personal</p>
                    </NuxtLink>
                </li>
                <li class="hover:bg-[#f5f6f8] p-2 rounded-md">
                    <NuxtLink to="#" class="flex items-center gap-2">
                        <Icon name="ph:user-bold" class="w-5 h-auto"/>
                        <p>Personal</p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </aside>
</template>
