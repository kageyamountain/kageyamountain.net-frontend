import { ref } from "vue"
import type { paths } from "@/api/openapi-generate/api.ts"
import { apiClient } from "@/api/client.ts"

type ApiHeaders = paths["/articles"]["get"]["responses"]["200"]["headers"] | paths["/articles"]["get"]["responses"]["500"]["headers"]
type Data = paths["/articles"]["get"]["responses"]["200"]["content"]["application/json"]
type Error = paths["/articles"]["get"]["responses"]["500"]["content"]["application/json"]

export function useApiArticles() {
  const isLoading = ref(false)
  const status = ref<number>()
  const headers = ref<ApiHeaders>()
  const data = ref<Data>()
  const error = ref<Error>()

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
      // TODO 共通エラーページへ遷移させる
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, status, headers, data, error, getArticlesApi }
}
