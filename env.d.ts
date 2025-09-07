/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_HOST_URL: string
  readonly VITE_API_HOST_URL: string
  readonly VITE_API_TIMEOUT_MILLI_SECONDS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
