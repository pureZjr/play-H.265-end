import Koa from 'koa'
import router from 'koa-router'
import cors from 'koa-cors'
import koaBodyParse from 'koa-bodyparser'
import koaBody from 'koa-body'

import TestRouter from './route/index'

const allRouter = new router()
const app = new Koa()

app.use(koaBodyParse())
app.use(
    koaBody({
        multipart: true,
        formidable: {
            maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
        }
    })
)
app.use(cors())

allRouter.use('/test', TestRouter.routes())

app.use(allRouter.routes()).use(allRouter.allowedMethods())

app.listen(3333)
