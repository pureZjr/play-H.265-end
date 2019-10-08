export default function run() {
    return new Promise((resolve, reject) => {
        const ffmpeg = require('fluent-ffmpeg')
        let startTime

        const proc = new ffmpeg()
        proc.addInput(require('path').join(__dirname, '../videos/h.265.mp4'))
            .on('start', function(ffmpegCommand) {
                /// log something maybe
                startTime = new Date().valueOf()
                console.log(ffmpegCommand)
            })
            .on('progress', function(data) {
                /// do stuff with progress data if you want
                console.log(data)
            })
            .on('end', function() {
                /// encoding is complete, so callback or move on at this point
                const timeConsuming = (new Date().valueOf() - startTime) / 1000
                console.log('end', timeConsuming)
                resolve({
                    timeConsuming
                })
            })
            .on('error', function(error) {
                console.log(error)
                reject(error)
            })
            .outputOptions(['-c:v libx264'])
            .addOptions(['-preset ultrafast', '-crf 23', '-profile Baseline', '-tune fastdecode'])
            .output(require('path').join(__dirname, '../videosOuput/out.mp4'))
            .run()
    })
}
