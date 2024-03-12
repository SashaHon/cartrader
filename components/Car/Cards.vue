<script setup lang="ts">
const { cars } = useCars();
// console.log(cars);
</script>

<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="`${car.id}${777}`" :car="car" />
  </div>
</template>
