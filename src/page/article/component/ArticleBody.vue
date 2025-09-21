<script setup lang="ts">
import "highlight.js/styles/github-dark.css"

import { computed } from "vue"

import { marked } from "marked"

import { dummyContents } from "@/page/article/test/dummyContents.ts"
import { createCustomRenderer } from "@/page/article/util/markedConfig.ts"
import { getTagColor } from "@/share/util/index.ts"

const props = defineProps<{
  tags: string[]
  contents: string
}>()

// Markdown変換ライブラリの設定
marked.setOptions({
  renderer: createCustomRenderer(), // カスタムレンダラーを利用してTailwindクラスでスタイリング
  gfm: true, // GitHub Flavored Markdown
  breaks: false,
})

// MarkdownをHTMLに変換
const displayContents = computed(() => {
  if (!props.contents) return ""
  // TODO ダミーデータからpropsに変更
  // return marked(props.contents)
  return marked(dummyContents)
})
</script>

<template>
  <div class="container mx-auto flex px-4">
    <article class="w-full bg-white p-3">
      <!-- タグ表示 -->
      <div class="flex flex-wrap content-start gap-x-2 gap-y-2 pb-7 text-sm text-white">
        <p
          v-for="tag in tags"
          :key="tag"
          :class="`rounded-xl px-3 ${getTagColor(tag)}`"
        >
          {{ tag }}
        </p>
      </div>
      <!-- コンテンツ表示 -->
      <div v-html="displayContents"></div>
    </article>
    <div class="ml-5 w-[235px]">
      <div class="text-sm">目次</div>
      <div>
        <div class="text-xs">・見出し1</div>
      </div>
    </div>
  </div>
</template>
