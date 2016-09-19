var express = require('express');
var App = express.Router();
var Lembretes = getmodule('api/lembrete');


/* GET home page. */
App.route('/lembretes')
	.get(Lembretes.read)
	.post(Lembretes.create);


App.route('/lembrete/:id')
	.get(Lembretes.profile)
	.put(Lembretes.update)
	.delete(Lembretes.delete);


module.exports = App;
