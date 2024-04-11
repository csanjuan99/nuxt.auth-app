<script setup lang="ts">
import {useAuth} from "~/composables/auth";

definePageMeta({
  auth: 'guest',
  layout: 'empty',
});

useHead({
  title: 'Sign In',
  meta: [
    {
      name: 'description',
      content: 'Login to your account',
    },
  ],
})

const colorMode = useColorMode();
const auth = useAuth();

const payload = ref({
  email: '',
  password: '',
});

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});

const onSubmit = async () => {
  await auth.login({
    email: payload.value.email,
    password: payload.value.password,
  });
};
</script>

<template>
  <nav
      class="flex justify-end border-b border-b-gray-300 dark:border-gray-600 p-4 fixed top-0 left-0 w-full dark:bg-cool-900">
    <ClientOnly>
      <UButton
          :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
      />
    </ClientOnly>
  </nav>
  <section class="dark:bg-cool-900">
    <FormAuth
        v-model:email="payload.email"
        v-model:password="payload.password"
        @on-submit="onSubmit"
    />
  </section>
</template>

<style scoped>

</style>
