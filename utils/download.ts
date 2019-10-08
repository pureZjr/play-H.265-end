import fs from 'fs'
import http from 'http'

export default function download(url, name) {
    const file = fs.createWriteStream(`./videos/${name}`)
    http.get(url, response => {
        response.pipe(file)
    })
}
