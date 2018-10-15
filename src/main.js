// hotfix ie
import 'babel-polyfill/dist/polyfill'
import Vue from 'vue'

import App from '@/App'
import router from '@/router'
import store from '@/store'


/* eslint-disable */
export function createApp () {
    const app = new Vue({
        store,
        router,
        render: h => h(App)
    })
    return { app, store, router }
}
