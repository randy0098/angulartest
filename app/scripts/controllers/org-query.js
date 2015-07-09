'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:OrgQueryCtrl
 * @description # OrgQueryCtrl Controller of the angulartestApp
 */
angular.module('angulartestApp').controller('OrgQueryCtrl',
		function($scope, $http) {
			$scope.queryBtn = function() {
				// alert("1");
				var data = $("#queryForm").serialize();
				$http.get('http://localhost:8080/webtest/rest/getOrgList',data).success(function(response) {
					$scope.orgs = response;
				}).error(function(data, status, headers, config) {
					// alert(data);
					// alert(status);
					// alert(headers);
					// alert(config);
				});
				//alert("2");
			};
		});
