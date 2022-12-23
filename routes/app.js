const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Heart = require('../models/heart');

const {Parser} = require('json2csv');

const fs = require('fs');

const parserObj = new Parser();

router.get('/upload',(req,res) => {

    res.sendFile(~(__dirname) + 'public/upload.html');
});


router.get('/',(req,res) => {

    res.sendFile(~(__dirname) + 'public/index.html');
});

router.get('/form',(req,res) => {

    res.sendFile(~(__dirname) + 'public/form/index.html');
});



router.post('/form', (req,res) => {

    // const json = JSON.stringify(req.body);
    const csv = parserObj.parse(req.body);

    // console.log(csv);

    console.log(req.body); 

    fs.writeFileSync('./test.csv',csv);

    // res.sendFile(~(__dirname) + 'public/index.html');
    res.send(req.body);
});

router.post('/user', (req,res) => {
    User.create(req.body).then((user) => {
        res.send(user);
    })
});






module.exports = router;
