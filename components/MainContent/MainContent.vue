<template>
  <div class="flex h-full w-full flex-col">
    <slot class="flex-1" name="header"></slot>

    <div class="h-max w-full flex-1 bg-gray-50">
      <div class="mx-auto h-full w-full max-w-screen-xl p-5">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
