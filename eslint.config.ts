import pluginVitest from "@vitest/eslint-plugin"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
import { globalIgnores } from "eslint/config"
import pluginImport from "eslint-plugin-import"
import pluginVue from "eslint-plugin-vue"

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  globalIgnores([
    // prettierで改行させるためのコメント
    "**/dist/**",
    "**/dist-ssr/**",
    "**/coverage/**",
    "/src/api/openapi-generate/**",
  ]),

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
  skipFormatting,

  // import順序のルール設定
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js組み込みモジュール (fs, path等)
            "external", // npm パッケージ (vue, axios等)
            "internal", // 内部モジュール (@/で始まるもの等)
            "parent", // 親ディレクトリから (../*)
            "sibling", // 同一ディレクトリから (./*)
            "index", // index ファイル
          ],
          pathGroups: [
            // Vueを最優先
            {
              pattern: "vue",
              group: "external",
              position: "before",
            },
            // Vue関連ライブラリ
            {
              pattern: "vue-*",
              group: "external",
              position: "before",
            },
            // @/で始まる内部モジュール
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always", // グループ間に空行を入れる
          alphabetize: {
            order: "asc", // アルファベット順でソート
            caseInsensitive: true, // 大文字小文字を区別しない
          },
        },
      ],
      "import/newline-after-import": "error", // import文の後に空行を強制
      "import/no-duplicates": "error", // 重複するimportを統合
    },
  },

  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off", // 1単語のコンポーネント名を許可
      "vue/no-unused-vars": "error", // 未使用変数
      "vue/no-unused-components": "error", // 未使用コンポーネント
      "vue/require-v-for-key": "error", // v-forでkey必須
      "vue/no-mutating-props": "error", // propsの変更禁止
    },
  },

  {
    files: ["**/*.{ts,mts,tsx,vue}"],
    rules: {
      "@typescript-eslint/no-unused-vars": "error", // 未使用変数
      "@typescript-eslint/no-explicit-any": "warn", // any型の使用を警告
      "prefer-const": "error", // 再代入されない変数のconst強制
      "no-var": "error", // varの使用禁止
      // "no-duplicate-imports": "error", // 重複import禁止 // import/no-duplicatesと重複するためコメントアウト
    },
  },
)
