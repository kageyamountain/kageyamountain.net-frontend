<script setup lang="ts">
import "highlight.js/styles/github-dark.css"

import { computed } from "vue"

import { marked } from "marked"

import { createCustomRenderer } from "@/page/article/util/markedConfig.ts"
import { getTagColor } from "@/share/util/index.ts"

const props = defineProps<{
  tags: string[]
  contents: string
}>()

// Markdown変換ライブラリの設定
marked.setOptions({
  renderer: createCustomRenderer(), // カスタムレンダラーを利用してmarkedデフォルトから拡張が必要な要素のカスタマイズ
  gfm: true, // GitHub Flavored Markdown
  breaks: false,
})

// MarkdownをHTMLに変換
// スタイルは `src/tailwind.css` で設定
const displayContents = computed(() => {
  if (!props.contents) return ""
  return marked(props.contents)
})
</script>

<template>
  <div class="container mx-auto flex px-4">
    <article class="mb-15 w-full bg-white p-3">
      <!-- タグ表示 -->
      <div class="flex flex-wrap content-start gap-x-2 gap-y-2 text-sm text-white">
        <p
          v-for="tag in tags"
          :key="tag"
          :class="`rounded-xl px-3 ${getTagColor(tag)}`"
        >
          {{ tag }}
        </p>
      </div>
      <!-- コンテンツ表示 -->
      <div
        class="markdown-content"
        v-html="displayContents"
      />
      <!-- 記事末尾の水平線 -->
      <div class="border-app-primary mt-8 mb-4 border-b-2"></div>
    </article>
    <!-- TODO 目次機能の実装 -->
    <div class="ml-5 hidden w-[235px] lg:block">
      <div class="text-sm">目次</div>
      <div>
        <div class="text-xs">・見出し1</div>
      </div>
    </div>
  </div>
</template>
