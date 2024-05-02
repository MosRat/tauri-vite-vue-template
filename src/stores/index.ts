import {defineStore} from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        message: 'Hello World',
    }),
})