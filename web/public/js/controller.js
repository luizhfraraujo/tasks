var App = angular.module('controllers', []);

App.controller('ReadTasksCtrl', function($scope, Tasks, $route){
	$scope.loading = true;
	$scope.lembretes = [];
	$scope.notFound = false;
	Tasks.read().then(function(data){
		$scope.lembretes = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
		$scope.loading = false;
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		Lembretes.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});
	}

	$scope.completed = function(item){
		item.complete = 1;
		Lembretes.update(item, item.id).then(function(data){
			//$route.reload();
		});
	}
	$scope.uncompleted = function(item){
		item.complete = 0;
		Lembretes.update(item, item.id).then(function(data){

		});
	}
});

App.controller('CreateTaskCtrl', function($scope, Tasks, $location){
	$scope.cadastrar = function(titulo){
		var data = {
			title: titulo,
			complete: 0
		};

		Tasks.create(data).then(function(data){
			$location.path('/');
		});
	}
});

App.controller('EditTaskCtrl', function($scope, Tasks, $routeParams, $location){
	var id = $routeParams.id;
	Tasks.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		Tasks.update(item, item.id).then(function(data){
			$location.path('/');
		});
	}
});

App.controller('ReadTaskCtrl', function($scope, Tasks, $routeParams, $location){
	var id = $routeParams.id;
	Tasks.profile(id).then(function(data){
		$scope.item = data.data;
	})
});

App.controller('ReadCategoriesCtrl', function($scope, Categories, $route){
	$scope.loading = true;
	$scope.lembretes = [];
	$scope.notFound = false;
	Tasks.read().then(function(data){
		$scope.lembretes = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
		$scope.loading = false;
	},function(data){
		console.log("data", data);
	});

	$scope.deletar = function(id){
		Lembretes.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});
	}

	$scope.completed = function(item){
		item.complete = 1;
		Lembretes.update(item, item.id).then(function(data){
			//$route.reload();
		});
	}
	$scope.uncompleted = function(item){
		item.complete = 0;
		Lembretes.update(item, item.id).then(function(data){

		});
	}
});
