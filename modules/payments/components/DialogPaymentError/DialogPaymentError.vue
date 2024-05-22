<script setup lang="ts">
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog
    modal
    v-model:visible="visible"
    header="Erro ao efetuar a compra!"
    :style="{ width: '400px' }"
  >
    <div class="m-0 flex w-full flex-col items-center justify-center">
      <i class="pi pi-times-circle my-5 text-6xl text-primary-500"></i>
      <p class="text-center font-[Inter] text-gray-700">
        Sentimos muito por isso <br />
        Por favor, tente efetuar a compra novamente.
      </p>
    </div>

    <template #footer>
      <div class="flex w-full justify-center">
        <Button
          label="Voltar"
          icon="pi pi-arrow-left"
          autofocus
          @click="visible = false"
        ></Button>
      </div>
    </template>
  </Dialog>
</template>
