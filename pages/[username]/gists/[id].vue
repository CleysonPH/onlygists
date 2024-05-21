<script setup lang="ts">
import MoreDetails from '@/modules/gists/screens/MoreDetails/MoreDetails.vue'
import GistCodeSnippet from '@/modules/gists/components/CodeSnippet/CodeSnippet.vue'

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <MoreDetails />
  <GistCodeSnippet
    :isPaid="false"
    :loading="false"
    code="console.log('Hello, World!');"
    lang="typescript"
  />
</template>
