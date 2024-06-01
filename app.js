require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(
	cors({
		//origin: process.env.CLIENT_URL
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // folder to upload files

global.__basedir = __dirname; // very important to define base directory of the project. this is useful while creating upload scripts

// Connect Database
const con = require('./db');

// Routes
app.get('/', (req, res, next) => {
	try {
		res.json({
			status: 'success',
			message: 'Welcome 🙏',
		});
	} catch (err) {
		return next(err);
	}
});

const taskRoute = require('./routes/taskRoute');
app.use([taskRoute]); // you can add more routes in this array

//404 error
app.get('*', function (req, res) {
	res.status(404).json({
		message: 'What?? 🙅',
	});
});

//An error handling middleware
app.use((err, req, res, next) => {
	console.log('🐞 Error Handler');
	console.log(err);
	console.log(err.status);
	console.log(err.statusCode);

	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	// Check for the specific MySQL error
	if (err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') {
		console.log('Attempting to reconnect to MySQL...');
		handleDisconnect();
	}

	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		err: err,
	});
});

// Run the server
const port = process.env.PORT || 3000;
app.listen(port, () =>
	console.log(`🐹 app listening on http://localhost:${port}`)
);
