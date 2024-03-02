const http = require('http')

const server = http.createServer((req, res) => {   //(request, response)
   if (req.url === '/') {
    res.end('Welcome to hell')
   }
   if (req.url === '/about') {
    res.end('Here is another hell')
   }
   res.end(`
   <h1>Ooopsie!</h1>
   <p>We can't seem to find the hell you are looking for</p>
   <a href="/">back to hell</a>
   `)
})

server.listen(5000)