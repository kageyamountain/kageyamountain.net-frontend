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
      path: "/error",
      name: "error",
      component: () => import("../page/error/Error.vue"),
      meta: { title: "エラー | kageyamountain.net" },
      props: (route) => ({ errorCode: route.query.error_code }),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../page/error/Error.vue"),
      meta: { title: "エラー | kageyamountain.net" },
      props: { errorCode: "not_found" },
    },
  ],
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || "kageyamountain.net"
})

export default router
