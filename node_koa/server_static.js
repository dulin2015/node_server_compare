const Koa = require('koa');
const static = require('koa-static');

let server = new Koa();
server.listen(7000);

server.use(static('./static'));