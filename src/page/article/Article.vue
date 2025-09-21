<script setup lang="ts">
import { computed, onMounted } from "vue"

import { useRoute } from "vue-router"

import { useArticleApi } from "@/api/composable/useArticleApi.ts"
import ArticleBody from "@/page/article/component/ArticleBody.vue"
import ArticleHeader from "@/page/article/component/ArticleHeader.vue"
import router from "@/router/index.ts"

const articleID = useRoute().params.article_id as string
const { isLoading, data, error, getArticleApi } = useArticleApi()

onMounted(async () => {
  await getArticleApi(articleID)
  if (error.value) {
    await router.push({ name: "error", query: { error_code: error.value.code } })
    return
  }
})

const showContents = computed(() => {
  return data.value?.article
})
</script>

<template>
  <!-- TODO 本番環境で表示パフォーマンスが気になる場合は、ローディングやスケルトン表示を検討する -->
  <div
    v-if="isLoading"
    class="container mx-auto"
  />
  <div v-else-if="showContents">
    <ArticleHeader
      :title="data?.article.title || ''"
      :publishedAt="data?.article.published_at || ''"
      :updatedAt="data?.article.updated_at || ''"
    />
    <ArticleBody
      :tags="data?.article.tags || []"
      :contents="data?.article.contents || ''"
    />
  </div>
</template>
