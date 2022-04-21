const mongoose = require('mongoose');

var Order = mongoose.model('Order', {
    itemname: {type: String},
    customer: {type: String},
    quantity: {type: Number},
}, 'Orders');

module.exports = {
    Order: Order
};