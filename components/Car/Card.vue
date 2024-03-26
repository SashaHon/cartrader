<script setup lang="ts">
import heartFilled from '@/assets/heartFilled.png';
import heartOutline from '@/assets/heartOutline.png';

const props = defineProps<{ car: Car; favored: Boolean }>();

const { url, name, miles, description, features, id, price, seats } = props.car;
const emit = defineEmits(['favor']);
</script>

<template>
  <div
    class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
  >
    <img
      :src="favored ? heartFilled : heartOutline"
      alt="heart outline icon"
      class="absolute w-7 right-5 top-2 z-20"
      @click="emit('favor', id)"
    />
    <div class="flex h-full" @click="navigateTo(`/car/${name}-${id}`)">
      <NuxtImg :src="url" :alt="`${name} car`" class="w-[300px] h-full" />
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
