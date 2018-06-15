import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/public/login'
import home from '@/components/home'
// const login = () => {
//     import('@/components/public/login')
// }
// const home = () => {
//     import('@/components/home')
// }


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home,
        }

    ]
})
