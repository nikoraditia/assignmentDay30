var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Apaajaboleh123',
  database : 'day30',
  port     : '3306'
});

module.exports = db;
