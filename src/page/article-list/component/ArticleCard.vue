<script setup lang="ts">
import type { components } from "@/api/openapi-generate/api.ts"
import { getTagColor, convertToLocalDate } from "@/share/util"

type Article = components["schemas"]["Article"]

defineProps<{ article: Article }>()
</script>

<template>
  <div>
    <div class="bg-app-primary h-[130px] rounded-t-3xl px-3.75 text-white">
      <div class="pt-3 text-sm">
        {{ convertToLocalDate(article.published_at) }}
      </div>
      <div class="line-clamp-3 py-1 text-lg">
        {{ article.title }}
      </div>
    </div>
    <!-- タグはflex-wrapの折り返し2行目までが表示されるように高さ調整している -->
    <div class="flex h-[62px] flex-wrap content-start gap-x-2 gap-y-2 overflow-hidden rounded-b-3xl bg-white px-3.75 py-1.75 text-sm text-white">
      <p
        v-for="tag in article.tags"
        :key="tag"
        :class="`rounded-xl px-3 ${getTagColor(tag)}`"
      >
        {{ tag }}
      </p>
    </div>
  </div>
</template>
