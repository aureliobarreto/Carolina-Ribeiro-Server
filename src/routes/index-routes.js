'use strict'

const express = require('express');
const router = express.Router();

 router.get('/', (req ,res, next) => {
    console.log(req)
    res.status(200).send({
        title: "Carolina Ribeiro Grifes",
        version: "0.0.1"
    }); 
});



module.exports = router;