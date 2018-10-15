/**
 *
 * @author 请叫我蛋蛋哥 <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'home',
        path: '/',
        meta: {
            title: '首页'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/home')
    }
]
