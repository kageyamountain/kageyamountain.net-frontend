import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../page/article-list/ArticleList.vue"),
      meta: { title: "記事一覧 | kageyamountain.net" },
    },
    {
      path: "/articles",
      name: "article-list",
      component: () => import("../page/article-list/ArticleList.vue"),
      meta: { title: "記事一覧 | kageyamountain.net" },
    },
    {
      path: "/sample",
      name: "sample",
      component: () => import("../page/sample/Sample.vue"),
      meta: { title: "sample | kageyamountain.net" },
    },
    {
      path: "/fetch-sample",
      name: "fetch-sample",
      component: () => import("../page/fetch-sample/FetchSample.vue"),
      meta: { title: "fetch-sample | kageyamountain.net" },
    },
  ],
})

router.beforeEach((to, from) => {
  document.title = (to.meta.title as string) || "kageyamountain.net"
})

export default router
