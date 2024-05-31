require('dotenv').config();
const { con } = require('../db');
var formidable = require('formidable');
var fs = require('fs');

// Get All
module.exports.getAll = (req, res, next) => {
	con.query('SELECT * FROM todo', function (err, result, fields) {
		if (err) {
			return next(err);
		}
		res.json({
			status: 'success',
			result: result,
		});
	});
};

// Get One
module.exports.getOne = (req, res, next) => {
	const id = req.params.id;
	con.query(`SELECT * FROM todo WHERE id=?`, [id], function (
		err,
		result,
		fields
	) {
		if (err) {
			return next(err);
		}
		res.json({
			status: 'success',
			result: result,
		});
	});
};

// Create
module.exports.create = (req, res, next) => {
	const task = req.body.task;

	var sql = `INSERT INTO todo(task) VALUES(?)`;

	con.query(sql, [task], function (err, result) {
		if (err) {
			return next(err);
		}

		res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
				insertId: result.insertId,
			},
		});
	});
};

// Update
module.exports.update = (req, res, next) => {
	const id = req.body.id;
	const task = req.body.task;
	const status = req.body.status;

	var sql = `UPDATE todo SET title=?`;

	con.query(sql, [task, status, id], function (err, result) {
		if (err) {
			return next(err);
		}
		res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
			},
		});
	});
};

// Delete
module.exports.delete = (req, res, next) => {
	const id = req.body.id;
	var sql = `DELETE FROM todo WHERE id=?`;

	con.query(sql, [id], function (err, result) {
		if (err) {
			return next(err);
		}
		res.json({
			status: 'success',
			result: {
				affectedRows: result.affectedRows,
			},
		});
	});
};
