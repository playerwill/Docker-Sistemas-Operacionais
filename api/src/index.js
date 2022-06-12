const { Console } = require('console');
const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: '172.17.0.2',
    user: 'root',
    password: 'deckerbd',
    database: 'dockerdb'
});

connection.connect();

app.get('/products', function(req, res) {
    connection.query('select * FROM products', function (error, results) {
        if (error) {
            throw error
        };
    })

    res.send(results.map(item => ({ name: item.name, price: item.price})));
});

app.listen(9001, '0.0.0.0', function(){
    console.log('Listening on port 9001');
})