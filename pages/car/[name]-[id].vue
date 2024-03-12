<script setup lang="ts">
const route = useRoute();
const { cars } = useCars();

const getCar = (carList: Array<Car>): Car | undefined => {
  return carList.find((c) => c.id === +route.params.id);
};

const car = getCar(cars);

if (!car) {
  throw createError({
    message: `Car ${route.params.name} with ID ${route.params.id} is Not Found!!! >.<`,
  });
}

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div v-if="car">
    <div>
      <CarDetailHero :car="car" />
    </div>
    <CarDetailAttributes :features="car?.features" />
    <CarDetailDescription :description="car?.description" />
    <CarDetailContact />
  </div>
</template>
