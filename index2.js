const http = require('http')

http.createServer((req, res) => {
    let body = []
    req.on('error', (err) => {
        console.error(err)
    }).on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        //res.statusCode = 404
        //res.setHeader('Content-Type', 'meo/json')
        res.writeHead(304, {
            'Content-Type': 'dog/json',
            'SMT': 'nana'
        })
        res.end(body)
    })
}).listen(3000, 'localhost', () => {
    console.log('Server running on port 3000')
})