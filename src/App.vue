<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/share/component/header.vue'
import Footer from '@/share/component/footer.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
