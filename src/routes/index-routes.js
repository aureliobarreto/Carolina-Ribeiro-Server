'use strict'

const express = require('express');
const router = express.Router();

 router.get('/', (req ,res, next) => {
    console.log('PARAMS: ', req.query)
    if(req.query.opt == '01'){
        res.status(200).send({
            message: "opt1 !!!!"
        });
    }else{
        res.status(200).send({
        title: "Carolina Ribeiro Grifes",
        version: "0.0.1"
        }); 
    }
    

    /*res.status(200).send({
        title: "Carolina Ribeiro Grifes",
        version: "0.0.1"
    }); */
});



module.exports = router;