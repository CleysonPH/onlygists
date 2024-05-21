<script setup lang="ts">
import SocialForm from '@/modules/auth/components/SocialForm/SocialForm.vue'

const loading = ref<boolean>(false)

const handleGithubLogin = () => {
  loading.value = true
  // TODO: Call the login service
}
</script>

<template>
  <section
    class="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gray-50"
  >
    <Logo />
    <SocialForm
      :loading="loading"
      @wants-login-with-github="handleGithubLogin"
    />
  </section>
</template>
