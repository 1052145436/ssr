// hotfix ie
import 'babel-polyfill/dist/polyfill'
import Vue from 'vue'

import App from '@/App'
import router from '@/router'
import store from '@/store'
import LangEn from '../static/language/en'
import LangCn from '../static/language/cn'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    // 定义默认语言
    locale: 'en',
    messages: {
        'en': LangEn,
        'cn': LangCn
    }
})

/* eslint-disable */
export function createApp() {
    const app = new Vue({
        store,
        router,
        i18n, //<====
        render: h => h(App)
    })
    return { app, store, router }
}
