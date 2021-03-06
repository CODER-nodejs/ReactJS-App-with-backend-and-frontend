const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);

const PORT = 4000; // You can change the port here, Be sure you change the proxy on package.json
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}.`)
});
