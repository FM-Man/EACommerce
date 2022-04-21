const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const { mongoose } = require('./db');
var customerController = require('../NodeJS/controllers/customer.controller');
var orderController = require('../NodeJS/controllers/order.controller')

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => console.log('server started at port: 3000'));



app.use('/customer', customerController);
app.use('/order', orderController);

