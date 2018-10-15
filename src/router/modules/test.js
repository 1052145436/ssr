/**
 *
 * @author 请叫我蛋蛋哥 <76573917@qq.com>
 * @created 2018/06/25 14:28
 */
export default [
    {
        name: 'test',
        path: '/test',
        meta: {
            title: '测试页面'
        },
        component: () => import(/* webpackChunkName: "test" */'@/views/test')
    }
]
