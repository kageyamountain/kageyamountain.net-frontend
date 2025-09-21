<script setup lang="ts">
import { convertToLocalDate } from "@/share/util/index.ts"

defineProps<{
  title: string
  publishedAt: string
  updatedAt: string
}>()
</script>

<template>
  <div class="h-[194px] w-full">
    <div class="container mx-auto h-full px-4 pt-8.5 pb-4.5">
      <div class="h-[122px] text-center text-2xl">{{ title }}</div>
      <div class="flex justify-center text-sm">
        <div>公開: {{ convertToLocalDate(publishedAt) }}</div>
        <div class="ml-4">更新: {{ convertToLocalDate(updatedAt) }}</div>
      </div>
    </div>
  </div>
</template>
