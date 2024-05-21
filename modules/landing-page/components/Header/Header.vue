<script setup lang="ts"></script>

<template>
  <header class="w-full shadow">
    <nav class="bg-white px-4 py-2.5 lg:px-6">
      <div
        class="mx-auto flex max-w-screen-xl items-center justify-center md:justify-between"
      >
        <div class="flex items-center">
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </div>

        <div class="hidden items-center md:flex">
          <Button
            label="Continuar como creator"
            icon-pos="right"
            icon="pi pi-arrow-right"
          ></Button>
        </div>
      </div>
    </nav>
  </header>
</template>
