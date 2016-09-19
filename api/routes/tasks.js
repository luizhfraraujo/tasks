var express = require('express');
var App = express.Router();
var Tasks = getmodule('crud/tasks');


/* GET home page. */
App.route('/')
	.get(Tasks.read)
	.post(Tasks.create);


App.route('/:id')
	.get(Tasks.profile)
	.put(Tasks.update)
	.delete(Tasks.delete);


module.exports = App;
