<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="overflow-x-inherit rounded-lg bg-white p-5">
    <div class="flex items-center justify-between" v-if="props.title">
      <div class="flex flex-col gap-1">
        <h3 class="text-left font-[Inter] text-lg font-bold text-gray-700">
          {{ props.title }}
        </h3>
        <p
          v-if="props.subtitle"
          class="text-left font-[Inter] text-sm text-gray-500"
        >
          {{ props.subtitle }}
        </p>
      </div>

      <slot name="header-actions"></slot>
    </div>

    <div class="py-2">
      <slot></slot>
    </div>
  </div>
</template>
