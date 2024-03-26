<script setup lang="ts">
const props = defineProps<{ title: string; name: string; options: string[] }>();

const emits = defineEmits(["changeInput"]);
const state = ref("");
const onChange = (): void => {
  emits("changeInput", state.value, props.name);
};

//here in option tag in key was passed "option.id", but option is a string, so i think 'id' should not be there
</script>

<template>
  <div class="flex flex-col w-[48%] mt-2">
    <label for="" class="text-cyan-500 mb-1 text-sm">{{ title }}</label>
    <select
      id=""
      v-model="state"
      name=""
      class="p-2 border w-100 rounded"
      @change="onChange"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
