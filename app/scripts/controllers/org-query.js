'use strict';

/**
 * @ngdoc function
 * @name angulartestApp.controller:OrgQueryCtrl
 * @description # OrgQueryCtrl Controller of the angulartestApp
 */
angular.module('angulartestApp').controller(
		'OrgQueryCtrl',
		function($scope, $http, $modal, $log) {
			$scope.queryBtn = function() {
				var data = $("#queryForm").serialize();
				$http
						.get('http://localhost:8080/webtest/rest/getOrgList',
								data).success(function(response) {
							$scope.orgs = response;
						}).error(function(data, status, headers, config) {

						});
			};

			$scope.addBtn = function() {
				var modalInstance = $modal.open({
					animation : true,
					templateUrl : 'views/org-create.html',
					controller : 'createOrgCtrl',
					size : 'lg'
				});

				modalInstance.result.then(function() {
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

		});

angular.module('angulartestApp').controller('createOrgCtrl',
		function($scope, $modalInstance) {

			$scope.ok = function() {
				$modalInstance.close();
			};

			$scope.cancel = function() {
				$modalInstance.dismiss('cancel');
			};
		});