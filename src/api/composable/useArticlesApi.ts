import type { paths } from "@/api/openapi-generate/api.ts"

import { ref } from "vue"

import { apiClient } from "@/api/client.ts"
import { API_RESPONSE_ERRORS } from "@/api/constant/error.ts"

type ApiHeaders = paths["/articles"]["get"]["responses"]["200"]["headers"] | paths["/articles"]["get"]["responses"]["500"]["headers"]
type Data = paths["/articles"]["get"]["responses"]["200"]["content"]["application/json"]
type Error = paths["/articles"]["get"]["responses"]["500"]["content"]["application/json"]

export function useArticlesApi() {
  const isLoading = ref(false)
  const status = ref<number>()
  const headers = ref<ApiHeaders>()
  const data = ref<Data>()
  const error = ref<Error>()

  // GET /articles
  const getArticlesApi = async () => {
    isLoading.value = true

    try {
      // APIコール
      const {
        response: newResponse,
        data: newData,
        error: newError,
      } = await apiClient.GET("/articles", {
        signal: AbortSignal.timeout(Number(import.meta.env.VITE_API_TIMEOUT_MILLI_SECONDS)),
      })

      // レスポンス設定
      status.value = newResponse.status
      headers.value = {
        "X-Request-ID": newResponse.headers.get("X-Request-ID") || "",
      }
      data.value = newData
      error.value = newError
    } catch (exception) {
      console.error("failed to GET /articles", exception)
      error.value = API_RESPONSE_ERRORS.INTERNAL_SERVER_ERROR
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, status, headers, data, error, getArticlesApi }
}
