<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/sample">Sample</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped></style>
