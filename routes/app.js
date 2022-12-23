const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Heart = require('../models/heart');

const {Parser} = require('json2csv');

const fs = require('fs');

const parserObj = new Parser();


router.get('/',(req,res) => {

    res.sendFile("C:/Users/Spars/Projects/Health-backend/index.html");
});

// get user data from db
router.get('/user', (req,res) => {
    res.send({type: "GET"});
});

router.post('/heart', (req,res) => {
    // Heart.create(req.body).then( (heart) => {
    //     res.send(heart);
    // })

    const csv = parserObj.parse(req.body);

    console.log(csv);
    console.log(req.body.sex);


    fs.writeFileSync('./test.csv',csv);

    res.send("not found");
    
})

router.post('/user', (req,res) => {
    User.create(req.body).then((user) => {
        res.send(user);
    })
});






module.exports = router;
