const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');

const vendor = require('./routers/vendorapi');

const PORT = config.PORT;

var app = express();

app.use(bodyParser.json());

app.use(cors());

app.route('/vendor', vendor);

app.listen(PORT, () => {
    console.log('Your app is runing in post ' + PORT);
});