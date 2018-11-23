const Koa = require('koa');
const url = require('url');

let server = new Koa();
server.listen(7000);

server.use(ctx => {
    console.log(ctx);
    let { pathname, query } = url.parse(ctx.url, true);
    ctx.body = query
})