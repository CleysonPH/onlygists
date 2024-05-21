<script setup lang="ts">
const emit = defineEmits<{
  (e: 'wants-login-with-github'): void
}>()

const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-2 rounded bg-gray-50 p-6"
  >
    <h2 class="font=[Inter] font-regular text-gray-700">
      Entre com a sua conta
    </h2>
    <Button
      @click="() => emit('wants-login-with-github')"
      :loading="props.loading"
      label="Continuar com o GitHub"
      icon="pi pi-github"
      icon-pos="right"
    ></Button>
  </div>
</template>
