<script setup lang="ts">
const { toUpperCaseFirstLetter } = useUtilities();

const city = useRoute().params.city as string;
const make = useRoute().params.make as string;

useHead({
  title: `${toUpperCaseFirstLetter(make)} in ${toUpperCaseFirstLetter(city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSideBar />
        <NuxtPage />
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col">
            <h1>Sorry, this is really an error, you should do better</h1>
            <code>{{ error }}</code>
            <button
              class="text-white bg-blue-400 px-10 py-3 rounded mt-4"
              @click="error.value = null"
            >
              back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
