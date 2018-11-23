const http = require('http');

let server = http.createServer((req, res) => {
    let arr = [];
    req.on('data', buffer => {
        arr.push(buffer);
    });

    req.on('end', () => {
        let buffer = Buffer.concat(arr)
        console.log(buffer.toString())
    })
});

server.listen(7000);