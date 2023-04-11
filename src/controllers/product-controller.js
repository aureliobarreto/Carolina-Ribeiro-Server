'use strict';

const mongoose = require('mongoose');
const product = require('../models/product');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    console.log(req.body);
    prod = new Product(req.body);
    prod.save().then(x => {
        res.status(200).send({
            message: 'Produto cadastrado com sucesso'
        })
    }).catch(e => {
        res.status(400).send({
            message: 'Erro ao cadastrar',
            data: e
        })
    })
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

exports.get = (req, res, next) => {    
    res.status(200).send({
        message: 'TA BELEZA!'
    })
};