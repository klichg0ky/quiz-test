import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainPage from '@/components/MainPage.vue'
import QuizTest from '@/components/QuizTest.vue'


const routes = [
    { path: '/', component: MainPage },
    { path: '/quiz', component: QuizTest },
    {
        path: '*',
        beforeEnter(to, from, next) {
            next('/')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router;