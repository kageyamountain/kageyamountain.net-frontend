<script setup lang="ts">
import { computed, onMounted } from "vue"

import { useApiArticles } from "@/api/composable/useApiArticles.ts"
import ArticleCard from "@/page/article-list/component/ArticleCard.vue"
import router from "@/router/index.ts"

const { isLoading, data, error, getArticlesApi } = useApiArticles()

onMounted(async () => {
  await getArticlesApi()
  if (error.value) {
    await router.push({ name: "error", query: { error_code: error.value.code } })
    return
  }
})

const showArticles = computed(() => {
  return data.value?.articles && data.value.articles.length > 0
})
</script>

<template>
  <div class="bg-app-secondary w-full">
    <!-- TODO 本番環境で表示パフォーマンスが気になる場合は、ローディングやスケルトン表示を検討する -->
    <div
      v-if="isLoading"
      class="container mx-auto"
    ></div>
    <div
      v-else-if="showArticles"
      class="container mx-auto grid grid-cols-1 items-start gap-x-5 gap-y-11.25 px-4 py-11 md:grid-cols-2 lg:grid-cols-3"
    >
      <ArticleCard
        v-for="article in data?.articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
