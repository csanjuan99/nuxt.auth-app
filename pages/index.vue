<script setup lang="ts">
definePageMeta({
  auth: true,
})

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});
</script>

<template>
  <div>
    <nav class="flex justify-end border-b border-b-gray-300 dark:border-gray-600 p-4">
      <ClientOnly>
        <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
        />
        <template #fallback>
          <div class="w-8 h-8"/>
        </template>
      </ClientOnly>
    </nav>
  </div>
</template>

<style scoped>

</style>
