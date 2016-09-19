var express = require('express');
var App = express.Router();
var Categories = getmodule('crud/categories');


/* GET home page. */
App.route('/')
	.get(Categories.read)
	.post(Categories.create);


App.route('/:id')
	.get(Categories.profile)
	.put(Categories.update)
	.delete(Categories.delete);


module.exports = App;
