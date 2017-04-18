var express = require('express');
var router = express.Router();

var taskList = [
	{id : 1, name : 'Learn JavaScript', isCompleted : false},
	{id : 2, name : 'Watch Fast & Furious 8', isCompleted : true}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tasks/index', { tasks : taskList });
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	var newTaskName = req.body.taskName,
		newTaskId = taskList.reduce(function(result, task){
			return result > task.id ? result : task.id;
		}, 0) + 1,
		newTask = {
			id : newTaskId,
			name : newTaskName,
			isCompleted : false
		};
	taskList.push(newTask);
	res.redirect('/tasks');
});

router.post('/toggle/:id', function(req, res, next){
	var taskToToggle = taskList.filter(function(task){
		return task.id.toString() === req.params.id;
	})[0];
	if (taskToToggle){
		taskToToggle.isCompleted = !taskToToggle.isCompleted;
	}
	res.redirect('/tasks');
});

router.get('/api', function(req, res, next){
	res.json({tasks : taskList});
});

module.exports = router;