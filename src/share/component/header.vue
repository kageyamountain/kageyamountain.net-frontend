<template>
  <header class="bg-app-primary h-[70px] w-full">
    <div class="container mx-auto flex h-full items-baseline text-white">
      <router-link to="/" class="mt-4 text-2xl">kageyamountain.net</router-link>
      <div class="ml-10">
        <router-link to="/" active-class="underline underline-offset-2" class="">Home</router-link>
        <router-link to="/search" active-class="underline underline-offset-2" class="ml-6">Search</router-link>
      </div>
    </div>
  </header>
</template>
