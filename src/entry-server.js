/**
 *
 * @author lucy <76573917@qq.com>
 * @created 2018/07/02 11:31
 */
import { createApp } from './main'

export default context => {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp()

        router.push(context.url)
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()

            if (!matchedComponents.length) {
                // eslint-disable-next-line
                return reject({ code: 404 })
            }
            resolve(app)
        }, reject)
    })
}
