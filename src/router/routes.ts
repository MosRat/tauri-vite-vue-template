import type {RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/tauri',
        name: 'tauri',
        alias: '/',
        component: () => import('@view/Tauri.vue'),
    },
    {
        path: '/:pathMatch(.*)*\'',
        name: 'Not Found',
        component: () => import('@view/NotFound.vue'),
    },
]


export default routes