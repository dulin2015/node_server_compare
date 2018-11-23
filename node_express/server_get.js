const express = require('express');
const url = require('url');

let server = express();
server.listen(7000);

server.get('/aaa', (req, res, next) => {
    console.log(req.url)
    let { pathname, query } = url.parse(req.url, true);
    // res.send(query);
    req.gender = '女'
    next();
    
})

server.get('/aaa', (req, res) => {
    let { pathname, query } = url.parse(req.url, true);
    console.log(req)
    res.send(req.gender)
}) 