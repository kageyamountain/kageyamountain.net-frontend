<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold text-blue-600 mb-6">TailwindCSS Sample Page</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- カード1 -->
      <div class="bg-white p-6 rounded-lg shadow-md border">
        <h2 class="text-xl font-semibold mb-3">カード1</h2>
        <p class="text-gray-600 mb-4">TailwindCSSのサンプルカードです。</p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          ボタン1
        </button>
      </div>

      <!-- カード2 -->
      <div class="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
        <h2 class="text-xl font-semibold text-green-800 mb-3">カード2</h2>
        <p class="text-green-600 mb-4">異なる色のサンプルカードです。</p>
        <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          ボタン2
        </button>
      </div>
    </div>

    <!-- グリッドサンプル -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">グリッドサンプル</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="i in 8" :key="i" class="bg-purple-100 p-4 text-center rounded">
          アイテム {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// サンプル用の簡単なscript
</script>
