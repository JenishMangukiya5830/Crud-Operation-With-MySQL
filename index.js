const express = require('express');

const path = require('path');

const app = express();

const port = 5030;

const mysql = require('./Config/SQL');

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('/views',path.join(__dirname,'views'));

app.use('/',require('./Routers/index'));

app.listen(port,(err) => {
    if(err)
    {
        console.log('Server not Start');
    }
    console.log(`Server Start on port :- ${port}`);
})