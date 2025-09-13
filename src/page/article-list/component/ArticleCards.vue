<script setup lang="ts">
import ArticleCard from "@/page/article-list/component/ArticleCard.vue"
</script>

<template>
  <div class="bg-app-secondary w-full">
    <div class="container mx-auto grid grid-cols-1 items-start gap-x-5 gap-y-11.25 px-4 py-11 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  </div>
</template>
