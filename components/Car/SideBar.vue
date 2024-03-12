<script setup lang="ts">
const modal = ref<Modal>({
  location: false,
  make: false,
  price: false,
});

const route = useRoute();
const city = ref<string>("");

const toggleModal = (key: string) => {
  console.log("click!");
  modal.value[key as keyof Modal] = !modal.value[key as keyof Modal];
};

const onChangeLocation = (): void => {
  if (!city.value) return;

  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: "Invalid city format",
    });
  }
  toggleModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};
</script>

<template>
  <div class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 class="text-blue-400 capitalize" @click="toggleModal('location')">
        {{ route.params.city }}
      </h3>
      <div
        v-if="modal.location || modal.make"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
      >
        <input v-model="city" type="text" class="border p-1 rounded" />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangeLocation"
        >
          Apply
        </button>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize" @click="toggleModal('make')">
        Toyota
      </h3>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize"></h3>
    </div>
  </div>
</template>
