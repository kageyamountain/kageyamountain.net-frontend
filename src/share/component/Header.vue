<template>
  <header class="bg-app-primary h-[70px] w-full">
    <div class="container mx-auto flex h-full items-baseline px-4 text-white">
      <router-link
        to="/"
        class="mt-4 text-2xl"
      >
        kageyamountain.net
      </router-link>
      <div class="ml-5 sm:ml-8">
        <router-link
          to="/"
          active-class="underline underline-offset-2"
          class="px-2 py-1 transition-colors duration-200 hover:text-blue-100"
        >
          Home
        </router-link>
        <router-link
          to="/search"
          active-class="underline underline-offset-2"
          class="px-2 py-1 transition-colors duration-200 hover:text-blue-100"
        >
          Search
        </router-link>
      </div>
    </div>
  </header>
</template>
