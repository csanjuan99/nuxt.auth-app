<script setup lang="ts">
import {z} from 'zod';
import type {ComputedRef} from "vue";


const emits = defineEmits<{
  (event: 'onSubmit'): void
}>();

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const email = defineModel('email', {
  required: true,
  default: '',
});

const password = defineModel('password', {
  required: true,
  default: '',
});

const state: ComputedRef<any> = computed(() => ({
  email: email.value,
  password: password.value,
}));

const onSubmit = async () => {
  emits('onSubmit');
};

</script>

<template>
  <section class="h-screen w-full flex justify-center items-center">
    <UForm
        :schema="schema"
        :state="state"
        @submit="onSubmit"
    >
      <UCard class="w-fit max-w-96 font-">
        <template #header>
          <div class="text-center">
            <UIcon
                name="i-heroicons-lock-closed"
                class="w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"
            />
            <p class="text-2xl text-gray-900 dark:text-white font-bold">Welcome back!</p>
            <p class="text-gray-500 dark:text-gray-400 mt-1">
              Don't have an account?
              <ULink
                  class="text-primary font-medium hover:underline"
                  to="/register">
                Sign up
              </ULink>
            </p>
          </div>
        </template>
        <template #default>
          <article class="flex flex-col gap-4">
            <UFormGroup
                required
                label="Email"
                name="email"
                help="We'll never share your email with anyone else."
            >
              <UInput
                  type="email"
                  placeholder="Email"
                  icon="i-heroicons-envelope"
                  v-model="email"
                  required
              />
            </UFormGroup>
            <UFormGroup
                required
                name="password"
                label="Password"
            >
              <UInput
                  type="password"
                  placeholder="Password"
                  v-model="password"
                  icon="i-heroicons-lock-closed"
                  required
              />
            </UFormGroup>
            <UButton
                type="submit"
                block>
              Sign in
            </UButton>
          </article>
          <UDivider class="my-4"/>
          <p class="text-gray-500 dark:text-gray-400">
            By signing in, you agree to our
            <NuxtLink class="font-medium text-primary">
              Terms of Service
            </NuxtLink>
            .
          </p>
        </template>
      </UCard>
    </UForm>
  </section>
</template>

<style scoped>

</style>
