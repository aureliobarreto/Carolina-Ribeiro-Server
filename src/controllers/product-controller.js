'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    console.log(req.body);
    /*
    var product = new Product(req.body);
    product.save().then(r => {
        res.status(201).send();
    }).catch(e => {
        res.status(400).send()
        console.log(e);
    }) */

    
    
};
   
exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    })
};