var App = angular.module('controllers', []);

App.controller('ReadCtrl', function($scope, Lembretes, $route){
	$scope.loading = true;
	$scope.lembretes = [];
	$scope.notFound = false;
	Lembretes.read().then(function(data){
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

App.controller('CreateCtrl', function($scope, Lembretes, $location){
	$scope.cadastrar = function(titulo){
		var data = {
			title: titulo,
			complete: 0
		};

		Lembretes.create(data).then(function(data){
			$location.path('/');
		});
	}
});

App.controller('EditCtrl', function($scope, Lembretes, $routeParams, $location){
	var id = $routeParams.id;
	Lembretes.profile(id).then(function(data){
		$scope.item = data.data;
	})

	$scope.atualizar = function(item){
		console.log(item);
		Lembretes.update(item, item.id).then(function(data){
			$location.path('/');
		});
	}
});


App.controller('ShowTaskCtrl', function($scope, Lembretes, $routeParams, $location){
	var id = $routeParams.id;
	Lembretes.profile(id).then(function(data){
		$scope.item = data.data;
	})
});
