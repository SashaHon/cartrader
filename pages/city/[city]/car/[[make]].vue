<script async setup lang="ts">
const route = useRoute();
const maxPrice = computed(() => route.query.maxPrice as string);
const minPrice = computed(() => route.query.minPrice as string);
const city = route.params.city as string;

const checkCarsPromise = await useFetchCars(city, {
  minPrice: minPrice.value,
  maxPrice: maxPrice.value,
  make: route.params.make as string,
});

const { data: cars } = checkCarsPromise;

watch(
  () => route.query,
  () => {
    window.location.reload();
  }
);
</script>

<template>
  <div v-if="cars?.length">
    <CarCards :cars="cars" />
  </div>
  <div v-else>
    <h2 class="text-red-600">No cars found in {{ route.params.city }}</h2>
  </div>
</template>
