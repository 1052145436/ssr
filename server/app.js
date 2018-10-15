/**
 *
 * @author 请叫我蛋蛋哥 <76573917@qq.com>
 * @created 2018/07/02 11:27
 */
const path = require('path')
const opn = require('opn')
const Koa = require('koa')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./public/vue-ssr-server-bundle.json')
const clientManifest = require('./public/vue-ssr-client-manifest.json')
const resolve = file => path.resolve(__dirname, file)
const template = require('fs').readFileSync(resolve('./template/index.blade.html'), 'utf-8')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest
})

const renderToString = (context) => {
    return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            err ? reject(err) : resolve(html)
        })
    })
}

const app = new Koa()

app.use(require('koa-static')(resolve('./public')))

// response
app.use(async (ctx, next) => {
    try {
        const context = { url: ctx.url }

        // 将服务器端渲染好的html返回给客户端
        ctx.body = await renderToString(context)

        // 设置请求头
        ctx.set('Content-Type', 'text/html')
    } catch (err) {
        // 如果没找到，放过请求，继续运行后面的中间件
        next()
    }
})

const port = 3100
app.listen(port)
    .on('listening', () => {
        const url = `http://localhost:${port}`

        console.log(`\n Server running at ${url}!\n`)
        opn(url)
    })
    .on('error', (err) => {
        console.log('listen：', err)
    })
