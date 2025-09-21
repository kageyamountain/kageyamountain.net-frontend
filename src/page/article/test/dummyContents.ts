// src/data/dummyContents.ts
export const dummyContents = `# Vue 3 + TypeScript で始めるモダンWebアプリ開発

## はじめに

Vue 3とTypeScriptを組み合わせることで、**型安全性**と**開発効率**を両立したWebアプリケーションを構築できます。この記事では、実際のプロジェクトで使える実践的なテクニックを紹介します。

## 開発環境のセットアップ

まず、新しいVue 3プロジェクトを作成しましょう：

\`\`\`bash
npm create vue@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

### 必要な依存関係

主要なパッケージは以下の通りです：

- \`vue\`: ^3.3.0
- \`typescript\`: ^5.0.0
- \`@vitejs/plugin-vue\`: ^4.2.0

## Composition APIの基本的な使い方

Vue 3の**Composition API**を使用することで、ロジックの再利用性が向上します。

\`\`\`typescript
// Vueコンポーネントの例
import { ref, computed, onMounted } from 'vue'

// リアクティブな状態
const count = ref<number>(0)
const message = ref<string>('Hello Vue 3!')

// 算出プロパティ
const doubledCount = computed(() => count.value * 2)

// ライフサイクルフック
onMounted(() => {
  console.log('コンポーネントがマウントされました')
})

// メソッド
const increment = (): void => {
  count.value++
}
\`\`\`

## Props の型定義

TypeScriptでPropsを定義する際のベストプラクティス：

\`\`\`typescript
interface UserData {
  id: number
  name: string
  email?: string
}

const props = defineProps<{
  user: UserData
  isActive: boolean
  tags: string[]
}>()
\`\`\`

> **ポイント**: オプショナルなプロパティには \`?\` を使用し、配列やオブジェクトの型も明確に定義しましょう。

## カスタムコンポーザブルの作成

再利用可能なロジックをコンポーザブルとして切り出す例：

\`\`\`typescript
// composables/useCounter.ts
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue

  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}
\`\`\`

## パフォーマンス最適化のTips

### 1. Lazy Loading

\`\`\`javascript
const AsyncComponent = defineAsyncComponent(() =>
  import('./components/HeavyComponent.vue')
)
\`\`\`

### 2. メモ化の活用

\`\`\`typescript
const expensiveValue = computed(() => {
  // 重い計算処理
  return heavyCalculation(props.data)
})
\`\`\`

## テストの書き方

Vue Test UtilsとVitestを使用したテストの例：

\`\`\`typescript
import { mount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('正しくレンダリングされる', () => {
    const wrapper = mount(MyComponent, {
      props: {
        message: 'テストメッセージ'
      }
    })

    expect(wrapper.text()).toContain('テストメッセージ')
  })
})
\`\`\`

## まとめ

Vue 3とTypeScriptの組み合わせにより、以下のメリットを享受できます：

1. **型安全性の向上** - コンパイル時のエラー検出
2. **開発体験の改善** - IDEの補完機能
3. **保守性の向上** - 大規模アプリケーションでの管理

### 参考リンク

- [Vue.js 公式ドキュメント](https://vuejs.org/)
- [TypeScript 公式サイト](https://www.typescriptlang.org/)

---

**著者**: 開発太郎
**投稿日**: 2024年12月21日
**タグ**: Vue3, TypeScript, フロントエンド
`
