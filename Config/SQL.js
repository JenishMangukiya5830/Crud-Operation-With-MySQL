const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'crud'
});

connection.connect((err) => {
    if(err)
    {
        console.log('DB not Connected');
    }
    console.log('DB Connected');
});

module.exports = connection;