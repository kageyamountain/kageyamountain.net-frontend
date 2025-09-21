import highlightJS from "highlight.js"
import { marked } from "marked"

// markedの設定
export function setupMarked() {
  marked.setOptions({
    renderer: createCustomRenderer(), // カスタムレンダラーを利用してTailwindクラスでスタイリング
    gfm: true, // GitHub Flavored Markdown
    breaks: false,
  })

  return marked
}

export function createCustomRenderer() {
  const renderer = new marked.Renderer()

  // 見出し
  renderer.heading = (token) => {
    const { text, depth: level } = token
    const classes = {
      1: "text-3xl font-bold mb-6 mt-8 text-gray-900 border-b border-gray-200 pb-2",
      2: "text-2xl font-semibold mb-4 mt-6 text-gray-800 border-b border-gray-200 pb-2",
      3: "text-xl font-medium mb-3 mt-5 text-gray-700",
      4: "text-lg font-medium mb-2 mt-4 text-gray-700",
      5: "text-base font-medium mb-2 mt-3 text-gray-600",
      6: "text-sm font-medium mb-2 mt-2 text-gray-600",
    }
    return `<h${level} class="${classes[level as keyof typeof classes] || "text-base font-medium mb-2"}">${text}</h${level}>`
  }

  // パラグラフ
  renderer.paragraph = (token) => {
    const { text } = token
    return `<p class="mb-4 text-gray-700 leading-relaxed">${text}</p>`
  }

  // リスト
  renderer.list = (token) => {
    const { items, ordered } = token
    const tag = ordered ? "ol" : "ul"
    const classes = ordered ? "list-decimal list-inside mb-4 space-y-1" : "list-disc list-inside mb-4 space-y-1"
    const body = items.map((item) => `<li class="text-gray-700 ml-2">${item.text}</li>`).join("")
    return `<${tag} class="${classes}">${body}</${tag}>`
  }

  // 引用
  renderer.blockquote = (token) => {
    const { text } = token
    return `<blockquote class="border-l-4 border-blue-200 pl-4 py-2 my-4 bg-blue-50 text-gray-700 italic">${text}</blockquote>`
  }

  // コードブロック
  renderer.code = (token) => {
    const { text, lang } = token

    let highlightedCode = text
    if (lang && highlightJS.getLanguage(lang)) {
      try {
        highlightedCode = highlightJS.highlight(text, { language: lang }).value
      } catch (err) {
        console.warn("シンタックスハイライトでエラー:", err)
        highlightedCode = highlightJS.highlightAuto(text).value
      }
    } else {
      // 言語が指定されていない場合は自動検出
      try {
        highlightedCode = highlightJS.highlightAuto(text).value
      } catch (err) {
        console.warn("自動シンタックスハイライトでエラー:", err)
      }
    }

    return `<pre class="bg-gray-900 rounded-lg overflow-x-auto mb-4"><code class="block p-4 text-sm text-white language-${lang || "plaintext"}">${highlightedCode}</code></pre>`
  }

  // インラインコード
  renderer.codespan = (token) => {
    const { text } = token
    return `<code class="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono">${text}</code>`
  }

  // リンク
  renderer.link = (token) => {
    const { href, title, text } = token
    const titleAttr = title ? ` title="${title}"` : ""
    return `<a href="${href}"${titleAttr} class="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors">${text}</a>`
  }

  // 強調
  renderer.strong = (token) => {
    const { text } = token
    return `<strong class="font-bold text-gray-900">${text}</strong>`
  }

  // 斜体
  renderer.em = (token) => {
    const { text } = token
    return `<em class="italic text-gray-700">${text}</em>`
  }

  // 水平線
  renderer.hr = () => {
    return `<hr class="border-gray-300 my-8">`
  }

  // テーブル
  renderer.table = (token) => {
    const { header, rows } = token
    const headerHtml = header.map((cell) => `<th class="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left">${cell.text}</th>`).join("")

    const bodyHtml = rows.map((row) => `<tr class="border-b border-gray-200">${row.map((cell) => `<td class="border border-gray-300 px-4 py-2">${cell.text}</td>`).join("")}</tr>`).join("")

    return `<div class="overflow-x-auto mb-4">
      <table class="min-w-full border-collapse border border-gray-300">
        <thead><tr>${headerHtml}</tr></thead>
        <tbody>${bodyHtml}</tbody>
      </table>
    </div>`
  }

  return renderer
}
