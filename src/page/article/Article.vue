<script setup lang="ts">
import { useRoute } from "vue-router"

import ArticleBody from "@/page/article/component/ArticleBody.vue"
import ArticleHeader from "@/page/article/component/ArticleHeader.vue"

const articleID = useRoute().params.id as string

// TODO 消す
console.log("articleID:", articleID)
</script>

<template>
  <ArticleHeader
    :title="'タイトル123タイトル123タイトル123タイトル123タイトル123タイトル123'"
    :publishedAt="'2025-01-01T12:34:56Z'"
    :updatedAt="'2025-01-01T12:34:56Z'"
  />
  <ArticleBody
    :tags="['Go', 'Gin', 'JavaScript', 'TypeScript', 'Vue.js', 'AWS', 'DynamoDB', 'Go', 'Gin', 'JavaScript', 'TypeScript', 'Vue.js', 'AWS', 'DynamoDB']"
    :contents="'# 見出し1\n## 見出し1-1\n- aaa\n- bbb\n- ccc'"
  />
</template>
