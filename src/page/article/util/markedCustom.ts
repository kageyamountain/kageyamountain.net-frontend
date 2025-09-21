import { slug } from "github-slugger"
import hljs from "highlight.js"
import { marked } from "marked"

// 見出し情報を格納する配列（目次生成用）
let headings: Array<{ id: string; text: string; depth: number }> = []

// markedデフォルトから拡張が必要な要素のカスタマイズ
export function createCustomRenderer() {
  const renderer = new marked.Renderer()

  // 見出し
  renderer.heading = (token) => {
    const { text, depth } = token
    const id = slug(text)

    // 見出し情報を保存（目次用）
    headings.push({ id, text, depth })

    return `<h${depth} id="${id}">${text}</h${depth}>`
  }

  // コードブロック：シンタックスハイライト + ファイル名表示
  renderer.code = (token) => {
    const { text, lang } = token

    // `言語:ファイル名` の形式をパース
    let language = "plaintext"
    let filename = ""

    if (lang && lang.includes(":")) {
      const parts = lang.split(":")
      language = parts[0] || "plaintext"
      filename = parts[1] || ""
    } else if (lang) {
      language = lang
    }

    let highlightedCode = text
    if (language && hljs.getLanguage(language)) {
      try {
        highlightedCode = hljs.highlight(text, { language }).value
      } catch (err) {
        console.warn("シンタックスハイライトでエラー:", err)
        highlightedCode = hljs.highlightAuto(text).value
      }
    } else {
      try {
        highlightedCode = hljs.highlightAuto(text).value
      } catch (err) {
        console.warn("自動シンタックスハイライトでエラー:", err)
      }
    }

    // ファイル名がある場合はヘッダーを追加
    const filenameHeader = filename ? `<div class="code-filename">${filename}</div>` : ""

    return `<div class="code-block">
      ${filenameHeader}
      <pre class="code-pre"><code class="code-content language-${language}">${highlightedCode}</code></pre>
    </div>`
  }

  // インラインコード：CSSでスタイリングするためのクラス付与
  renderer.codespan = (token) => {
    const { text } = token
    return `<code class="inline-code">${text}</code>`
  }

  return renderer
}

// 見出し情報を取得する
export function getHeadings() {
  return headings
}

// 見出し情報をリセットする
export function resetHeadings() {
  headings = []
}
