const http = require('http')

const server = http.createServer()
server.on('request', (req, res) => {
    // let body = []
    // req.on('error', err => {
    //     console.error(err)
    // }).on('data', chunk => {
    //     body.push(chunk)
    // }).on('end', () => {
    //     body = Buffer.concat(body).toString()
    //     res.on('error', err => {
    //         console.error(err)
    //     })

    //     res.statusCode = 200
    //     res.setHeader('Content-Type', 'application/json')

    //     const { method, url, headers } = req
    //     const responseBody = { method, url, headers, body }
    //     res.write(JSON.stringify(responseBody))
    //     res.end()
    // })

    /**
     * Only echo data if method is POST and url is /echo
     */

    // const { method, url, headers } = req
    // if (method === 'POST' && url === '/echo') {
    //     let body = []
    //     req.on('data', chunk => {
    //         body.push(chunk)
    //     }).on('end', () => {
    //         body = Buffer.concat(body).toString()
    //         res.end(body)
    //     })
    // } else {
    //     res.statusCode = 404
    //     res.end()
    // }

    /**
     * Pipe data from req directly to response
     */
    const { method, url, headers } = req
    req.on('error', err => {
        console.error(err)
        res.statusCode = 400
        res.end()
    })
    res.on('error', err => {
        console.error(err)
    })
    if (method === 'POST' && url === '/echo') {
        req.pipe(res)
    } else {
        res.statusCode = 404
        res.end()
    }


}).listen(3000, 'localhost', () => {
    console.log('App running on port 3000!')
})