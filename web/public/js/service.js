var App = angular.module('services', []);

App.factory('Tasks', function($http, API){
	
	return {
		read: function(){
			return $http.get(API+'tasks');
		},
		create: function(item){
			return $http.post(API+'tasks', item);
		},
		profile: function(id){
			return $http.get(API+'tasks/'+id);
		},
		update: function(item, id){
			return $http.put(API+'tasks/'+id, item);
		},
		delete: function(id){
			return $http.delete(API+'tasks/'+id);
		}
	}
});

App.factory('Categories', function($http, API){
	return {
		read: function(){
			return $http.get(API+'categories');
		},
		create: function(item){
			return $http.post(API+'categories', item);
		},
		profile: function(id){
			return $http.get(API+'categories/'+id);
		},
		update: function(item, id){
			return $http.put(API+'categories/'+id, item);
		},
		delete: function(id){
			return $http.delete(API+'categories/'+id);
		}
	}
});
