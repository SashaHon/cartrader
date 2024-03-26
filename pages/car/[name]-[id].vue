<script async setup lang="ts">
const route = useRoute();
const { data: car } = await useFetchCar(route.params.id as string);

const { toUpperCaseFirstLetter } = useUtilities();
useHead({
  title: toUpperCaseFirstLetter(route.params.name),
});

definePageMeta({
  layout: 'custom',
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
