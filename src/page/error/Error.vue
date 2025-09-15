<script setup lang="ts">
import type { ErrorCode } from "@/share/type/index.ts"

import { computed } from "vue"

import { ERROR_TEXTS } from "@/page/error/constant/errorText.ts"

const props = defineProps<{ errorCode?: ErrorCode }>()
const errorCode = computed<ErrorCode>(() => props.errorCode ?? "internal_server_error")
</script>

<template>
  <div class="container mx-auto flex h-[70vh] items-center justify-center px-4 text-center">
    <div>
      <h1 class="mb-4 text-4xl font-bold">{{ ERROR_TEXTS[errorCode].title }}</h1>
      <p class="mb-8 text-lg">{{ ERROR_TEXTS[errorCode].message }}</p>
      <router-link
        to="/"
        class="bg-app-primary inline-block rounded px-6 py-3 text-white"
      >
        ホームに戻る
      </router-link>
    </div>
  </div>
</template>
