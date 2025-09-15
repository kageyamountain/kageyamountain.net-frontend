import type { paths } from "@/api/openapi-generate/api.ts"

import createClient from "openapi-fetch"


export const apiClient = createClient<paths>({
  baseUrl: import.meta.env.VITE_API_HOST_URL,
})
