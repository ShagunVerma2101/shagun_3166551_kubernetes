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

// Create
module.exports.create = (req, res, next) => {
	const {title, complete} = req.body;

	var sql = `INSERT INTO todo (title, complete) VALUES (?,?);`;

	con.query(sql, [title, complete], function (err, result) {
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
