<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
</script>

<template>
  <PublicHeadline
    name="Cleyson Lima"
    avatar-url="https://github.com/CleysonPH.png"
    bio="Um dev que gosta de ajudar as pessoas a aprenderem programação e que nas horas vagas anda de bicicleta. 🚴"
    city="Teresina"
    satate="PI"
  />

  <WidgetGroup>
    <WidgetLoader :loading="false" :amount="3">
      <WidgetCondensed :value="10" label="Gists no total" />
      <WidgetCondensed :value="3" label="Gists gratuitos" />
      <WidgetCondensed :value="7" label="Gists pagos" />
    </WidgetLoader>
  </WidgetGroup>

  <WidgetDefault title="Todos os gists">
    <GistCardGroup>gists</GistCardGroup>
  </WidgetDefault>
</template>
