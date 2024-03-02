const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Fucking home page')
    }
    if (req.url === '/about') {
        res.end('Fucking about page')
    }
    res.end('Fucking error page')
})

server.listen(5000, () => {
    console.log('Server listening on port 5000...');
})