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
      <CarSideBar />
      <NuxtPage />
    </div>
  </div>
</template>
