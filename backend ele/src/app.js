const path = require('path')
const jsonServer = require('json-server')
const router = require('./router')
const db = require('./db')()

const server = jsonServer.create()

const middlewares = jsonServer.defaults({
    static: path.join(__dirname, '../public')
})
server.use(middlewares)
//req.body
server.use(jsonServer.bodyParser)

// 在所有路由之前定义响应方法
server.use((req, res, next) => {
    const json = res.json.bind(res)
    
    // 成功响应方法
    res.success = (data) => {
        return json({
            code: 0,
            msg: '请求成功',
            data
        })
    }
    
    // 失败响应方法
    res.fail = (msg, code = -1, data) => {
        return json({
            code,
            msg,
            data
        })
    }
    next()
})

// 路由配置
router(server)
const jsonRouter = jsonServer.router(db)
server.use('/api', jsonRouter)

server.listen(8000, () => {
    console.log('JSON Server is running at 8000')
})