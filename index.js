const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');





const routes = require('./routes/app');

const app = express();
const PORT = process.env.port || 4000;



app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(bodyParser.json());
// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use('/',routes);


app.listen(PORT, function() {
    console.log(`listening at PORT (${PORT})`);
});




