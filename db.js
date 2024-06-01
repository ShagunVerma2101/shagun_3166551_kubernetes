require('dotenv').config();
var mysql = require('mysql');

var con;

function handleDisconnect() {
	con = mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	});

	con.connect(function (err) {
		if (err) {
			console.error('error connecting to db:', err);
			setTimeout(handleDisconnect, 2000); // Retry connection after 2 seconds
		} else {
			console.log('💾 MySQL Server Connected!');
		}
	});

	con.on('error', function (err) {
		console.error('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect(); // Reconnect if connection is lost
		} else {
			throw err;
		}
	});
}

handleDisconnect();

module.exports.con = con;