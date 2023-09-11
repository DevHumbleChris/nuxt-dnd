<script setup lang="ts">
const { signIn, status, signOut } = useAuth();
const { userID } = await getUserID();
definePageMeta({
  title: "Nuxt DnD ( Drag And Drop )",
  auth: false,
});

const isAuthenticating = useState("isAuthenticating", () => false);

const loginWithGithub = async (): Promise<void> => {
  isAuthenticating.value = !isAuthenticating?.value;
  try {
    await signIn("github", { callbackUrl: "/" });
    isAuthenticating.value = !isAuthenticating?.value;
  } catch (err) {
    isAuthenticating.value = !isAuthenticating?.value;
  }
};

const logOut = async (): Promise<void> => {
  isAuthenticating.value = !isAuthenticating?.value;
  try {
    await signOut({ callbackUrl: "/" });
    isAuthenticating.value = !isAuthenticating?.value;
  } catch (err) {
    isAuthenticating.value = !isAuthenticating?.value;
  }
};
</script>

<template>
  <section class="grid md:grid-cols-2 items-center mb-10 md:mb-0">
    <div class="h-[12rem] md:h-screen">
      <nuxt-img
        src="/images/outer-space.jpg"
        alt="outer-space"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-5 md:p-10 space-y-3">
      <div class="flex items-center flex-wrap gap-2 justify-center">
        <NuxtLink
          to="https://github.com/DevHumbleChris/nuxt-dnd"
          target="_blank"
        >
          <Icon
            name="codicon:github-inverted"
            class="w-5 h-auto text-[#111828] hover:text-primary"
          />
        </NuxtLink>
        <div class="w-1 h-1 rounded-full bg-black"></div>
        <NuxtLink to="https://twitter.com/AmChrisKE" target="_blank">
          <Icon
            name="codicon:twitter"
            class="w-5 h-auto text-[#3abcf8] hover:text-primary"
          />
        </NuxtLink>
      </div>
      <div class="border rounded-lg shadow-xl">
        <div
          class="p-5 border-b flex items-center flex-wrap gap-3 justify-between"
        >
          <div>
            <h1 class="font-extrabold text-xl text-primary">Nuxt DnD</h1>
            <p v-if="userID" class="text-sm text-primary font-semibold">GitHub ID: {{ userID }}</p>
          </div>

          <button
            v-if="status === 'authenticated'"
            @click="logOut"
            class="flex items-center bg-primary hover:bg-[#282f3d] text-white p-2 rounded-md gap-2"
          >
            <div
              v-if="isAuthenticating"
              class="w-5 h-5 border-2 border-dashed rounded-full animate-spin text-white"
            ></div>
            <Icon v-else name="charm:sign-out" class="w-5 h-auto" />
            <p>
              {{ isAuthenticating ? "Authenticating" : "Logout" }}
            </p>
          </button>
          <button
            v-else
            @click="loginWithGithub"
            class="flex items-center bg-primary hover:bg-[#282f3d] text-white p-2 rounded-md gap-2"
          >
            <div
              v-if="isAuthenticating"
              class="w-5 h-5 border-2 border-dashed rounded-full animate-spin text-white"
            ></div>
            <Icon v-else name="codicon:github-inverted" class="w-5 h-auto" />
            <p>
              {{ isAuthenticating ? "Authenticating" : "Login with GitHub" }}
            </p>
          </button>
        </div>
        <div class="p-5 space-y-3">
          <h2 class="font-semibold text-primary">
            Welcome to Nuxt DnD ( Drag and Drop ).
          </h2>
          <p>
            A
            <NuxtLink
              to="https://nuxt.com"
              target="_blank"
              class="text-primary font-semibold"
              >Nuxt</NuxtLink
            >
            demo app, implementing the drag and drop functionality. Below
            <Icon name="twemoji:backhand-index-pointing-down" /> is the
            navigation guide:
          </p>
          <div class="space-y-2">
            <div class="flex items-center flex-wrap gap-2">
              <NuxtLink
                to="/taskie"
                class="text-primary font-semibold hover:underline"
                >/taskie</NuxtLink
              >
              <p>: explore the cool way of managing your tasks.</p>
            </div>
            <div class="flex items-center flex-wrap gap-2">
              <NuxtLink
                to="/board"
                class="text-primary font-semibold hover:underline"
                >/board</NuxtLink
              >
              <p>: simple Kanban Board with DnD functionality.</p>
            </div>
          </div>
          <hr />
          <p class="italic font-semibold text-sm">
            No personal informations regarding your GitHub account are stored in
            database (<NuxtLink
              to="https://firebase.google.com/"
              target="_blank"
              class="text-primary font-semibold hover:underline"
              >Firebase</NuxtLink
            >). We store only the data created linked with your GitHub ID.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
