<script setup lang="ts">
const { render } = useMarkdown()

const emit = defineEmits<{
  (e: 'tap', id: string): void
}>()

const props = defineProps<{
  id: string
  title: string
  description: string
  price: number
  lang: string
}>()

const isFree = computed(() => props.price === 0)
const description = computed(() => render(props.description))
const amount = computed(() =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    props.price,
  ),
)

const handleTap = () => emit('tap', props.id)
</script>

<template>
  <Card>
    <template #title>
      <div class="flex flex-wrap gap-2">
        {{ props.title }}
        <Chip class="text-sm" :label="props.lang" icon="pi pi-bolt" />
      </div>
    </template>

    <template #content>
      <div v-html="description"></div>
    </template>

    <template #footer>
      <Button
        @click="handleTap"
        v-if="isFree"
        label="Baixar gratuitamente"
        class="w-full"
        icon="pi pi-shopping-bag"
        icon-pos="right"
      ></Button>
      <Button
        @click="handleTap"
        v-else
        :label="`Comprar por ${amount}`"
        class="w-full"
        icon="pi pi-shopping-bag"
        icon-pos="right"
      ></Button>
    </template>
  </Card>
</template>
