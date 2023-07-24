import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     component: () => import('@/views/HomeView.vue'),
    //     meta: {requireAuth: false}
    // },
    // {
    //     path: '/:view/:token',
    //     component: () => import('@/views/MainView.vue'),
    //     meta: {requireAuth: false}
    // },
    // {
    //     path: '/signup/:telegramId/:botId',
    //     name: 'signup',
    //     component: () => import('@/views/HomeView.vue'),
    //     meta: {requireAuth: false}
    // },
    // {
    //     path: '/login/:telegramId/:botId',
    //     name: 'login',
    //     component: () => import('@/views/HomeView.vue'),
    //     meta: {requireAuth: false}
    // },
    // {
    //     path: '/profile/:telegramId/:botId',
    //     name: 'profile',
    //     component: () => import('@/views/HomeView.vue'),
    //     meta: {requireAuth: true}
    // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const auth: boolean = new Auth()
// router.beforeEach( (to, from) => {
//     if (!auth.checkAuth && to.meta.requireAuth)
//         return {name: 'signup'}
// })

export default router
