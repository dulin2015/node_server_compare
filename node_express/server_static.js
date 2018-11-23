const express = require('express');

let server = express();
server.listen(7000);

server.use(express.static('./static/'))