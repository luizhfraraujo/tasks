var App = angular.module('services', []);

App.factory('Lembretes', function($http, API){
	var lembretes = [{titulo: 'Ola'},{titulo: 'Ola Hello'}];
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
})
