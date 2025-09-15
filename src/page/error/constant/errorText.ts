import type { ErrorCode } from "@/share/type/index.ts"

export const ERROR_TEXTS = {
  internal_server_error: {
    title: "予期せぬエラーが発生しました",
    message: "エラーが発生しました。時間をおいて再度お試しください。",
  },
  not_found: {
    title: "お探しのページは見つかりませんでした",
    message: "ページは存在しないか、移動した可能性があります。",
  },
} as const satisfies Record<ErrorCode, { title: string; message: string }>
