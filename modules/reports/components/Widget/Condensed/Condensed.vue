<script setup lang="ts">
const props = defineProps<{
  value: number | string
  label: string
}>()
</script>

<template>
  <div class="flex flex-1 flex-col rounded-xl bg-white p-5">
    <span class="font-[Inter] text-4xl font-bold text-primary-500">{{
      props.value
    }}</span>
    <p class="font-[Inter] text-lg text-gray-700">{{ props.label }}</p>
  </div>
</template>
