import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'article-list',
      component: () => import('../page/article-list/ArticleList.vue'),
    },
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../page/sample/Index.vue'),
    },
    {
      path: '/fetch-sample',
      name: 'fetch-sample',
      component: () => import('../page/fetch-sample/Index.vue'),
    },
  ],
})

export default router
