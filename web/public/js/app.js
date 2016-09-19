var App = angular.module('App', [
'ngRoute',
'controllers',
'services',
'angular-loading-bar',

]);

App.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/show-tasks.html',
		controller: 'ReadCtrl'
	})

	.when('/create', {
		templateUrl: 'views/create.html',
		controller: 'CreateCtrl'
	})

	.when('/task/:id', {
		templateUrl: 'views/show-task.html',
		controller: 'ShowTaskCtrl'
	})

	.when('/edit/:id', {
		templateUrl: 'views/edit.html',
		controller: 'EditCtrl'
	})
});

App.value('API', 'http://localhost:3000/api/');
