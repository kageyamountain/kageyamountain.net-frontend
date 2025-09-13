export const TAG_COLORS = {
  Go: "bg-slate-400",
  Gin: "bg-slate-500",

  JavaScript: "bg-amber-400",
  TypeScript: "bg-blue-400",
  "Vue.js": "bg-emerald-400",

  AWS: "bg-orange-400",
  DynamoDB: "bg-orange-500",
} as const

export type TagColorKey = keyof typeof TAG_COLORS
