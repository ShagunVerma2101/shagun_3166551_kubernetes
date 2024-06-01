const { Router } = require('express');
const router = Router();

// Import Controllers
const tasksController = require('../controllers/tasksController');

router.get('/tasks', tasksController.getAll);
router.post(
	'/tasks',
	tasksController.create
);
router.delete('/tasks', tasksController.delete);

module.exports = router;
