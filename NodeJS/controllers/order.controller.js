const express = require('express');
var router = express.Router();

var { Order } = require('../models/order');

router.get('/', (req, res) => {
    var order = new Order({
        customer: req.body.customer
    });

    Order.find({customer: order.customer}, (err, docs) => {
        if(!err) {
            if(docs)
                res.send(docs);
            else
                return res.send(400).status('Could not find order for customer: ' + order.customer);
        }   
        else
            console.log('Error in finding order: ' + JSON.stringify(err, undefined, 2));
    });
});

router.post('/', (req, res) => {
    var order = new Order({
       itemname: req.body.itemname,
       customer: req.body.customer,
       quantity: req.body.quantity,
    });

    order.save((err, doc) => {
        if(!err)    res.send(doc);
        else        console.log('Error in recording order: ' + JSON.stringify(err, undefined, 2));
    });
});

module.exports = router;