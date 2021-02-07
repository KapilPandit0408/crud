require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');


const employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname,'/views/'));
app.enable('hbs', exphbs(
    {extname:'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname +'/views/layouts'}
    ));
app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.redirect("/employee");
})


app.use('/employee', employeeController)
module.exports=app;