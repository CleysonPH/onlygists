<script setup lang="ts">
const { render } = useMarkdown()

const props = defineProps<{
  title: string
  lang: string
  description: string
  author: string
}>()

const description = computed(() => render(props.description))
</script>

<template>
  <div class="my-5 flex w-full flex-col justify-center gap-2">
    <div class="flex flex-wrap items-center gap-2">
      <h1 class="font-[Inter] text-2xl font-bold text-gray-700 md:text-3xl">
        {{ props.title }}
      </h1>
      <Chip class="text-sm" :label="lang" icon="pi pi-bolt" />
    </div>

    <div
      v-html="description"
      class="font-regular font-[Inter] text-base text-gray-700 md:text-lg"
    ></div>

    <p class="font-regular font-[Inter] text-sm text-gray-500 md:text-base">
      <i class="pi pi-star"></i>
      by
      <NuxtLink :to="`/${props.author}`">@{{ props.author }}</NuxtLink>
    </p>
  </div>
</template>
