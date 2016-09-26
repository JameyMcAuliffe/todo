'use strict'

angular
	.module('todo', [])
	.controller('main', function($scope, $http) {
		$http
			.get('/api/title')
			.then(({ data: { title } }) =>
				$scope.title = title
			)
	})

