<script setup lang="ts">
// const { cars } = useCars();

const { cars } = defineProps<{ cars: Car[] }>();

console.log('cars:', cars);
// cars.forEach((car) => console.log(car.id));

const favoriteMap: Record<number, boolean> = {};

const favorite = useLocalStorage('favorite', favoriteMap);

const handleFavor = (id: number): void => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
        v-for="car in cars"
        :key="`${car.id}${777}`"
        :car="car"
        :favored="car.id in favorite"
        @favor="handleFavor"
      />
    </ClientOnly>
  </div>
</template>
