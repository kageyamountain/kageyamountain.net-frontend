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
      component: () => import('../page/sample/index.vue'),
    },
  ],
})

export default router
