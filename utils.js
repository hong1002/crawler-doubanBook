var log = function() {
    console.log.apply(console, arguments)
}

var saveJSON = function(path, json) {
    // 保存文件
    var fs = require('fs')
    var s = JSON.stringify(json, null, 2)
    fs.writeFile(path, s, function(error) {
        if (error !== null) {
            console.log('*** 写入文件错误', error)
        } else {
            console.log('--- 保存成功')
        }
    })
}

var cached_url = function(url) {
    var fs = require('fs')
    // 1, 看缓存文件是否存在
    var path = url.split('?')[1] + '.html'
    var exists = fs.existsSync(path)
    log('cached url', exists)
    if (exists) {
        var data = fs.readFileSync(path)
        return data
    } else {
        var request = require('sync-request')
        // r 是 HTTP 响应的对象
        var r = request('GET', url)
        var body = r.getBody('utf-8')
        // 写入缓存文件
        fs.writeFileSync(path, body)
        return body
    }
}

exports.log = log
exports.save = saveJSON
exports.cached = cached_url
