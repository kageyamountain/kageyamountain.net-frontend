<script setup lang="ts">
import { onMounted } from "vue"

import { useArticlesApi } from "@/api/composable/useArticlesApi.ts"
import router from "@/router/index.ts"
import ArticleCard from "@/share/component/ArticleCard.vue"

const { isLoading, data, error, getArticlesApi } = useArticlesApi()

onMounted(async () => {
  await getArticlesApi()
  if (error.value) {
    await router.push({ name: "error", query: { error_code: error.value.code } })
    return
  }
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
      v-else-if="data?.articles"
      class="container mx-auto grid grid-cols-1 items-start gap-x-5 gap-y-11.25 px-4 py-11 md:grid-cols-2 lg:grid-cols-3"
    >
      <ArticleCard
        v-for="article in data.articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
