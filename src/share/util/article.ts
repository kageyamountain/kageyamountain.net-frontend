import { TAG_COLORS, type TAG_COLORS_KEY } from "@/share/constant"

/**
 * タグ値に対応する色を取得する
 * @param tag タグ値
 * @returns 対応する色のクラス名
 */
export function getTagColor(tag: string): string {
  return TAG_COLORS[tag as TAG_COLORS_KEY] || "bg-gray-400"
}

/**
 * ISO8601 形式の文字列をローカルタイムの "yyyy-mm-dd" 形式に変換する
 * @param isoDate ISO8601 形式の文字列
 * @returns ローカルタイムの日付文字列
 * @example
 * ```typescript
 * convertToLocalDate("2025-01-01T12:34:56Z") // "2025-01-01"
 * ```
 */
export function convertToLocalDate(isoDate: string): string {
  const date = new Date(isoDate)
  return date.toLocaleDateString("sv-SE")
}
