require('dotenv').config();
var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'mysql-normal',
	user: 'root',
	password: 'root',
	database: 'todo',
});

con.connect(function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('💾 MySQL Server Connected!');
});

module.exports.con = con;
