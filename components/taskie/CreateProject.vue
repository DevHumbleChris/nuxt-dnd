<script setup>
import IconModal from "./IconModal.vue";
const projectDetails = useState("projectDetails", () => {
  return {
    name: "",
    type: "Public",
    description: "",
    iconKey: "game-icons:cubeforce",
  };
});
</script>

<template>
  <div
    class="fixed top-0 right-0 h-screen overflow-auto w-full sm:w-[30rem] bg-white rounded-l-2xl shadow-xl shadow-zinc-300/50 z-30"
  >
    <button class="block absolute top-3 left-3">
      <Icon
        name="material-symbols:cancel"
        class="w-8 text-white hover:text-taskie h-auto"
      />
    </button>
    <div class="w-full h-[18rem]">
      <nuxt-img
        format="webp"
        src="/images/cowboy.jpg"
        alt="cowboy.jpg"
        loading="lazy"
        class="w-full h-full object-cover rounded-tl-2xl"
      />
    </div>
    <div class="p-4 space-y-3">
      <h2 class="text-2xl text-taskie-sec font-semibold">Create Project</h2>
      <form class="text-gray-600 text-sm p-1 space-y-5">
        <div class="space-y-3">
          <label for="projectName" class="block font-semibold"> Name </label>
          <input
            type="text"
            placeholder="project name"
            id="projectName"
            v-model="projectDetails.name"
            class="w-full bg-[#f9fafc] px-3 py-2 outline-none border rounded-md focus:ring-2 focus:ring-taskie"
          />
        </div>
        <div class="space-y-3">
          <label for="projectType" class="block font-semibold"> Type </label>
          <select
            name="projectType"
            id="projectType"
            class="w-full bg-[#f9fafc] px-3 py-2 outline-none border rounded-md focus:ring-2 focus:ring-taskie"
            v-model="projectDetails.type"
          >
            <option value="Public" selected>Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div class="space-y-3">
          <label for="projectType" class="block font-semibold">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            v-model="projectDetails.description"
            class="w-full bg-[#f9fafc] px-3 py-2 outline-none border rounded-md focus:ring-2 focus:ring-taskie"
          ></textarea>
        </div>
        <div class="grid grid-cols-6 gap-10">
          <div class="col-span-4 space-y-3">
            <label for="iconKey" class="block font-semibold">Icon Key</label>
            <div class="flex items-center gap-3">
              <div>
                <button class="block hover:text-taskie font-bold">
                  <Icon
                    name="material-symbols:add-circle-outline-rounded"
                    class="w-6 h-auto shrink-0"
                  />
                </button>
                <IconModal />
              </div>
              <input
                id="iconKey"
                type="text"
                v-model="projectDetails.iconKey"
                class="w-full bg-[#f9fafc] px-3 py-2 outline-none border rounded-md focus:ring-2 focus:ring-taskie"
              />
            </div>
          </div>
          <div class="col-span-2">
            <p class="block font-semibold">Icon</p>
            <Icon
              :name="projectDetails.iconKey"
              class="w-6 h-auto shrink-0 mt-5"
            />
          </div>
        </div>
        <div class="py-8 flex items-center justify-end gap-4">
          <button
            class="block py-2 px-4 text-sm border border-taskie-sec hover:border-0 hover:bg-taskie hover:text-white rounded-md"
          >
            Cancel
          </button>
          <button
            class="block py-2 px-4 text-sm bg-taskie-sec text-white rounded-md hover:bg-taskie"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
