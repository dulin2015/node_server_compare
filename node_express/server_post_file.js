const express = require('express');
const body = require('body-parser');
const multer = require('multer');

let server = express();
server.listen(7000);

server.use(body.urlencoded({
    extended: false
}));

let options = multer({dest: 'uploads/'});

server.use(options.any());

server.post('/reg', (req, res) => {
    console.log(req.body)
    console.log(req.files)
    res.send('ok')
})

                                                   