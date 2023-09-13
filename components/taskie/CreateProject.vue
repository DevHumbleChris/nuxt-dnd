<template>
  <div
    class="fixed top-0 right-0 h-screen w-[30rem] bg-white rounded-l-2xl shadow-xl shadow-zinc-300/50 z-30"
  >
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
      <h2 class="text-2xl text-[#df4d27] font-semibold">Create Project</h2>
      <form class="text-gray-600 text-sm p-1 space-y-5">
        <div class="space-y-3">
          <label for="projectName" class="block font-semibold"> Name </label>
          <input
            type="text"
            placeholder="project name"
            id="projectName"
            class="w-full bg-[#f9fafc] px-3 py-2 outline-none border-0 rounded-md focus:ring-2 focus:ring-taskie"
          />
        </div>
        <div class="space-y-3">
          <label for="projectType" class="block font-semibold"> Type </label>
          <select
            name="projectType"
            id="projectType"
            class="w-full bg-[#f9fafc] px-3 py-2 outline-none border-0 rounded-md focus:ring-2 focus:ring-taskie"
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
            class="w-full bg-[#f9fafc] px-3 py-2 outline-none border-0 rounded-md focus:ring-2 focus:ring-taskie"
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>
