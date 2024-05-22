<script setup lang="ts">
import PublicHeadline from '@/modules/gists/components/PublicHeadline/PublicHeadline.vue'
import DialogPaymentSuccess from '@/modules/payments/components/DialogPaymentSuccess/DialogPaymentSuccess.vue'

const route = useRoute()
const isPaymentSuccessfully = ref<boolean>(false)

onMounted(() => {
  const { successPayment } = route.query
  if (successPayment) {
    isPaymentSuccessfully.value = true
  }
})
</script>

<template>
  <PublicHeadline
    title="currency_formart.py"
    lang="python"
    description="Função em `Python` para fazer **formatação de moeda**. 🐍"
    author="cleysonph"
  />

  <DialogPaymentSuccess v-model:visible="isPaymentSuccessfully" />
</template>
