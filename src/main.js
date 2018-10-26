// hotfix ie
// import 'babel-polyfill/dist/polyfill'
import '@/libs/polyfill/closest'
import '@/libs/polyfill/classlist'
import '@/libs/polyfill/requestAnimationFrame'
import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import enUS from '@/language/en-US'
import zhCN from '@/language/zh-CN'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'zh-CN',
    messages: {
        'en-US': enUS,
        'zh-CN': zhCN
    }
})

/* eslint-disable */
export function createApp() {
    const app = new Vue({
        i18n,
        store,
        router,
        render: h => h(App)
    })
    return { app, store, router }
}
