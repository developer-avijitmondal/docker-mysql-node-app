var mysql = require('mysql2');
require('dotenv').config();

// var connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : '',
//     database : 'chat'
// });

var connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected with mysql...');
});

module.exports = connection;
