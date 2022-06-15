const http = require('http');
const fs = require('fs')

const host = '127.0.0.1'
const PORT = 8000;

const server = http.createServer((req, res) => {
    const urlPath = req.url;
    if (urlPath === '/' || urlPath === '/index') {
        fs.readFile('./pages/index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end()
        })
    } else if (urlPath === '/about') {
        fs.readFile('./pages/about.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end()
        })
    } else if (urlPath === '/contact') {
        fs.readFile('./pages/contact.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end()
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/json' })
        res.write('Error 404. Page not found')
    }

})

server.listen(PORT, host, () => {
    console.log(`Server running at port: ${PORT}`)
})