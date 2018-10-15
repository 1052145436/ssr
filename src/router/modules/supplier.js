/**
 *
 * @author 请叫我蛋蛋哥 <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'supplier',
        path: '/',
        meta: {
            title: '供应商链入驻'
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/supplier')
    }
]
