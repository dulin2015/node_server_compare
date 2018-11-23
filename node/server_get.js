const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url, true);
    console.log(pathname, query)
});

server.listen(7000);