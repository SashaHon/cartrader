<script setup lang="ts">
const props = defineProps<{ car: Car }>();
const { url, name, miles, id, price, seats } = props.car;
</script>

<template>
  <div class="mt-10">
    <img :src="url" class="w-full" :alt="`${name}${id}`" />
    <h1 class="mt-10 text-4xl">{{ name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ seats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ miles }} miles</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ price }}</p>
      </div>
    </div>
  </div>
</template>
