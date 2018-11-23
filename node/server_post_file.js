const http = require('http');
const multiparty = require('multiparty');

let server = http.createServer((req, res) => {
    let form = new multiparty.Form({
        uploadDir: './upload'
    });

    form.parse(req, (err, fields, files) => {
        // console.log(req)
        // console.log(fields)
        // console.log(files)
    })

    form.on('file', (name, value) => {
        console.log('file: ', name, value)
    })

    form.on('field', (name, value) => {
        console.log('field: ', name, value)
    })

    form.on('close', () => {
        console.log('解析完成')
    })



});

server.listen(7000);