import qiniu, { conf } from 'qiniu'

import config from '../config'

const { AK, SK, bucket } = config

var qnconfig: conf.ConfigOptions = new qiniu.conf.Config()
qnconfig.zone = qiniu.zone.Zone_z2

// 七牛配置
export function qiniuConfig() {
    const config: conf.ConfigOptions = new qiniu.conf.Config()
    // 空间对应的机房
    config.zone = qiniu.zone.Zone_z2
    return config
}

export function qiniuUpload({ file }) {
    const mac = new qiniu.auth.digest.Mac(AK, SK)
    var options = {
        scope: bucket,
        //将多个数据处理指令拼接起来
        persistentOps: 'avthumb/mp4/s/480x320/vcodec/libx264',
        //数据处理队列名称，必填
        persistentPipeline: '0Pure',
        //数据处理完成结果通知地址
        persistentNotifyUrl: ''
    }

    const putPolicy = new qiniu.rs.PutPolicy(options)
    const localFile = file
    const uploadToken = putPolicy.uploadToken(mac)
    const config = qiniuConfig()
    const formUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()
    // 文件上传
    formUploader.putFile(uploadToken, null, localFile, putExtra, (respErr, respBody, respInfo) => {
        if (respErr) {
            throw respErr
        }
        if (respInfo.statusCode == 200) {
            console.log({
                key: respBody,
                type: 'success'
            })
        } else {
            console.log({ type: 'err', msg: respBody })
        }
    })
}
