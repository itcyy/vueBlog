import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: '/',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IndexView.vue')
    },
    {
      path: '/Friends',
      name: 'Friends',
      component: () => import('@/components/Friends/index.vue')
    },
    {
      path:'/bilibili/vedio',
      name:'bilibili',
      component:() => import('@/components/video/index.vue')
    },
    {
      path:'/doc',

      component:() => import('@/components/doc.vue')
    },
    {
      path:'/article',

      component:() => import('@/components/article/index.vue')
    },
    {
      path:'/more',
      title:'更多',
      component:() => import('@/components/more/index.vue')
    },
    {
      path:'/gdufe',
      title:'更多',
      component:() => import('@/components/main.vue')
    },
  ]
})

export default router
