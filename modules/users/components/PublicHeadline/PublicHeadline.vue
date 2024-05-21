<script setup lang="ts">
const props = defineProps<{
  name: string
  avatarUrl: string
  bio?: string
  city?: string
  satate?: string
}>()
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center gap-2">
    <div class="w-24 overflow-hidden rounded-full md:w-32">
      <img class="w-full" :src="props.avatarUrl" alt="foto do usuário" />
    </div>

    <h1
      class="text-center font-[Inter] text-2xl font-bold text-gray-700 md:text-3xl"
    >
      {{ props.name }}
    </h1>
    <p
      class="font-regular font-[Inter] text-gray-700 md:text-lg"
      v-if="props.bio"
    >
      {{ props.bio }}
    </p>
    <p
      class="font-regular font-[Inter] text-sm text-gray-500 md:text-base"
      v-if="props.city && props.satate"
    >
      <i class="pi pi-map-marker"></i>
      {{ props.city }}, {{ props.satate }}
    </p>
  </div>
</template>
