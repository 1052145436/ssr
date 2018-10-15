# 平安 V3.0

> 平安官网

## Build Setup
``` bash
# 新建.env(私有)文件
API_HOST=接口地址

# 安装依赖
npm install

# 开发构建 http://ip:6239
npm run dev

# 生产构建
npm run build

# 生产构建并查看包分析器报告
npm run build --report
```

## 注意事项
* 功能页样式表必须使用 **“scoped”**
* iconfont图标尽量使用 **“Unicode”** 字符
* API尽量书写[js-doc](http://www.css88.com/doc/jsdoc/)
* API权限验证开关
    ``` base
    {
        Authorization: true
    }
    ```
* 路由权限验证开关
    ``` base
    meta: {
        Authorization: true
    }
    ```
* 路由必须使用 **“name”** 进行跳转
