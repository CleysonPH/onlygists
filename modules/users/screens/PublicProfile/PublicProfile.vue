<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'

const route = useRoute()
const router = useRouter()

const handleNavigateToDetail = (id: string) => {
  const { username } = route.params
  router.push(`/${username}/gists/${id}`)
}

const gists = [
  {
    id: '123',
    title: 'useCurrentUser.ts',
    description: 'Hook para pegar o **usuário atual** no `Vue.js`',
    price: 10,
    lang: 'typescript',
  },
  {
    id: '456',
    title: 'mq_client.py',
    description:
      'Cliente para conectar no *RabbitMQ* que consegue realizar `publish` e `subscribe`',
    price: 20,
    lang: 'python',
  },
  {
    id: '789',
    title: 'SecurityConfig.java',
    description:
      'Configuração para o **Spring Security** que permite autenticação via `JWT`',
    price: 25,
    lang: 'java',
  },
]
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
    <GistCardGroup>
      <GistCardGroupLoader :loading="false">
        <GistCardItem
          v-for="gist in gists"
          :key="gist.id"
          :id="gist.id"
          :title="gist.title"
          :description="gist.description"
          :price="gist.price"
          :lang="gist.lang"
          @tap="handleNavigateToDetail"
        />
      </GistCardGroupLoader>
    </GistCardGroup>
  </WidgetDefault>
</template>
