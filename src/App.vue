<script setup lang="ts">
import { RouterView } from "vue-router"
import Header from "@/share/component/header.vue"
import Footer from "@/share/component/footer.vue"
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <main class="bg-app-secondary flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
