import Router from 'koa-router'
import axios from 'axios'
import qiniu, { conf } from 'qiniu'

import config from '../config'
import download from '../utils/download'
import ffmpegHandle from '../utils/ffmpeg-handle'

const { AK, SK, bucket } = config

const TestRouter = new Router()
// 请求七牛token
TestRouter.get('/qiniuToken', async (ctx, next) => {
    const mac = new qiniu.auth.digest.Mac(AK, SK)
    var options = {
        scope: bucket
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    ctx.body = {
        token: uploadToken
    }
})
// 转码
TestRouter.get('/transform', async (ctx, next) => {
    const startTime = new Date().valueOf()
    return new Promise((resolve, reject) => {
        const data = ctx.request.query
        const mac = new qiniu.auth.digest.Mac(AK, SK)
        const pipeline = '0Pure'
        const fops = ['avthumb/mp4/vcodec/libx264']
        const qnconfig: conf.ConfigOptions = new qiniu.conf.Config()
        // 空间对应的机房
        qnconfig.zone = qiniu.zone.Zone_z2
        var options = {
            force: false
        }
        const operManager = new qiniu.fop.OperationManager(mac, qnconfig)
        operManager.pfop(bucket, data.key, fops, pipeline, options, function(err, respBody, respInfo) {
            if (err) {
                throw err
            }
            if (respInfo.statusCode == 200) {
                const url = `http://api.qiniu.com/status/get/prefop?id=${respBody.persistentId}`
                loop(url)
                function loop(url) {
                    axios
                        .get(url)
                        .then(function(response) {
                            if (response.data.desc.indexOf('successfully') > 0) {
                                const endTime = new Date().valueOf()
                                ctx.body = {
                                    key: response.data.items[0].key,
                                    timeConsuming: (endTime - startTime) / 1000
                                }
                                resolve('success')
                            } else {
                                const url = `http://api.qiniu.com/status/get/prefop?id=${response.data.id}`
                                loop(url)
                            }
                        })
                        .catch(function(error) {
                            console.log(error)
                        })
                }
            } else {
                console.log(respInfo.statusCode)
                console.log(respBody)
            }
        })
    })
})
// ffmpeg转码
TestRouter.get('/ffmpegTransform', async (ctx, next) => {
    ffmpegHandle()
})
export default TestRouter
