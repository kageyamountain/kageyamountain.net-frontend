<template>
  <header class="bg-app-primary w-full h-[70px]">
    <div class="text-white container mx-auto flex items-baseline h-full">
      <router-link to="/" class="text-2xl mt-4">Kageyamountain.net</router-link>
      <div class="ml-10">
        <router-link to="/" active-class="underline underline-offset-2" class="">Home</router-link>
        <router-link to="/search" active-class="underline underline-offset-2" class="ml-6">Search</router-link>
      </div>
    </div>
  </header>
</template>
