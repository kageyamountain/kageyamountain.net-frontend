import createClient from "openapi-fetch"

import type { paths } from "@/api/openapi-generate/api.ts"

export const apiClient = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_HOST_URL,
})
