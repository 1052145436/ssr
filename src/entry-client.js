/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/07/02 11:29
 */
import { createApp } from './main'

const { app, router } = createApp()

router.onReady(() => {
    app.$mount('#app')
})
