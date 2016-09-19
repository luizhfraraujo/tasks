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
		controller: 'ReadTasksCtrl'
	})

	.when('/task/create', {
		templateUrl: 'views/create-task.html',
		controller: 'CreateTaskCtrl'
	})

	.when('/task/:id', {
		templateUrl: 'views/show-task.html',
		controller: 'ReadTaskCtrl'
	})

	.when('/task/edit/:id', {
		templateUrl: 'views/edit-task.html',
		controller: 'EditTaskCtrl'
	})

	.when('/categories', {
		templateUrl: 'views/show-categories.html',
		controller: 'ReadCategoriesCtrl'
	})

	.when('/category/:id', {
		templateUrl: 'views/show-category.html',
		controller: 'ReadCategoryCtrl'
	})
});

App.value('API', 'http://localhost:3000/api/');
