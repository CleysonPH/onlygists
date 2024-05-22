<script setup lang="ts">
import Loader from './Loader.vue'
import { common, createStarryNight } from '@wooorm/starry-night'
import { toHtml } from 'hast-util-to-html'
import '@wooorm/starry-night/style/light'

const DEFAULT_CODE_SNIPPET = `const message = 'Você precisa pagar para ter acesso a este gist 😜'`

const props = defineProps<{
  isPaid: boolean
  loading: boolean
  code: string
  lang: string
}>()

const loading = ref<boolean>(true)
const htmlCode = ref<string>('')

const registerSyntaxHighlighting = async () => {
  loading.value = true

  const starryNight = await createStarryNight(common)
  const scope = starryNight.flagToScope(props.lang)
  const tree = starryNight.highlight(
    props.isPaid ? DEFAULT_CODE_SNIPPET : props.code,
    scope!,
  )

  htmlCode.value = toHtml(tree)
  loading.value = false
}

onMounted(() => registerSyntaxHighlighting())
</script>

<template>
  <Loader :loading="props.loading || loading">
    <div class="relative w-full" v-if="props.isPaid">
      <span class="absolute left-[50%] top-[43%] z-[999]">
        <i class="pi pi-lock text-3xl text-gray-700"></i>
      </span>

      <pre
        :class="{ 'blur-sm': props.isPaid }"
        class="w-full select-none overflow-x-hidden rounded bg-gray-200 p-5"
        v-html="htmlCode"
      ></pre>
    </div>

    <pre
      v-else
      v-html="htmlCode"
      class="w-full overflow-x-scroll rounded bg-gray-200 p-5"
    ></pre>
  </Loader>
</template>
