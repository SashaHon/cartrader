<script setup lang="ts">
const { features } = defineProps<{ features: Array<String> }>();
</script>
<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div
      v-for="(feature, index) in features"
      :key="`${feature}${index}`"
      class="flex text-lg mt-2"
    >
      <p class="rounded text-lime-800 mr-3">✔</p>
      <p>{{ feature }}</p>
    </div>
  </div>
</template>
