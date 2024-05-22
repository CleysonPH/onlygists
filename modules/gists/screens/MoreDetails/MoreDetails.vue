<script setup lang="ts">
import PublicHeadline from '@/modules/gists/components/PublicHeadline/PublicHeadline.vue'
import LazyDialogPaymentSuccess from '@/modules/payments/components/DialogPaymentSuccess/DialogPaymentSuccess.vue'
import LazyDialogPaymentError from '@/modules/payments/components/DialogPaymentError/DialogPaymentError.vue'

const route = useRoute()
const isPaymentSuccessfully = ref<boolean>(false)
const isPaymentFailed = ref<boolean>(false)

onMounted(() => {
  const { successPayment, failPayment } = route.query
  if (successPayment) {
    isPaymentSuccessfully.value = true
  }

  if (failPayment) {
    isPaymentFailed.value = true
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

  <LazyDialogPaymentSuccess v-model:visible="isPaymentSuccessfully" />
  <LazyDialogPaymentError v-model:visible="isPaymentFailed" />
</template>
