<script setup lang="ts">
const { makes } = useCars();
const modal = ref<Modal>({
  location: false,
  make: false,
  price: false,
});

interface priceRangeInt {
  min: string;
  max: string;
}

const route = useRoute();
const router = useRouter();

const priceRangeText = computed((): string => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) {
    return `< $${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `> $${minPrice}`;
  } else {
    return `$${minPrice}-$${maxPrice}`;
  }
});
const city = ref<string>("");
const priceRange = ref<priceRangeInt>({ min: "", max: "" });

const toggleModal = (key: string): void => {
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

const onChangeMake = (make: string): void => {
  toggleModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};

const onChangePriceRange = (): void => {
  const minPrice = priceRange.value.min;
  const maxPrice = priceRange.value.max;

  if (minPrice && maxPrice) {
    if (minPrice > maxPrice || minPrice === maxPrice) {
      priceRange.value.min = "";
      priceRange.value.max = "";
      return;
    }
  }
  router.push({
    query: {
      minPrice: minPrice,
      maxPrice: maxPrice,
    },
  });
  toggleModal("price");
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
        v-if="modal.location"
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
        {{ route.params.make || "Any" }}
      </h3>
      <div
        v-if="modal.make"
        class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white"
      >
        <h4
          v-for="make in makes"
          :key="make"
          class="w-1/3"
          @click="onChangeMake(make)"
        >
          {{ make }}
        </h4>
      </div>
    </div>

    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Price</h3>
      <h3 class="text-blue-400 capitalize" @click="toggleModal('price')">
        {{ priceRangeText }}
      </h3>
      <div
        v-if="modal.price"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white"
      >
        <input
          v-model="priceRange.min"
          type="number"
          placeholder="min"
          class="border p-1 rounded"
        />
        <input
          v-model="priceRange.max"
          type="number"
          placeholder="max"
          class="border p-1 rounded"
        />
        <button
          class="bg-blue-400 w-full mt-2 rounded text-white p-1"
          @click="onChangePriceRange"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
