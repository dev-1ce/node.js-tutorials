const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our Home page')
    }
    if(req.url ==='/about')
    {
        res.end('This is about');
    }
    else{
    res.end(
        `<h1>OOps</h1>`
    )
    }
})

server.listen(5000)