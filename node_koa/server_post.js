const Koa = require('koa');
const body = require('koa-better-body');
const Router = require('koa-router');

let server = new Koa();
server.listen(7000);

server.use(body({
    uploadDir: 'uploads/'
}))

let router = new Router();

router.post('/reg', ctx => {
    console.log(ctx.request.fields);
    ctx.body = 'successed';
})

server.use(router.routes());

