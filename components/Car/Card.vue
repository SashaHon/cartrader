<script setup lang="ts">
const props = defineProps<{ car: Car }>();
const { url, name, miles, description, features, id, price, seats } = props.car;
</script>

<template>
  <div
    class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    @click="navigateTo(`/car/${name}-${id}`)"
  >
    <div class="flex h-full">
      <img :src="url" :alt="`${name} car`" class="w-[300px] h-full" />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{ name }}</h1>
          <p class="text-gray-700">{{ description }}</p>
        </div>
        <h1 class="mt-auto text-xl">${{ price }}</h1>
      </div>
    </div>
  </div>
</template>
