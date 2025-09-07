<script setup lang="ts">
import { ref } from 'vue'
import { apiClient } from '@/api/client.ts'
import type { components } from '@/api/openapi-generate/api.ts'

// 型定義
type Article = components['schemas']['Article']

// リアクティブ変数
const articles = ref<Article[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

// 基本的な記事一覧取得
const fetchArticles = async () => {
  loading.value = true
  error.value = null

  try {
    const { data, response, error: apiError } = await apiClient.GET('/articles')

    const requestId = response.headers.get('X-Request-ID')
    console.log('X-Request-ID:', requestId)
    console.log('data:', data)
    console.log('error:', apiError)

    articles.value = data ? data.articles : []
    console.log(articles.value)

    if (apiError) {
      console.log('failed')
    } else if (data) {
      console.log('success')
    }
  } catch (err) {
    console.log('failed')
  } finally {
    loading.value = false
  }
}

// // フィルタ付き取得（年指定）
// const fetchArticlesWithFilter = async () => {
//   loading.value = true
//   error.value = null
//
//   try {
//     const { data, error: apiError } = await client.GET('/articles', {
//       params: {
//         query: {
//           'publish-year': 2024,
//         },
//       },
//     })
//
//     console.log('=== GET /articles?publish-year=2024 ===')
//     console.log('data:', data)
//     console.log('error:', apiError)
//
//     if (apiError) {
//       error.value = `API Error: ${apiError.message}`
//     } else if (data) {
//       articles.value = data.articles
//       console.log(`✅ 2024年の記事 ${data.articles.length}件を取得`)
//     }
//   } catch (err) {
//     error.value = `Network Error: ${err}`
//     console.error('Network Error:', err)
//   } finally {
//     loading.value = false
//   }
// }
//
// // フィルタ付き取得（タグ指定）
// const fetchArticlesWithTags = async () => {
//   loading.value = true
//   error.value = null
//
//   try {
//     const { data, error: apiError } = await client.GET('/articles', {
//       params: {
//         query: {
//           tags: ['Go', 'JavaScript'],
//         },
//       },
//     })
//
//     console.log('=== GET /articles?tags=Go,JavaScript ===')
//     console.log('data:', data)
//     console.log('error:', apiError)
//
//     if (apiError) {
//       error.value = `API Error: ${apiError.message}`
//     } else if (data) {
//       articles.value = data.articles
//       console.log(`✅ Go・JavaScriptの記事 ${data.articles.length}件を取得`)
//     }
//   } catch (err) {
//     error.value = `Network Error: ${err}`
//     console.error('Network Error:', err)
//   } finally {
//     loading.value = false
//   }
// }
</script>

<template>
  <div>
    <h2>記事一覧テスト</h2>
    <button @click="fetchArticles">記事一覧を取得</button>
    <!--    <button @click="fetchArticlesWithFilter">2024年の記事を取得</button>-->
    <!--    <button @click="fetchArticlesWithTags">Go・JavaScriptの記事を取得</button>-->

    <div v-if="loading">読み込み中...</div>
    <div v-if="error">エラー: {{ error }}</div>
    <div v-if="articles.length > 0">{{ articles.length }}件の記事が取得されました</div>
  </div>
</template>

<style scoped>
button {
  margin: 8px;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
