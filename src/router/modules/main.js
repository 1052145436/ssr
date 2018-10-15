/**
 *
 * @author 请叫我蛋蛋哥 <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'main',
        path: '/',
        meta: {
            title: '公司首页'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/main')
    }
]
